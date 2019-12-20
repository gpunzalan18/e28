<template>
  <form class="form-horizontal">
    <div
      v-for="(input, index) in blogPostForm"
      class="form-group"
      :key="index"
      style="margin-bottom: 15px"
      :class="{ 'has-error': $v.post[input.id].$error}"
    >
      <label :for="input.id" class="col-xs-2 control-label">{{ input.label }}</label>
      <div class="col-xs-6">
        <input
          required
          v-if="input.type == 'input'"
          class="form-control"
          :id="input.id"
          v-model="$v.post[input.id].$model"
        />
        <textarea
          required
          v-else-if="input.type == 'textarea'"
          class="form-control"
          :rows="input.rows"
          :id="input.id"
          v-model="$v.post[input.id].$model"
        ></textarea>
        <div v-show="$v.post[input.id].$error" class="errorMsg">{{validationMsg}}</div>
      </div>
      <div>{{input.msg}}</div>
    </div>
    <div class="col-xs-8">
      <button
        type="button"
        id="saveBtn"
        class="btn btn-default pull-right"
        :class="{disabled: this.$v.$invalid, green: !this.$v.$invalid }"
        @click="handleSubmit"
      >Save</button>
    </div>
  </form>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  helpers
} from "vuelidate/lib/validators";

import * as app from "../../config";

let post = {
  id: null,
  date: "",
  title: "",
  slug: "",
  shortDesc: "",
  post: ""
};

const slugValidator = helpers.regex("alpha", /^[a-zA-Z0-9-]*$/);
const dateValidator = date => {
  let regexPattern = /^(((0)[0-9])|((1)[0-2]))(\/)([0-2][0-9]|(3)[0-1])(\/)\d{4}$/i;
  if (typeof date === "undefined" || date === null || date === "") {
    return true;
  }
  return regexPattern.test(date);
};

export default {
  name: "UserInput",
  props: ["blogPostForm"],
  data: function() {
    return {
      post: post,
      validationMsg: "Please enter a valid answer."
    };
  },
  validations: {
    post: {
      title: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(50)
      },
      date: {
        required,
        dateValidator,
        minLength: minLength(6)
      },
      slug: {
        required,
        minLength: minLength(4),
        slugValidator,
        uniqueSlug(value) {
          return !this.$store.getters.blogDetail(value);
        }
      },
      shortDesc: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(200)
      },
      post: {
        maxLength: maxLength(500)
      }
    }
  },
  methods: {
    handleSubmit: function() {
      if (!this.$v.$anyError && this.$v.$anyDirty) {
        this.post.slug.toString().toLowerCase();
        this.post.id = Math.floor(Math.random() * 5 + 11);
        app.axios
          .post(app.configURL.BLOG_DETAILS_API, this.post)
          .then(response => {
            this.$store.dispatch("setBlogData");
            let key = response.data.name;
            this.$store.commit("addPost", {
              [key]: this.post
            });
            this.$router.push({
              name: "blogpost",
              params: { slug: this.post.slug }
            });
          });
      }
    },
    resetPostForm() {
      this.post.date = "";
      this.post.title = "";
      this.post.slug = "";
      this.post.shortDesc = "";
      this.post.post = "";
    }
  },
  mounted: function() {
    this.resetPostForm();
  }
};
</script>

<style scoped>
.errorMsg {
  padding-top: 8px;
  color: #a94442;
}
</style>>
