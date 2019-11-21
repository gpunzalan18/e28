<template>
  <div class="page">
    <div v-for="item in favoriteBlogDetails" :key="item.id">
      <blog-card
        :cardDetails="item"
        pageSource="favorites"
        @remove-favorite-card="updateFavorites()"
      ></blog-card>
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
      blogDetails: null
    };
  },
  methods: {
    setfavoriteBlogDetails: function(data) {
      console.log(data);
      this.favoriteBlogDetails = data;
    },
    updateFavorites: function() {
      console.log("updateFavorites");
      let favoritesById = session.retrieveFavorites();
      console.log("favoritesById ", favoritesById);
      let arr = [];
      for (var i = 0; i < favoritesById.length; i++) {
        let index = favoritesById[i];
        var blogDetail = this.blogDetails[index - 1];
        arr.push(blogDetail);
        console.log(favoritesById.length);
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