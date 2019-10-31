<template>
  <div v-if="userMsg">
    <h4 v-if="correctAnswer" class="green">{{userMsg}}</h4>
    <h4 v-else class="red">{{userMsg}}</h4>
  </div>
</template>

<script>
export default {
  name: "ValidationMsg",
  props: {
    correctAnswer: {
      type: Boolean,
      default: null
    },
    userMsg: {
      type: String,
      default: null
    }
  },
};
</script>

<style scoped>
div {
  vertical-align: middle;
  display: inline-block;
  width: auto;
  border: dashed 1px;
  border-color: grey;
  padding: 0px 10px;
}

.green {
  color: #056a13;
}

.red {
  color: #980000;
}
</style>
