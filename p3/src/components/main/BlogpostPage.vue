<template>
  <div v-if="blogPost" class="page">
    <h3>{{blogPost.title}}</h3>
    <div class="col-md-6">
      <img :src="image" class="post" />
    </div>

    <div class="col-md-6">
      <h5 style="color:gray">10/11/2019</h5>
      <p>{{blogPost.shortDesc}}</p>
      <p>{{body}}</p>
    </div>
  </div>
</template>

<script>
import blogPosts from "../../data/blogposts.json";
const axios = require("axios");

export default {
  name: "blogpost",
  props: ["id"],
  data: function() {
    return {
      blogPost: null,
      image: require("../../assets/images/image" + this.id + ".jpg"),
      blogPosts: blogPosts.data
    };
  },
  computed: {
    body: function() {
      return this.blogPosts[this.id - 1].post;
    }
  },
  methods: {
    setBlogPost: function(data) {
      this.blogPost = data;
    }
  },
  mounted: function() {
    axios
      .get(
        "http://my-json-server.typicode.com/gpunzalan18/e28-p3-blogposts/blogDetails/" +
          this.id
      )
      .then(response => {
        this.setBlogPost(response.data);
      });
  }
};
</script>

<style>
.post {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 20px;
}
</style>