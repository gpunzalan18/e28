<template>
  <div class="col-md-4 col-sm-6 col-xs-6" style="min-height: 575px; height: 100%">
    <img :src="image" :alt="title" style="width: 100%; padding-top: 10px; " />
    <h3>{{title}}</h3>
    <p>{{shortDesc}}</p>
    <div class="btn-group btn-group-sm" role="group" aria-label="...">
      <router-link
        type="button"
        class="btn btn-default"
        :to="{name: 'blogpost', params:{ 'id': cardDetails.id, 'cardDetails': cardDetails}}"
      >Read More</router-link>
      <button
        type="button"
        class="btn btn-default"
        :class="{gold: favorited}"
        @click="addToFavorites"
      >{{rightBtn}}</button>
    </div>
  </div>
</template>

<script>
import * as session from "../../session";

export default {
  name: "BlogCard",
  props: ["cardDetails", "pageSource"],
  methods: {
    addToFavorites() {
      if (this.favorited) {
        this.removeFromFave(this.cardDetails.id);
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
      if (this.pageSource == "home") {
        return "Add to Favorites";
      } else if (this.pageSource == "favorites") {
        return "Remove from Favorites";
      } else {
        return null;
      }
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
</style>