<template>
  <div class="page">
    <h4 class="padding-bottom-27">Fill out the form below to create a post.</h4>
    <user-input :blogPostForm="blogPostForm"></user-input>
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
        {
          id: "title",
          type: "input",
          label: "Title *",
          msg: "Must be between 1 and 50 characters"
        },
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
          msg: "Unique with dashes, letters, and numbers only. "
        },
        {
          id: "shortDesc",
          type: "textarea",
          rows: "6",
          label: "A Snippet *",
          msg: "Must be between 1 and 200 characters."
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