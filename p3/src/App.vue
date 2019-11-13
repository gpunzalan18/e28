<template>
  <div id="app" class="container" style="width: 75%">
    <home-page></home-page>
  </div>
</template>

<script>
import HomePage from "./components/main/HomePage";
export default {
  name: "app",
  components: {
    HomePage
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
