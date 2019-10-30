<template>
  <div v-if="userMsg">
    <h4 v-if="correctAnswer" class="green">{{userMsg}}</h4>
    <h4 v-else class="red">{{userMsg}}</h4>
  </div>
</template>

<script>
import content from "../../data/content.json";

export default {
  name: "ValidationMsg",
  data: function() {
    return {
      messages: content.messages
    };
  },
  props: {
    correctAnswer: Boolean,
    userMsg: String
  }
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
  color: green;
}

.red {
  color: #980000;
}
</style>
