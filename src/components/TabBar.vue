<template>
  <div class='top-tab'>
    <span class='tab-item'
          @click="switchTo('/home')">
      <span :class="{on: '/home' === $route.path}">首页</span>
    </span>
    <span class='tab-item'
          v-if="$store.state.nowuser !== null"
          style="text-decoration:none;"
          @click="switchTo('/cart')">
      <span :class="{on: '/cart' === $route.path}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;购物车</span>
    </span>
    <span class='tab-item'
          v-if="$store.state.nowuser !== null"
          style="text-decoration:none;"
          @click="switchTo('/me')">
      <span :class="{on: '/me' === $route.path}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;个人中心</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  methods: {
    switchTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style>
.top-tab {
  width: 1600px;
  height: 30px;
  position: relative;
  top: 0px;
  left: 880px;
  z-index: 2;
}
.on {
  color: red;
}
</style>
