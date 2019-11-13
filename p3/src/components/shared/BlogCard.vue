<template>
  <div class="row">
    <img
      :src="image"
      :alt="imageAlt"
      class="col-md-6"
      style="width: 50%; padding-top: 10px; padding-bottom: 20px;"
    />
    <div class="col-md-6">
      <h5 style="color:gray">10/11/2019</h5>
      <h3>{{title}}</h3>
      <p>{{shortDesc}}</p>
      <button class="button">Read More</button>
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
      image: this.cardDetails.image,
      imageAlt: this.cardDetails.imageAlt,
      title: this.cardDetails.title,
      shortDesc: this.cardDetails.shortDesc,
      post: this.cardDetails.post
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