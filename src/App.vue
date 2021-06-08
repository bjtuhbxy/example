<template>
  <div id="app">
    <menu-left eltype="menu"></menu-left>
    <router-view class="router"/>
  </div>
</template>

<script>
import MenuLeft from "./components/Menu-Left";
export default {
  name: 'App',
  components: {
    MenuLeft
  },
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  // text-align center
  color #2c3e50
  width 100%
  height 100%
  display flex
  [eltype="menu"] {
    width 20%
  }
  .router {
    flex 1
    width 100%
    height 100%
    overflow hidden
  }
</style>
