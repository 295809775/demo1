<template>
  <div class='hot'>
    <el-row class="elrow">
      <el-col :span="8"
              v-for="(o, index) in 1"
              :key="o"
              :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }"
                 class="elcard">
          <img :src="$store.state.a[no-1].img"
               class="image"
               @click="switchTo('/introduce')">
          <div style="padding: 14px;">
            <span>{{ $store.state.a[no-1].name }}</span>
            <br>
            <span>¥{{ $store.state.a[no-1].price }}</span>
            <div class="bottom clearfix">
              <el-button type="text"
                         class="button"
                         @click="addto()">加入购物车</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Hot',
  props: ['no'],
  methods: {
    addto () {
      if (this.$store.state.nowuser === null) {
        alert('请先登录！')
        return 0
      }
    },
    switchTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style>
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  padding: 0;
  float: right;
}
.image {
  width: 298px;
  height: 300px;
  display: block;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.elcard {
  width: 298px;
  height: 400px;
}
.hot {
  float: left;
}
</style>
