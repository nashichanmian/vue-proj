<template>
  <div id="home">
    <appNav></appNav>
    <router-view></router-view>
    <appFooter></appFooter>
  </div>
</template>

<script>
  import appNav from '@/components/nav'
  import appFooter from '@/components/footer'
  import appArticle from '@/components/article'
  import about from '@/components/about'
  export default{
    components:{
      appNav,
      appFooter,
      appArticle,
      about,
    }
  }
</script>
