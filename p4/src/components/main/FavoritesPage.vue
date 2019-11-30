<template>
  <div class="page">
    <div v-if="favoritesById.length<1">You do not have favorite posts.</div>
    <div v-for="item in favoriteBlogDetails" :key="item.id">
      <blog-card :cardDetails="item" @remove-favorite-card="updateFavorites()"></blog-card>
    </div>
  </div>
</template>

<script>
import BlogCard from "./../shared/BlogCard";
const axios = require("axios");
import * as session from "../../session";

export default {
  name: "FavoritesPage",
  components: {
    BlogCard
  },
  data: function() {
    return {
      favoriteBlogDetails: null,
      blogDetails: null,
      favoritesById: session.retrieveFavorites()
    };
  },
  methods: {
    setfavoriteBlogDetails: function(data) {
      this.favoriteBlogDetails = data;
    },
    updateFavorites: function() {
      this.favoritesById = session.retrieveFavorites();
      let arr = [];
      for (var i = 0; i < this.favoritesById.length; i++) {
        let index = this.favoritesById[i];
        var blogDetail = this.blogDetails[index - 1];
        arr.push(blogDetail);
      }
      this.favoriteBlogDetails = arr;
    }
  },
  mounted: function() {
    axios
      .get(
        "http://my-json-server.typicode.com/gpunzalan18/e28-p3-blogposts/blogDetails"
      )
      .then(response => {
        this.blogDetails = response.data;
        this.updateFavorites();
      });
  }
};
</script>

<style>
</style>