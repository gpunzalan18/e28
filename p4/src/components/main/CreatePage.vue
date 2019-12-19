<template>
  <div class="page">
    <h3>Fill out the form below to create a post.</h3>
    <br />
    <br />

    <user-input :blogPostForm="blogPostForm"></user-input>
    <br />
    <div class="col-xs-10">
      <div class="btn-group btn-group-m pull-right" role="group" aria-label="...">
        <router-link
          type="button"
          id="cancelBtn"
          class="btn btn-default"
          exact
          :to="{name: 'home'}"
        >Cancel</router-link>
        <div
          type="button"
          id="saveBtn"
          class="btn btn-default"
          :to="{name: 'blogpost', params:{'id': 1}}"
          :class="{gold: formValid}"
          @click="handleSubmit"
        >Save</div>
      </div>
    </div>
  </div>
</template>

<script>
import UserInput from "../shared/UserInput";
import * as app from "../../config";

let blogpost = {
  date: "3/6/2018",
  id: 9,
  post: "This is just a test"
};
export default {
  name: "CreatePage",
  components: {
    UserInput
  },
  data: function() {
    return {
      blogPostForm: [
        { id: "title", type: "input", label: "Title" },
        { id: "date", type: "input", label: "Date" },
        { id: "imageUrl", type: "input", label: "Image URL" },
        { id: "shortDesc", type: "textarea", rows: "3", label: "Paragraph 1" },
        { id: "fullPost", type: "textarea", rows: "6", label: "Paragraph 2" }
      ],
      formValid: false,
      blogPost: blogpost
    };
  },
  methods: {
    handleSubmit: function() {
      //   if (!this.formHasErrors) {
      // Axios request to the server to persist the new product
      app.axios
        .post("https://e28-blog.firebaseio.com/blogposts.json", this.blogPost)
        .then(response => {
          console.log(response);
          let key = response.data.name;
          console.log(key);
          // this.$store.commit("addProduct", {
          //   [key]: this.product
          // });
          this.$router.push({
            name: "blogpost",
            params: { id: 9 }
          });
        });
      //   }
    }
  }
};
</script>

<style>
</style>