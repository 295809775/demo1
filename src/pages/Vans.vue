<template>
  <div class='vans'>
    <el-row class="elrow">
      <el-col :span="8"
              v-for="(o, index) in 1"
              :key="o"
              :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }"
                 class="elcard">
          <img :src="$store.state.f[no-1].img"
               class="image">
          <div style="padding: 14px;">
            <span>{{ $store.state.f[no-1].name }}</span>
            <br>
            <span>¥{{ $store.state.f[no-1].price }}</span>
            <div class="bottom clearfix">
              <el-button type="text"
                         class="button">加入购物车</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Vans',
  props: ['no']
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
.vans {
  float: left;
}
</style>
