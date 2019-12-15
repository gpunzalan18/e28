<template>
  <div class="page">
    <h3>Fill out the form below to create a post.</h3>
    <br />
    <br />
    <form class="form-horizontal">
      <div v-for="(input, index) in blogPostForm" :key="input + index">
        <user-input :type="input.type" :label="input.label">
          <label></label>
        </user-input>
      </div>
    </form>
    <br />
    <div class="col-xs-9">
      <div class="btn-group btn-group-m pull-right" role="group" aria-label="...">
        <router-link type="button" class="btn btn-default" exact :to="{name: 'home'}">Cancel</router-link>
        <router-link
          type="button"
          class="btn btn-default"
          :to="{name: 'blogpost', params:{'id': 1}}"
          :class="{gold: formValid}"
        >Save</router-link>
        <router-link :event="formValid ? 'click' : ''" to="/path">Can't click me</router-link>
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
        { type: "input", label: "Title" },
        { type: "input", label: "Date" },
        { type: "input", label: "Image URL" },
        { type: "textarea", label: "Paragraph 1" },
        { type: "textarea", label: "Paragraph 2" }
      ],
      formValid: false
    };
  }
};
</script>

<style>
</style>