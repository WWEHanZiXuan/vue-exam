<template>
  <div class="box">
    <div class="content">
      <div class="content-top">
        <div class="administration">酒店管理</div>
        <div class="information">酒店信息</div>
      </div>
      <div class="advertising-Column">
        <div class="text">搜索条件</div>
        <img src="../assets/images/singout.png" class="help" />
      </div>
      <div class="search-Box">
        <div class="search">
          <el-input v-model="value" placeholder="输入酒店名称查找"></el-input>
        </div>
        <div class="button">
          <div class="block">
            <span class="demonstration">每页显示</span>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :page-size="5"
              :page-sizes="[5, 10, 50, 100]"
              layout="sizes"
            >
            </el-pagination>
          </div>
          <div class="danger">
            <el-button type="danger">搜索</el-button>
          </div>
        </div>
      </div>
      <div class="hotel">
        <div class="newly ">酒店信息</div>
        <div class="added">新增</div>
      </div>
      <div class="form">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column
            type="index"
            :index="indexMethod"
            fixed
            label="序号"
            width="100"
          >
          </el-table-column>
          <el-table-column prop="name" label="酒店名称" width="200">
          </el-table-column>
          <el-table-column prop="date" label="创建时间" width="300">
          </el-table-column>
          <el-table-column prop="number" label="客房数量" width="100">
          </el-table-column>
          <el-table-column prop="employees" label="员工数量" width="100">
          </el-table-column>
          <el-table-column prop="account" label="管理员账号" width="120">
          </el-table-column>
          <el-table-column prop="telephone" label="管理员电话" width="120">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      tableData: [
        {
          name: "汉庭酒店",
          date: "2016-05-03",
          number: 20,
          employees: 20,
          account: "张三",
          telephone: 18882285656,
        },
        {
          name: "汉庭酒店",
          date: "2016-05-03",
          number: 20,
          employees: 20,
          account: "张三",
          telephone: 18882285656,
        },
        {
          name: "汉庭酒店",
          date: "2016-05-03",
          number: 20,
          employees: 20,
          account: "张三",
          telephone: 18882285656,
        },
        {
          name: "汉庭酒店",
          date: "2016-05-03",
          number: 20,
          employees: 20,
          account: "张三",
          telephone: 18882285656,
        },
      ],
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(row) {
      console.log(row);
    },
    indexMethod(index) {
      return index + 1;
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  height: 700px;
  margin-top: 10px;
  border: 1px solid red;
}

.content-top {
  width: 1190px;
  height: 90px;
}

.administration {
  color: #a2a4a2;
  font-size: 14px;
  margin-left: 10px;
  margin-top: 10px;
}

.information {
  color: #000;
  font-size: 13px;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
}

.advertising-Column {
  width: 1190px;
  height: 62px;
  background: #e0e0e0;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
  margin-left: 10px;
}

.help {
  width: 20px;
  height: 20px;
  margin-right: 60px;
}

.search-Box {
  width: 1190px;
  height: 88px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search {
  width: 204px;
  height: 40px;
  margin-left: 10px;
}

.button {
  display: flex;
  align-items: center;
  margin-right: 40px;
}

.block {
  display: flex;
  align-items: center;
}

.demonstration {
  font-size: 13px;
}

.hotel {
  width: 1190px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.newly {
  font-size: 13px;
  margin-left: 10px;
}

.added {
  font-size: 10px;
  margin-right: 60px;
  margin-top: 20px;
}

.form {
  width: 1190px;
  height: 350px;
  margin-top: 10px;
}
</style>
