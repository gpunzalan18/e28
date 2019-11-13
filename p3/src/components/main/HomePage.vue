<template>
  <div>
    <h1 class="col-md-12 text-center">{{content.main.homePage.title}}</h1>
    <div v-for="item in blogPosts" :key="item.id">
      <blog-card :cardDetails="item"></blog-card>
    </div>
  </div>
</template>

<script>
import BlogCard from "./../shared/BlogCard";
import { content } from "./../../data/content";
import { blogPosts } from "./../../data/blogposts";

export default {
  name: "HomePage",
  components: {
    BlogCard
  },
  data: function() {
    return {
      content: content,
      blogPosts: blogPosts
    };
  },
  created: function() {
    console.log(this.blogPosts);
  }
};
</script>

<style scoped>
</style>