<template>
  <div v-if="blogDetail" id="blogPost" class="page">
    <h3>{{blogDetail.title}}</h3>
    <div class="col-md-6">
      <img :src="image" class="post" />
    </div>

    <div class="col-md-6">
      <h5 style="color:gray">{{date}}</h5>
      <p>{{blogDetail.shortDesc}}</p>
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
import * as app from "../../config";

export default {
  name: "blogpost",
  props: ["id"],
  data: function() {
    return {
      image: require("../../assets/images/image" + this.id + ".jpg"),
      blogPosts: blogPosts.data,
      favorited: false,
      favoritesById: null
    };
  },
  computed: {
    blogDetail: function() {
      return this.$store.state.blogModule.blogDetail;
    },
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
    detectFavorite: function() {
      let localStorageHandler = new app.LocalStorageHandler();

      if (this.favorited) {
        this.favorited = false;
        localStorageHandler.removeFromFavorites(this.blogDetail.id);
      } else {
        localStorageHandler.addToFavorites(this.blogDetail.id);
        this.favorited = true;
      }
      this.$store.commit("setFavoriteBlogDetails");
    }
  },
  beforeMount: function() {
    let localStorageHandler = new app.LocalStorageHandler();
    this.$store.dispatch("setBlogDetail", this.id);
    this.favoritesById = localStorageHandler.retrieveFavorites();
    if (this.favoritesById.includes(this.id)) {
      this.favorited = true;
    }
  }
};
</script>

<style scoped>
.post {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 20px;
}
</style>