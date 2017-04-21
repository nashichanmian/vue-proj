<template>
  <el-button
    type="primary"
    @click="openFullScreen"
    v-loading.fullscreen.lock="fullscreenLoading">
  </el-button>
</template>

<script>
  export default {
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 3000);
      }
    }
  }
</script>
