import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import article from '@/components/article'
import welcome from '@/components/welcome'
import HomeContent from '@/components/HomeContent'
import login from '@/components/login'
import UserInfo from '@/components/UserInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: welcome,
    },
    {
      path:'/home',
      component:home,
      children:[
        {path:'/',component:HomeContent},
        {path:'/article',component:article}
      ]
    },
    {
      path:'login',
      component:login
    },
    {
      path:'user_info',
      component:UserInfo
    }

  ]

})
