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
        <router-link
          type="button"
          id="saveBtn"
          class="btn btn-default"
          :to="{name: 'blogpost', params:{'id': 1}}"
          :class="{gold: formValid}"
        >Save</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import UserInput from "../shared/UserInput";

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
      formValid: false
    };
  }
};
</script>

<style>
</style>