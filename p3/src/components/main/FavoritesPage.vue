<template>
  <div class="page">
    <div v-if="favoriteBlogDetails.length<1">You have no favorite blog posts.</div>
    <div v-for="item in favoriteBlogDetails" :key="item.id">
      <blog-card :cardDetails="item"></blog-card>
    </div>
  </div>
</template>

<script>
import * as session from "../../session";
import BlogCard from "./../shared/BlogCard";

export default {
  name: "FavoritesPage",
  components: {
    BlogCard
  },
  data: function() {
    return {
      favoritesById: session.retrieveFavorites(),
      blogDetails: session.getBlogDetails()
    };
  },
  computed: {
    favoriteBlogDetails: function() {
      let arr = [];
      for (var i = 0; i < this.blogDetails.length; i++) {
        var blogDetail = this.blogDetails[i];
        if (this.favoritesById.includes(blogDetail.id)) {
          arr.push(blogDetail);
        }
      }
      return arr;
    }
  }
};
</script>

<style>
</style>