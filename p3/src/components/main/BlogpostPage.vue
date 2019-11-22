<template>
  <div v-if="blogPost" class="page">
    <h3>{{blogPost.title}}</h3>
    <div class="col-md-6">
      <img :src="image" class="post" />
    </div>

    <div class="col-md-6">
      <h5 style="color:gray">{{date}}</h5>
      <p>{{blogPost.shortDesc}}</p>
      <p>{{body}}</p>
      <button
        type="button"
        class="btn btn-default"
        :class="{gold: favorited}"
        @click="detectFavorite"
      >{{buttonLabel}}</button>
    </div>
  </div>
</template>

<script>
import blogPosts from "../../data/blogposts.json";
const axios = require("axios");
import * as session from "../../session";

export default {
  name: "blogpost",
  props: ["id"],
  data: function() {
    return {
      blogPost: null,
      image: require("../../assets/images/image" + this.id + ".jpg"),
      blogPosts: blogPosts.data,
      favorited: false,
      favoritesById: session.retrieveFavorites()
    };
  },
  computed: {
    body: function() {
      return this.blogPosts[this.id - 1].post;
    },
    date: function() {
      return this.blogPosts[this.id - 1].date;
    },
    buttonLabel: function() {
      if (this.favorited) {
        return "Remove from Favorites";
      } else {
        return "Add to Favorites";
      }
    }
  },
  methods: {
    setBlogPost: function(data) {
      this.blogPost = data;
    },
    detectFavorite: function() {
      if (this.favorited) {
        this.favorited = false;
        session.removeFromFavorites(this.blogPost.id);
      } else {
        session.addToFavorites(this.blogPost.id);
        this.favorited = true;
      }
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
        this.favoritesById = session.retrieveFavorites();

        if (this.favoritesById.includes(response.data.id)) {
          this.favorited = true;
        }
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