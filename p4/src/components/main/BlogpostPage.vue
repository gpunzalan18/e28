<template>
  <div v-if="blogDetail" id="blogPost" class="page">
    <h3>{{blogDetail.title}}</h3>
    <div class="col-md-6">
      <img :src="image" class="post" />
    </div>
    <div class="col-md-6">
      <h5 style="color:gray">{{blogDetail.date}}</h5>
      <p>{{blogDetail.shortDesc}}</p>
      <p>{{blogDetail.post}}</p>
      <button
        id="favoritesBtn"
        type="button"
        class="btn btn-default"
        :class="{gold: favorited}"
        @click="detectFavorite"
      >{{buttonLabel}}</button>
    </div>
  </div>
</template>

<script>
import * as app from "../../config";

export default {
  name: "blogpost",
  props: ["slug"],
  data: function() {
    return {
      favorited: false,
      favoritesById: null
    };
  },
  computed: {
    blogDetail: function() {
      let blogDetail = this.$store.getters.blogDetail(this.slug);
      return blogDetail;
    },
    image: function() {
      let blogDetail = this.$store.getters.blogDetail(this.slug);
      let image = require("../../assets/images/image" + blogDetail.id + ".jpg");
      return image;
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
        localStorageHandler.removeFromFavorites(this.blogDetail.slug);
      } else {
        localStorageHandler.addToFavorites(this.blogDetail.slug);
        this.favorited = true;
      }
      this.$store.commit("setFavoriteBlogDetails");
    }
  },
  beforeMount: function() {
    let localStorageHandler = new app.LocalStorageHandler();

    this.favoritesById = localStorageHandler.retrieveFavorites();
    if (this.favoritesById.includes(this.slug)) {
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