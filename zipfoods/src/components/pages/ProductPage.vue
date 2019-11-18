<template>
  <div id="product-page" v-if="product">
    <h1>{{ product.name }}</h1>
    <img
      v-if="product.id"
      class="product-thumb"
      :alt="product.name"
      :src="require('./../../assets/images/products/' + product.id + '.jpg')"
    />
    <p class="description">{{ product.description }}</p>
    <div class="price">${{ product.price }}</div>

    <button @click="addToCart(product.id)">Add to cart</button>
    <router-link to="/products">&larr; Return to all products</router-link>
  </div>
</template>

<script>
const axios = require("axios");
import Cart from "../../Cart";

export default {
  name: "ProductPage",
  props: ["id"],
  data: function() {
    return {
      product: null
    };
  },
  methods: {
    addToCart: function(productId) {
      let cart = new Cart();
      cart.add(productId);
    }
  },
  mounted() {
    this.product = axios
      .get(
        "https://my-json-server.typicode.com/susanBuck/e28-zipfoods-api/products/" +
          this.id
      )
      .then(response => (this.product = response.data));
  }
};
</script>