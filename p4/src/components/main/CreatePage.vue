<template>
  <div class="page">
    <h3>Fill out the form below to create a post.</h3>
    <br />
    <br />
    <user-input :blogPostForm="blogPostForm"></user-input>
    <br />
    <br />
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
        { id: "title", type: "input", label: "Title *", msg: "" },
        {
          id: "date",
          type: "input",
          label: "Date * ",
          msg: "Provide your answer in mm/dd/yyyy format."
        },
        {
          id: "slug",
          type: "input",
          label: "Slug * ",
          msg: "Please use dashes, letters, and numbers only. "
        },
        {
          id: "shortDesc",
          type: "textarea",
          rows: "6",
          label: "A Snippet *",
          msg: "Must be between 150 to 200 characters."
        },
        {
          id: "post",
          type: "textarea",
          rows: "8",
          label: "Remaining Content",
          msg: "This field is not required but maximum limit is 500 characters."
        }
      ]
    };
  }
};
</script>

<style>
</style>