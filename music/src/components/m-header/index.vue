<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Chicken Music</h1>
    <!-- <router-link tag="div" class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link> -->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable"
  @import "~assets/stylus/mixin"

  .m-header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 10px
      width: 22px
      height: 22px
      margin-right: 5px
      bg-image('../../assets/images/logo')
      background-size: 22px 22px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-medium
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>