<template>

</template>
<script>
  //注销登录
  export default{
    logout(){
      //删除cookie并跳转到登录页
      this.isLogouting = true;
      //请求后端，比如logout.php
      //this.$http.post('.../logout.php')..
      //成功后删除cookie
      this.delCookie('session');

      //重置loding状态
      this.isLogouting = false;

      //跳转到登录页
      this.$router.push('/login/');
    }
  }
</script>
