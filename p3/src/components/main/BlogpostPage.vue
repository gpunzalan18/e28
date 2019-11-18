<template>
  <div v-if="blogPost" class="page">
    <h3>{{title}}</h3>

    <div class="col-md-6">
      <h5 style="color:gray">10/11/2019</h5>
      <p>{{shortDesc}}</p>
      <p>{{body}}</p>
    </div>
    <div class="col-md-6">
      <img :src="image" style="width: 100%; padding-top: 10px; padding-bottom: 20px;" />
    </div>

  </div>
</template>

<script>
import { content } from "./../../data/content";
import { blogPosts } from "./../../data/blogposts";
import * as session from "../../session";

export default {
  name: "blogpost",
  props: ["id"],
  data: function() {
    return {
      content: content,
      blogPost: session.getBlogDetailsById(this.id),
      image: require("../../assets/images/image" + this.id + ".jpg"),
      title: null,
      body: blogPosts[this.id].post
    };
  },
  mounted: function() {
    this.blogPost = session.getBlogDetailsById(this.id);
    this.title = session.getBlogDetailsById(this.id).title;
    this.shortDesc = session.getBlogDetailsById(this.id).shortDesc;
  }
};
</script>

<style>
</style>