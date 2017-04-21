<template>
  <div class="container" id="app">
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  //登录成功后获取用户的信息
  mounted(){
    //组件开始挂在时获取用户信息
    this.getUserInfo();
  },
  methods:{
    //请求用户的一些信息
    getUserInfo(){
      ts.userInfo = {
        nick: 'Doterlin',
        ulevel: 20,
        uid: '10000',
        portrait: 'assets/logo.png'
      }
      //获取信息请求
      this.$http.get(url, {
        //参数
        "params": this.userInfo
      }).then((response) => {
        //Success
        if (response.data.code == 0) {
          this.$store.commit('updataUserInfo', this.userInfo);
        }
      }, (response) => {
        //Error
      });
    }
  }
}
</script>

<style>

</style>
