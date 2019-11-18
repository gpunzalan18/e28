<template>
  <div class="page">
    FAVORITES PAGE
    {{blogDetails}}
  </div>
</template>

<script>
import * as session from "../../session";

export default {
  name: "FavoritesPage",
  data: function() {
    return {
      blogDetails: session.retrieveFavorites()
    };
  }
};
</script>

<style>
</style>