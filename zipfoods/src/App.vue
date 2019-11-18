<template>
  <div id="app">
    <img id="logo" alt="Vue logo" src="./assets/images/zipfoods-logo.png" />
    <nav>
      <ul>
        <li v-for="link in links" :key="link">
          <router-link exact :to="{ name: link }">{{ link }}</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      links: ["home", "products", "categories"]
    };
  },
  mounted: function() {
    // Store a key/value pair
    localStorage.setItem("name", "Bob");

    // Retrieve (by key)
    console.log(localStorage.getItem("name"));

    // Remove (by key) key/value pair
    localStorage.removeItem("key");
  }
};
</script>

<style lang='scss'>
@import "./assets/css/zipfoods.scss";
</style>
