<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "app"
  }
</script>

<style>
  @import "./style/reset.css";
  #app {
    width: 100vw;
    height: 100vh;
  }
</style>