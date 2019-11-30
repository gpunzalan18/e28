<template>
  <div id="app">
    <img id="logo" alt="Vue logo" src="./assets/images/zipfoods-logo.png" />
    <nav>
      <ul>
        <li v-for="link in links" :key="link">
          <router-link exact :to="{ name: link }">{{ link }}</router-link>
          <span v-if="link == 'cart'">({{ cartCount}})</span>
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
      links: ["home", "products", "categories", "cart"]
    };
  },
  computed: {
    cartCount: function() {
      return this.$store.state.cartCount;
    }
  },
  mounted: function() {
    this.$store.commit("setCartCount", localStorage.getItem("name"));
    this.$store.dispatch("setProducts");
    // Store a key/value pair
    localStorage.setItem("name", "Bob");

    // Retrieve (by key)
    console.log();

    // Remove (by key) key/value pair
    localStorage.removeItem("key");
  }
};
</script>

<style lang='scss'>
@import "./assets/css/zipfoods.scss";
</style>
