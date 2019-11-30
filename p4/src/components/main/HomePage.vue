<template>
  <div class="page" v-if="blogDetails">
    <div v-for="item in blogDetails" :key="item.id">
      <blog-card :cardDetails="item"></blog-card>
    </div>
  </div>
</template>

<script>
import BlogCard from "./../shared/BlogCard";
const axios = require("axios");

export default {
  name: "HomePage",
  components: {
    BlogCard
  },
  data: function() {
    return {
      blogDetails: null
    };
  },
  mounted: function() {
    axios
      .get(
        "http://my-json-server.typicode.com/gpunzalan18/e28-p3-blogposts/blogDetails"
      )
      .then(response => {
        this.blogDetails = response.data;
      });
  }
};
</script>

<style scoped>
@import "../../assets/css/main.css";
</style>