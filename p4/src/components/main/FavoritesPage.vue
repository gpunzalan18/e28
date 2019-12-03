<template>
  <div class="page">
    <div v-if="!favoriteBlogDetails || favoriteBlogDetails.length<1">You do not have favorite posts.</div>
    <div v-for="item in favoriteBlogDetails" :key="item.id">
      <blog-card :cardDetails="item"></blog-card>
    </div>
  </div>
</template>

<script>
import BlogCard from "./../shared/BlogCard";

export default {
  name: "FavoritesPage",
  components: {
    BlogCard
  },
  computed: {
    favoriteBlogDetails: function() {
      return this.$store.state.blogModule.favoriteBlogDetails;
    }
  }
};
</script>

<style>
</style>