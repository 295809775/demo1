<template>
  <div class="cart">
    <el-table :data="tableData"
              border
              style="width: 100%"
              @selection-change="selected">
      <el-table-column type="selection"
                       width="50"></el-table-column>
      <el-table-column label="商品名称"
                       width="500">
        <template slot-scope="scope">
          <div style="margin-left: 50px">
            <img :src="scope.row.goods.img"
                 style="height: 50px;width: 50px">
            <span style="font-size: 18px;padding-left: 100px;">{{scope.row.goods.descript}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="单价"
                       width="150"
                       prop="price"></el-table-column>
      <el-table-column label="数量"
                       width="200"
                       prop="number">
        <template slot-scope="scope">
          <div>
            <el-input v-model="scope.row.number">
              <el-button slot="prepend"
                         @click="del(scope.row)"><i class="el-icon-minus"></i></el-button>
              <el-button slot="append"
                         @click="add(scope.row)"><i class="el-icon-plus"></i></el-button>
            </el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="小计"
                       width="150"
                       prop="goodTotal">
        <template slot-scope="scope">
          <span>{{scope.row.number*scope.row.price}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger"
                     @click="handleDelete(scope.$index, scope.row)">删除<i class="el-icon-delete2 el-icon--right"></i></el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <el-button class="lgbt"
               type="primary"
               @click="checkuser"
               style="float: right">购买</el-button>
  </div>
</template>

<script>
export default {
  name: 'Carts',
  data () {
    return {
      tableData: [{
        goods: {
          img: 'static/img/nike1.jpg',
          descript: 'Nike SB Dunk Low Pro QS'
        },
        price: 5259,
        number: 1,
        goodTotal: 5259
      }, {
        goods: {
          img: 'static/img/aj1.jpg',
          descript: 'Air Jordan Adapt CH'
        },
        price: 2899,
        number: 1,
        goodTotal: 2899
      }, {
        goods: {
          img: 'static/img/nike2.jpg',
          descript: 'Nike AF1/1'
        },
        price: 999,
        number: 1,
        goodTotal: 999
      }]
    }
  },
  methods: {
    handleDelete (index, row) {
      this.$confirm('确定删除该商品？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    add: function (addGood) {
      if (typeof addGood.number === 'string') {
        addGood.number = parseInt(addGood.number)
      };
      addGood.number += 1
    },
    del: function (delGood) {
      if (typeof delGood.number === 'string') {
        delGood.number = parseInt(delGood.number)
      };
      if (delGood.number > 1) {
        delGood.number -= 1
      }
    }
  }
}
</script>

<style>
.cart {
  margin-top: 100px;
  margin-left: 160px;
  margin-right: 0px;
  position: relative;
  width: 1200px;
}
</style>
