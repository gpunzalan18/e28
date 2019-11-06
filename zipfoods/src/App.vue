<template>
  <div id="app">
    <img id="logo" alt="Vue logo" src="./assets/images/zipfoods-logo.png" />
    <p>ZipFoods is your one-stop-shop for convenient online grocery shopping in the greater Boston area.</p>
    <show-featured category="frozen"></show-featured>
    <show-products></show-products>
  </div>
</template>

<script>
import ShowProducts from "./components/ShowProducts";
import ShowFeatured from "./components/ShowFeatured";

export default {
  name: "app",
  components: {
    ShowProducts,
    ShowFeatured
  }
};
</script>

<style lang='scss'>
@import "./assets/css/zipfoods.scss";
</style>
