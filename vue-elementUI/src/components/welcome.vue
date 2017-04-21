<template>
  <transition enterActiveClass="bounceInLeft" leaveActiveClass="bounceOutRight">
    <router-link to="home">
      <div id="show" class="animated"></div>
    </router-link>
  </transition>
</template>
<script>
  export default{
    data(){
      return{
        str:"Welcome To SoftTeam...",
        i:0
      }
    },
    methods:{
      show(){
        var text=this.str;
        var ID=this.i
        var done=setInterval(function () {
          if(ID<text.length){
            ID++;
            document.getElementById("show").innerHTML = text.substr(0, ID);
          }else{
            clearInterval("done");
          }
        },300);
      }
    },
    mounted(){
      this.show();

    }
  }
</script>
<style>
  #show{
    display:inline-block;
    width:100%;
    height: 800px;
    background:#324057;
    color:#1F2D3D;
    font-size:50px;
    padding-left: 500px;
    padding-top:400px;
    font-family:'微软雅黑';
    animation-delay:2s;
    -webkit-animation-delay:2s; /* Safari 和 Chrome */

  }
</style>
