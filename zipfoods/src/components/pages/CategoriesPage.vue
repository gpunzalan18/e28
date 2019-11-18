<template>
  <div>
    <h2>Categories</h2>
    <ul class="cleanList">
      <li v-for="(category, id) in categories" :key="id">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "CategoriesPage",
  data: function() {
    return {
      products: null,
      categories: null
    };
  },
  methods: {
    loadCategories() {
      let categories = this.products.map(product => product.categories);
      let mergedCategories = [].concat.apply([], categories);

      // Return unique, sorted categories
      this.categories = [...new Set(mergedCategories)].sort();
    }
  },
  mounted: function() {
    axios
      .get(
        "https://my-json-server.typicode.com/gpunzalan18/e28-zipfoods/products"
      )
      .then(response => {
        this.products = response.data;
        this.loadCategories();
      });
  }
};
</script>