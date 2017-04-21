export default {
  //当路由发生变化时检查登录状态
  watch:{
    "$route" : "checkLogin"
  },
  //当用户打开页面时检查是否已经登录
  created(){
    this.checkLogin();
  },
  methods:{
    checkLogin(){
      //检查是否存在session
      if(!this.getCookie('session')){
        //如果没有登录状态则跳转到登录页面
        this.$router.push('/login');
      }else{
        //否则跳转到登录后的页面
        this.$router.push('/user_info');
      }
    },
    toLogin(){
      //后端加密规则
      //哈希算法
      let password_sha = hex_sha1(hex_sha1(this.password));

      //需要向后端发送的登录参数
      let loginParam = {
        account: this.account,
        password_sha
      }
        //设置在登录状态
      this.isLoging = true;

      //请求后端
      this.$http.post('./php/login.php',{
        param:loginParam
      }).then((response) => {
        if(response.data.code == 1){
          //如果登录成功保存登录状态并设置有效期
          let expireDays = 1000 * 60 * 60 * 24 *15;
          this.setCookie('session',response.data.session,expireDays);
          //跳转
          this.$router.push('/user_info');
        }
      },(response) => {
        //Error
      });
    }
  }
}
