<template>
  <div id="products">
    <h2>Products</h2>
    <show-product v-for="product in products" :product="product" :key="product.id"></show-product>
  </div>
</template>


<script>
import ShowProduct from "./../ShowProduct";

const axios = require("axios");

export default {
  name: "ProductsPage",
  components: {
    ShowProduct
  },
  data: function() {
    return {
      products: null
    };
  },
  mounted: function() {
    axios
      .get(
        "https://my-json-server.typicode.com/gpunzalan18/e28-zipfoods/products"
      )
      .then(response => {
        this.products = response.data;
      });
  }
};
</script>


<style scoped>
</style>