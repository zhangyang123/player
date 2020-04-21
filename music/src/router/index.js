import Vue from 'vue'
import Router from 'vue-router'
// import Reacommend from 'pages/recommend'
// import Search from 'pages/search'
// import Rank from 'pages/rank'
// import Singer from 'pages/singer'
// import SingerDetail from 'pages/singerdetail/singerdetail'
// import Disc from 'pages/disc/disc'
// import TopList from 'pages/top-list/top-list'



Vue.use(Router)

const Reacommend = (resolve) => {
  import('pages/recommend').then( (module) => {
     resolve(module)
  })
}

const Singer = (resolve) => {
   import('pages/singer').then((module) => {
      resolve(module);
   })
}

const Rank = (resolve) => {
   import('pages/rank').then((module) => {
     resolve(module);
   })
}

const Search = (resolve) => {
  import('pages/search').then((module) => {
    resolve(module);
  })
}

const SingerDetail = (resolve) => {
  import('pages/singerdetail/singerdetail').then((module) => {
    resolve(module);
  })
}

const Disc = (resolve) => {
  import('pages/disc/disc').then((module) => {
    resolve(module);
  })
}

const TopList = (resolve) => {
  import('pages/top-list/top-list').then((module) => {
    resolve(module);
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component:Reacommend,
      children:[
        {
          path:':id',
          component:Disc
        }
      ]
    },
    {
      path: '/search',
      component:Search,
      children:[
        {
          path:':id',
          component:SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component:Rank,
      children:[
         {
            path:':id',
            component:TopList
         }
      ]
    },
    {
      path: '/singer',
      component:Singer,
      children:[
        {
          path:':id',
          component:SingerDetail
        }
      ]
    }
  ]
})
