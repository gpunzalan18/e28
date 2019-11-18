<template>
  <div class="page">
    <div v-for="item in blogDetails" :key="item.id">
      <blog-card :cardDetails="item"></blog-card>
    </div>
  </div>
</template>

<script>
import BlogCard from "./../shared/BlogCard";
import * as session from "../../session";
import { content } from "./../../data/content";

const axios = require("axios");

export default {
  name: "HomePage",
  components: {
    BlogCard
  },
  data: function() {
    return {
      content: content,
      blogDetails: null
    };
  },
  mounted: function() {
    axios
      .get(
        "http://my-json-server.typicode.com/gpunzalan18/e28-p3-blogposts/blogDetails"
      )
      .then(response => {
        session.setBlogDetails(response.data);
        this.blogDetails = response.data;
      });
  }
};
</script>

<style scoped>
@import "../../assets/css/main.css";
</style>