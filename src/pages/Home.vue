<template>
  <div class='home'>
    <top></top>
    <div class="container">
      <div class="input-group">
        <input type="text"
               class="form-control input-lg"><span class="input-group-addon btn btn-primary">搜索</span>
      </div>
    </div>
    <div id="demo"
         class="carousel slide"
         data-ride="carousel">
      <ul class="carousel-indicators">
        <li data-target="#demo"
            data-slide-to="0"
            class="active"></li>
        <li data-target="#demo"
            data-slide-to="1"></li>
        <li data-target="#demo"
            data-slide-to="2"></li>
      </ul>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="static/img/demo1.jpg"
               style="width: 100% height: 100%">
        </div>
        <div class="carousel-item">
          <img src="static/img/demo2.jpg"
               style="width: 100% height: 100%">
        </div>
        <div class="carousel-item">
          <img src="static/img/demo3.jpg"
               style="width: 100% height: 100%">
        </div>
      </div>
      <a class="carousel-control-prev"
         href="#demo"
         data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next"
         href="#demo"
         data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
    <div class="recommend">
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="精选"
                     name="first">
          <hot v-for="item in 9"
               :no=item
               :key="item"
               id="card"></hot>
        </el-tab-pane>
        <el-tab-pane label="Nike"
                     name="second">
          <nike v-for="item in 5"
                :no=item
                :key="item"
                id="card"></nike>
        </el-tab-pane>
        <el-tab-pane label="AirJordan"
                     name="third">
          <airjordan v-for="item in 4"
                     :no=item
                     :key="item"
                     id="card"></airjordan>
        </el-tab-pane>
        <el-tab-pane label="Adidas"
                     name="fourth">
          <adidas v-for="item in 5"
                  :no=item
                  :key="item"
                  id="card"></adidas>
        </el-tab-pane>
        <el-tab-pane label="Puma"
                     name="fifth">
          <puma v-for="item in 6"
                :no=item
                :key="item"
                id="card"></puma>
        </el-tab-pane>
        <el-tab-pane label="Vans"
                     name="sixth">
          <vans v-for="item in 6"
                :no=item
                :key="item"
                id="card"></vans>
        </el-tab-pane>
        <el-tab-pane label="New Balance"
                     name="seventh">
          <newbalance v-for="item in 5"
                      :no=item
                      :key="item"
                      id="card"></newbalance>
        </el-tab-pane>
        <el-tab-pane label="Under Armour"
                     name="eighth">
          <underarmour v-for="item in 5"
                       :no=item
                       :key="item"
                       id="card"></underarmour>
        </el-tab-pane>
        <el-tab-pane label="Reebok"
                     name="ninth">
          <reebok v-for="item in 6"
                  :no=item
                  :key="item"
                  id="card"></reebok>
        </el-tab-pane>
        <el-tab-pane label="Converse"
                     name="tenth">
          <converse v-for="item in 6"
                    :no=item
                    :key="item"
                    id="card"></converse>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Top from './Top'
import Hot from './Hot'
import Nike from './Nike'
import AirJordan from './AirJordan'
import Adidas from './Adidas'
import Puma from './Puma'
import Vans from './Vans'
import NewBalance from './NewBalance'
import UnderArmour from './UnderArmour'
import Reebok from './Reebok'
import Converse from './Converse'
export default {
  name: 'Home',
  components: {
    'top': Top,
    'hot': Hot,
    'nike': Nike,
    'airjordan': AirJordan,
    'adidas': Adidas,
    'puma': Puma,
    'vans': Vans,
    'newbalance': NewBalance,
    'underarmour': UnderArmour,
    'reebok': Reebok,
    'converse': Converse
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    switchTo (path) {
      this.$router.replace(path)
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>
.home {
  width: 1200px;
  height: 100%;
  position: relative;
  margin: auto;
}
.top {
  position: relative;
  top: -30px;
  left: 300px;
}
.container {
  top: -10px;
  left: 160px;
  position: relative;
  padding-left: 100px;
  padding-right: 400px;
}
.recommend {
  position: relative;
  top: 20px;
  left: 80px;
  padding-left: 100px;
  padding-right: 200px;
}
#demo {
  width: 700px;
  height: 450px;
  position: relative;
  top: -20px;
  left: 260px;
}
.carousel-inner img {
  margin-top: 45px;
  width: 100%;
  height: 400px;
}
#card {
  width: 300px;
  height: 400px;
}
</style>
