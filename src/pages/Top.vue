<template>
  <div class='top'>
    <span class='tab-item'
          v-if="$store.state.nowuser === null"
          @click="switchTo('/login')">
      <span :class="{on: '/login' === $route.path}">亲，请先登录</span>
    </span>
    <a v-if="$store.state.nowuser !== null"
       style="text-decoration:none;">您好，{{ $store.state.nowuser.username }}，</a>
    <a v-if="$store.state.nowuser !== null"
       style="text-decoration:none;"
       @click="logout">退出登录</a>
    <span class='home-item'
          @click="switchTo('/register')">
      <span :class="{on:'/register' === $route.path}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;免费注册</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
    }
  },
  methods: {
    switchTo (path) {
      this.$router.replace(path)
    },
    logout () {
      this.$store.state.nowuser = null
      alert('账号已退出')
    }
  }
}
</script>

<style>
</style>
