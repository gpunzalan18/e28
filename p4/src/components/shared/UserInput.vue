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
      <div class="col-xs-8">
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
      </div>
      <div v-if="$v.post[input.id].$anyError">There is an error with this field</div>
    </div>
  </form>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";

let post = {};
if (process.env.NODE_ENV != "development") {
  //   post = {
  //     title: "Dollar Hits: Filipino Street Food in LA",
  //     date: "12/14/2019",
  //     imageUrl: "dollar-hits.jpg",
  //     shortDesc:
  //       "So this weekend, my friends and I went to Ranging Waters. The water slides were huge!! To be honest, I was really scared of them at first but I had so much fun!! Plus, Ranging Waters is just gorgeous!",
  //     fullPost:
  //       "I would say that my first slide, Neptune’s Fury, made me a bit more courageous for all the rides that followed. Although I was nervous at first, it felt really nice, especially with the water splashing on my face and my friends screaming. The unpredictable turns and sways of the purple tube in complete darkness were super exciting. I also we went to the the Bermuda Triangle then the High Extreme, which was an INTENSE workout because the walk to get up the slide took longer than the sliding down!"
  //   };
} else {
  post = {
    title: "",
    date: "",
    imageUrl: "",
    shortDesc: "",
    fullPost: ""
  };
}
export default {
  name: "UserInput",
  props: ["blogPostForm"],
  data: function() {
    return {
      validations: ["required", "minLength"],
      post: post,
      formHasErrors: false
    };
  },
  watch: {
    "$v.$anyError": function() {
      this.formHasErrors = this.$v.$anyError;
      console.log(this.$v.post);
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
        minLength: minLength(6)
      },
      imageUrl: {
        required,
        minLength: minLength(4)
      },
      shortDesc: {
        required,
        minLength: minLength(150),
        maxLength: maxLength(200)
      },
      fullPost: {
        required,
        maxLength: maxLength(500)
      }
    }
  },
  mounted: function() {
    console.log(this.$v.post);
  }
};
</script>

<style>
</style>