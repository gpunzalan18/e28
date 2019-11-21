<template>
  <div id="app" class="container" style="width: 82% align-items: flex-start">
    <h1 class="col-md-12 text-center">Grace's Blog</h1>
    <p
      class="col-md-12 text-center"
    >I started this blog to keep track of all places I've been to. Maybe five years from now, I could reminisce a little.</p>
    <nav>
      <ul class="nav nav-tabs">
        <li v-for="link in links" :key="link">
          <router-link exact :to="{ name: link }">{{ link | capitalize }}</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  props: {
    id: {
      type: String,
      default: null
    }
  },
  data: function() {
    return {
      links: ["home", "favorites"]
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style>
#app {
  margin-top: 25px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.gold {
  background-color: gold;
}


@import "./assets/css/main.css";
</style>
