<template>
  <el-row class="nav ">
    <el-col :span="24" class="navbar-inner">
      <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <div class="logo">
              SoftTeam
            </div>
              <el-menu-item index="1"><router-link to="home"  class="clear_">Home</router-link></el-menu-item>
              <el-menu-item index="2"><router-link to="article" class="clear_">Article</router-link></el-menu-item>
              <el-submenu index="3">
                <template slot="title"><span class="clear_">About..</span></template>
                <el-menu-item index="2-1">敏镐</el-menu-item>
                <el-menu-item index="2-2">坂田银时</el-menu-item>
                <el-menu-item index="2-3">Nashi</el-menu-item>
              </el-submenu>
              <div class="line"></div>
              <router-link to="login">login</router-link>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>

export default{
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {

    }
  }
  }
</script>

<style scoped>
  .clear_{
    text-decoration:none;
    font-size:18px;
  }
  .logo{
    float: left;
    color: #ffffff;
    margin-left: 3vw;
    line-height: 6vh;
    margin-right: 45vw;
    font-size:18px;
  }
</style>
