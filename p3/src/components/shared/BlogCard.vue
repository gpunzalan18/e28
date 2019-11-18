<template>
  <div class="col-md-4">
    <img :src="image" :alt="title" style="width: 100%; padding-top: 10px; padding-bottom: 20px;" />
    <h5 style="color:gray">10/11/2019</h5>
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
.button {
  margin-top: 35px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  background-color: gray;
}
</style>