<template>
  <el-tabs v-model="activeName"
           @tab-click="handleClick"
           class="login">
    <br>
    <el-tab-pane label="密码登录"
                 name="first">
      <el-input placeholder="用户名/邮箱/手机号"
                v-model="input1">
        <template slot="prepend"><i class="el-icon-user-solid"></i></template>
      </el-input>
      <br><br><br>
      <el-input placeholder="请输入密码"
                v-model="input2"
                show-password>
        <template slot="prepend"><i class="el-icon-lock"></i></template>
      </el-input>
      <br><br>
      <el-button class="lgbt"
                 type="primary"
                 @click="checkuser">登录</el-button>
    </el-tab-pane>
  </el-tabs>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      activeName: 'first',
      input1: '',
      input2: ''
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    checkuser () {
      let i = 0
      let flag = 0
      var storage = window.localStorage
      var json = storage.getItem('user')
      var jsonObj = JSON.parse(json)
      var l = jsonObj.length

      for (i = 0; i < l; i++) {
        if (jsonObj[i].username === this.input1 && jsonObj[i].password === this.input2) {
          flag = 1
          this.$store.state.nowuser = jsonObj[i]
          console.log(this.$store.state.nowuser)
          this.switchTo('/home')
          break
        } else if (this.$store.state.nowuser === null && jsonObj[i].username !== this.input1 && jsonObj[i].password !== this.input2) {
          flag = 0
        }
      }
      if (flag === 1) {
        alert('登陆成功')
      } else if (flag === 0) {
        alert('登陆失败,请重新登陆')
      }
    },
    switchTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style>
.login {
  width: 600px;
  margin: auto;
  padding-top: 80px;
}
</style>
