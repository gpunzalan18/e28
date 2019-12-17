<template>
  <div id="app" class="container" style="width: 82% align-items: flex-start">
    <h1 class="col-md-12 text-center">Grace's Blog</h1>
    <p
      class="col-md-12 text-center"
    >I started this blog to keep track of all places I've been to. Maybe five years from now, I could reminisce a little.</p>
    <nav>
      <ul class="nav nav-tabs">
        <li v-for="link in links" :key="link">
          <router-link exact :id="link" :to="{ name: link }">{{ link | capitalize }}</router-link>
        </li>
        <!-- <li class="pull-right">
          <router-link exact :to="{ name: 'create' }">Create</router-link>
        </li>-->
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
      links: ["home", "favorites", "create"]
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  beforeMount: function() {
    this.$store.dispatch("setBlogData");
  }
};
</script>

<style>
@import "./assets/css/main.css";
</style>
