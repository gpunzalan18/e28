<template>
  <div class="validationMsg">
    <div v-if="userMsg">
      <h4 v-if="correctAnswer" class="green">
        <img src="../assets/correct.png" :alt="userMsg" />
        {{userMsg}}
      </h4>
      <h4 v-else class="red">
        <img src="../assets/incorrect.png" :alt="userMsg" />
        {{userMsg}}
      </h4>
    </div>
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
img {
  width: 35px;
  height: auto;
  vertical-align: middle;
}

.green {
  color: green;
}

.red {
  color: #980000;
}
</style>
