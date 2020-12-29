<template>
  <div id='app'>
    <tab-bar></tab-bar>
    <router-view></router-view>
    <!-- <tab-bar></tab-bar> -->
  </div>
</template>

<script>
import TabBar from './components/TabBar.vue'
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
