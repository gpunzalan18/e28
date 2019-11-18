<template>
  <div id="app" class="container" style="width: 82%">
    <h1 class="col-md-12 text-center">Grace's Blog</h1>
    <p
      class="col-md-12 text-center"
    >I started this blog to keep track of all places I've been to. Maybe five years from now, I could reminisce a little.</p>
    <nav>
      <ul class="nav nav-tabs">
        <li v-for="link in dynamicNav" :key="link">
          <router-link
            v-if="link=='blogpost'"
            exact
            :to="{ name: link, params: {'id': id} }"
          >{{ link | capitalize }}</router-link>
          <router-link v-else exact :to="{ name: link }">{{ link | capitalize }}</router-link>
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
      default: "1"
    }
  },
  data: function() {
    return {
      links: ["home", "favorites", "blogpost"],
      displayBlogpost: true
    };
  },
  computed: {
    dynamicNav: function() {
      let links = ["home", "favorites"];
      if (this.displayBlogpost) {
        links.push("blogpost");
      }
      return links;
    }
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
/* #app {
  margin-top: 60px;
} */
@import "./assets/css/main.css";
</style>
