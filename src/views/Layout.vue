<template>
<div class="layout">
  <div class="header">
    <div class="left">
      <div class="left-img"></div>
      <div class="left-word">考了么学车分润系统</div>
    </div>
    <div class="right">
      <img src="../assets/images/singout.png" class="img" />
      <div class="singOut" @click="clickOut">退出</div>
    </div>
  </div>
  <div class="middle">
    <div class="left-Sidebar">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu :router="true" :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span slot="title">超级管理员</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/account">账号管理</el-menu-item>
            <el-menu-item index="/campus">校区管理</el-menu-item>
            <el-menu-item index="/students">学员管理</el-menu-item>
            <el-menu-item index="/index">驾校首页</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-user"></i>
            <span slot="title">校区管理员</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/school">校区管理</el-menu-item>
            <el-menu-item index="/student">学员管理</el-menu-item>
            <el-menu-item index="/extend">推广管理</el-menu-item>
            <el-menu-item index="/data">资料审核</el-menu-item>
            <el-menu-item index="/drawings">提现管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div>
      <router-view></router-view>
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
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 退出登录
    clickOut() {
      localStorage.removeItem("userName");
      this.$router.push("Login");
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.header {
  width: 1473.61px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f8f8;
}

.left {
  width: 480px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.left-img {
  width: 156px;
  height: 56px;
  background: chocolate;
}

.left-word {
  font-size: 20px;
  color: #f55d54;
}

.right {
  width: 100px;
  display: flex;
  align-items: center;
  margin-top: -14px;
}

.img {
  width: 16px;
  height: 16px;
}

.singOut {
  font-size: 14px;
  color: #f55d54;
  margin-left: 8px;
}

.left-Sidebar {
  width: 200px;
  height: 700px;
  border: 1px solid #f8f8f8;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 500px;
  border: 1px solid #fff;
}

.middle {
  display: flex;
  justify-content: space-between;
  background: #f8f8f8;
}

.content {
  width: 1200px;
  height: 700px;
  margin-top: 10px;
}

// .content-top {
//   width: 1190px;
//   height: 90px;
// }

// .administration {
//   color: #a2a4a2;
//   font-size: 14px;
//   margin-left: 10px;
//   margin-top: 10px;
// }

// .information {
//   color: #000;
//   font-size: 13px;
//   font-weight: 600;
//   margin-left: 20px;
//   margin-top: 20px;
// }

// .advertising-Column {
//   width: 1190px;
//   height: 62px;
//   background: #e0e0e0;
//   margin-top: 10px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .text {
//   font-size: 14px;
//   margin-left: 10px;
// }

// .help {
//   width: 20px;
//   height: 20px;
//   margin-right: 60px;
// }

// .search-Box {
//   width: 1190px;
//   height: 88px;
//   background: #ffffff;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .search {
//   width: 204px;
//   height: 40px;
//   margin-left: 10px;
// }

// .button {
//   display: flex;
//   align-items: center;
//   margin-right: 40px;
// }

// .block {
//   display: flex;
//   align-items: center;
// }

// .demonstration {
//   font-size: 13px;
// }

// .hotel {
//   width: 1190px;
//   height: 50px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .newly {
//   font-size: 13px;
//   margin-left: 10px;
// }

// .added {
//   font-size: 10px;
//   margin-right: 60px;
//   margin-top: 20px;
// }

// .form {
//   width: 1190px;
//   height: 350px;
//   margin-top: 10px;
// }
</style>
