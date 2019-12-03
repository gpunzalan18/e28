<template>
  <div class="page" v-if="blogDetails">
    <div v-for="item in blogDetails" :key="item.id">
      <blog-card :cardDetails="item"></blog-card>
    </div>
  </div>
</template>

<script>
import BlogCard from "./../shared/BlogCard";

export default {
  name: "HomePage",
  components: {
    BlogCard
  },
  computed: {
    blogDetails: function() {
      return this.$store.state.blogModule.blogDetails;
    }
  }
};
</script>

<style >
</style>