<template>
  <div class="singer" ref="singer">
    <list-view @select="SelectSinger" :data="singers" ref="list"></list-view>
    <router-view></router-view>
  </div>
</template>


<script>
   
   import { getSingerList } from 'api/singer.js'
   import { ERR_OK } from 'api/config.js'
   import Singer from 'common/js/singer'
   import ListView from 'components/listview/listview'
   import { mapMutations } from 'vuex'
   const HOT_NAME = '热门'
   const HOT_SINGRE_LEV = 10

   export default {
       data() {
          return {
            singers:[]
          }
       },
       components:{
         ListView
       },
       mounted() {
          this._getSingerList();
       },
       methods:{
          SelectSinger(singer) {
              this.$router.push({
                 path:`/singer/${singer.id}`
              })
              this.setSinger(singer);
              
          },
          _getSingerList() {
              getSingerList().then(res => {
                if(res.code === ERR_OK){
                   this.singers =  this._normalSingerList(res.data.list);
                   
                }
              }).catch(err => {
                 console.log(err);
              })
          },
          _normalSingerList(list) {
              let map = {
                 hot:{
                    title:HOT_NAME,
                    items:[]
                 }
              }
             list.forEach((item, index) => {
               if(index < HOT_SINGRE_LEV) {
                  map.hot.items.push(new Singer({
                     id:item.Fsinger_mid,
                     name:item.Fsinger_name
                  }))
               }
               const k = item.Findex;
               if(!map[k]) {
                    map[k] = {
                       title:k,
                       items:[]
                    }
                 }
               map[k].items.push(new Singer({
                  id:item.Fsinger_mid,
                  name:item.Fsinger_name
               }))

            })
            let ret = [];
            let hot = [];
            for (let key in map) {
               let val = map[key]
               if(val.title.match(/[a-zA-Z]/)) {
                  ret.push(val);
               }else if(val.title === HOT_NAME) {
                  hot.push(val);
               }
            }
            ret.sort((a, b) => {
               return a.title.charCodeAt(0) - b.title.charCodeAt(0)
            })
            return hot.concat(ret)
          },
          ...mapMutations({
             setSinger:'SET_SINGER'
          })
       }
   }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
