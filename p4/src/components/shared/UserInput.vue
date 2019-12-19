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
  maxLength
  //   alphaNum
} from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";

import * as app from "../../config";

let post = {
  id: 11,
  date: "",
  title: "",
  slug: "",
  shortDesc: "",
  post: ""
};

const slugValidator = helpers.regex("alpha", /^[a-zA-Z0-9-]*$/);
const dateValidator = helpers.regex("alpha", /^[0-9/]*$/);

export default {
  name: "UserInput",
  props: ["blogPostForm"],
  data: function() {
    return {
      post: post,
      formHasErrors: false,
      validationMsg: "Please enter a valid answer."
    };
  },
  watch: {
    "$v.$anyError": function() {
      this.formHasErrors = this.$v.$anyError && this.$v.$anyError;
      console.log(this.$v);
    }
  },
  validations: {
    post: {
      title: {
        required,
        minLength: minLength(1)
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
        minLength: minLength(150),
        maxLength: maxLength(200)
      },
      post: {
        maxLength: maxLength(500)
      }
    }
  },
  methods: {
    handleSubmit: function() {
      if (!this.formHasErrors && this.$v.$anyDirty) {
        this.post.toString().toLowerCase();
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
    }
  },
  mounted: function() {
    console.log(this.$v);
  }
};
</script>

<style scoped>
.errorMsg {
  padding-top: 8px;
  color: #a94442;
}
</style>>
