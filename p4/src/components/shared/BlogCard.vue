<template>
  <div class="blogCard col-md-4 col-sm-6 col-xs-6">
    <img :src="image" :alt="title" class="cardImg" />
    <h3>{{title}}</h3>
    <p>{{shortDesc}}</p>
    <div :id="cardDetails.slug" class="btn-group btn-group-sm" role="group" aria-label="...">
      <router-link
        id="readMoreBtn"
        type="button"
        class="btn btn-default"
        :to="{name: 'blogpost', params:{'slug': cardDetails.slug}}"
      >Read More</router-link>
      <button
        id="rightBtn"
        type="button"
        class="btn btn-default"
        :class="{gold: favorited}"
        @click="detectFavorites"
      >{{rightBtn}}</button>
    </div>
  </div>
</template>

<script>
import * as app from "../../config";

export default {
  name: "BlogCard",
  props: ["cardDetails"],
  data: function() {
    return {
      image: require("../../assets/images/image" +
        this.cardDetails.id +
        ".jpg"),
      title: this.cardDetails.title,
      shortDesc: this.cardDetails.shortDesc,
      favoritesById: null,
      favorited: null
    };
  },
  computed: {
    rightBtn: function() {
      if (this.favorited) {
        return "Remove from Favorites";
      } else {
        return "Add to Favorites";
      }
    }
  },
  methods: {
    detectFavorites() {
      let localStorageHandler = new app.LocalStorageHandler();
      if (this.favorited) {
        this.removeFromFave(this.cardDetails.slug);
        this.favorited = false;
      } else {
        localStorageHandler.addToFavorites(this.cardDetails.slug);
        this.favorited = true;
      }
      this.$store.commit("setFavoriteBlogDetails");
    },
    removeFromFave: function(id) {
      let localStorageHandler = new app.LocalStorageHandler();
      localStorageHandler.removeFromFavorites(id);
    }
  },
  mounted() {
    let localStorageHandler = new app.LocalStorageHandler();
    this.favoritesById = localStorageHandler.retrieveFavorites();
    if (this.favoritesById.includes(this.cardDetails.slug)) {
      this.favorited = true;
    }
  }
};
</script>

<style scoped>
.gold {
  background-color: gold;
}

.blogCard {
  min-height: 575px;
  height: 100%;
}

.cardImg {
  width: 100%;
  padding-top: 10px;
}
</style>