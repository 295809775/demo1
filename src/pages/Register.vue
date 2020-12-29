<template>
  <el-tabs v-model="activeName"
           @tab-click="handleClick"
           class="register">
    <br>
    <el-tab-pane label="注册"
                 name="first">
      <el-input placeholder="用户名/邮箱/手机号"
                v-model="input1">
        <template slot="prepend"><i class="el-icon-user-solid"></i></template>
      </el-input>
      <br><br>
      <el-input placeholder="请输入密码"
                v-model="input2"
                show-password>
        <template slot="prepend"><i class="el-icon-lock"></i></template>
      </el-input>
      <br><br>
      <el-input placeholder="请再次输入密码"
                v-model="input3"
                show-password>
        <template slot="prepend"><i class="el-icon-lock"></i></template>
      </el-input>
      <br><br>
      <el-button class="lgbt"
                 type="primary"
                 @click="checkuser">注册</el-button>
      <el-button type="primary"
                 @click="reset">重置</el-button>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
var storage = window.localStorage
var a = [{
  username: 'aaa',
  password: '123'
}]
var d = JSON.stringify(a)
storage.setItem('user', d)
export default {
  name: 'Register',
  data () {
    return {
      activeName: 'first',
      input1: '',
      input2: '',
      input3: ''
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    checkuser () {
      if (this.input2 !== this.input3) {
        alert('两次密码不一致，请重新输入')
        this.reset()
      } else if (this.input1 === '' || this.input2 === '' || this.input3 === '') {
        alert('输入信息不能为空')
        this.reset()
      } else if (this.checkname() === 0) {
        alert('该用户已存在，请重新输入')
        this.reset()
      } else {
        alert('注册成功')
        this.submit()
      }
    },
    checkname () {
      var storage = window.localStorage
      var json = storage.getItem('user')
      var user = JSON.parse(json)
      var l = user.length
      var i = 0
      var flag = 1
      for (i = 0; i < l; i++) {
        if (user[i].username === this.input1) {
          flag = 0
          break
        }
      }
      if (flag === 0) {
        return 0
      }
    },
    submit () {
      var storage = window.localStorage
      var json = storage.getItem('user')
      var user = JSON.parse(json)
      var a = {
        username: this.input1,
        password: this.input2
      }
      user.push(a)
      var data = JSON.stringify(user)
      storage.setItem('user', data)
      console.log(user)
      this.switchTo('/home')
    },
    switchTo (path) {
      this.$router.replace(path)
    },
    reset () {
      this.input1 = ''
      this.input2 = ''
      this.input3 = ''
    }
  }
}
</script>

<style>
.register {
  width: 600px;
  margin: auto;
  padding-top: 80px;
}
</style>
