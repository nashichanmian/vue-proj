import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

//Vuex配置
export default new Vuex.Store({
  state:{
    domain:'http://test.example.com', //后台请求地址
    userInfo:{//保存用户信息
      nick:null,
      ulevel:null,
      uid:null,
      portrait:null
    }
  },
  mutations:{
    //更新用户信息
    updateUserInfo(state,newUserInfo){
      state.userInfo=newUserInfo;
    }
  }
})
