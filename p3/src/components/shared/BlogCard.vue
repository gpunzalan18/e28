<template>
  <div class="blogCard col-md-4 col-sm-6 col-xs-6">
    <img :src="image" :alt="title" class="cardImg" />
    <h3>{{title}}</h3>
    <p>{{shortDesc}}</p>
    <div class="btn-group btn-group-sm" role="group" aria-label="...">
      <router-link
        type="button"
        class="btn btn-default"
        :to="{name: 'blogpost', params:{'id': cardDetails.id}}"
      >Read More</router-link>
      <button
        type="button"
        class="btn btn-default"
        :class="{gold: favorited}"
        @click="detectFavorites"
      >{{rightBtn}}</button>
    </div>
  </div>
</template>

<script>
import * as session from "../../session";

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
      favoritesById: session.retrieveFavorites(),
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
      if (this.favorited) {
        this.removeFromFave(this.cardDetails.id);
        this.favorited = false;
      } else {
        session.addToFavorites(this.cardDetails.id);
        this.favorited = true;
      }
    },
    removeFromFave: function(id) {
      session.removeFromFavorites(id);
      this.$emit("remove-favorite-card");
    }
  },
  mounted: function() {
    if (this.favoritesById.includes(this.cardDetails.id)) {
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