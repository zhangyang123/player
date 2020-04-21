<template>
  <div id="app">
    <m-header></m-header>
    <m-tabs></m-tabs>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import mHeader from 'components/m-header'
import mTabs from 'components/m-tabs'
import player from 'components/player/player'
export default {
  name: 'App',
  components:{
    mHeader,
    mTabs,
    player
  }
}
</script>


