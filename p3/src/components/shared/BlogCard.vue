<template>
  <div
    class="col-md-4 col-sm-6 col-xs-6"
    style="min-height: 575px; max-height: 530px; height: 100%"
  >
    <img :src="image" :alt="title" style="width: 100%; padding-top: 10px; " />
    <h3>{{title}}</h3>
    <p>{{shortDesc}}</p>
    <div class="btn-group btn-group-sm" role="group" aria-label="...">
      <router-link
        type="button"
        class="btn btn-default"
        :to="{name: 'blogpost', params:{'id': cardDetails.id}}"
      >Read More</router-link>
      <button type="button" class="btn btn-default">Add to Favorites</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    cardDetails: {
      type: Object,
      default: null
    }
  },
  data: function() {
    return {
      image: require("../../assets/images/image" +
        this.cardDetails.id +
        ".jpg"),
      title: this.cardDetails.title,
      shortDesc: this.cardDetails.shortDesc
    };
  }
};
</script>

<style scoped>
</style>