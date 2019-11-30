<template>
  <div id="products">
    <h2>Products</h2>
    <show-product v-for="product in products" :product="product" :key="product.id"></show-product>
  </div>
</template>


<script>
import ShowProduct from "./../ShowProduct";

export default {
  name: "ProductsPage",
  components: {
    ShowProduct
  },
  data: function() {
    return {
      //   products: null
    };
  },
  computed: {
    products: function() {
      return this.$store.state.products;
    }
  },
  mounted: function() {}
};
</script>


<style scoped>
</style>