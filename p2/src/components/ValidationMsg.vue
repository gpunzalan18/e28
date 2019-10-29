<template>
  <div class="validationMsg">
    <div v-if="userMsg" :class="{ green: correctAnswer, red: !correctAnswer }">
      <h4 v-if="userMsg == 'win'">
        <img src="../assets/correct.png" :alt="userMsg" />
        {{this.messages.win}}
      </h4>
      <h4 v-else-if="userMsg == 'lose'">
        <img src="../assets/incorrect.png" :alt="userMsg" />
        {{this.messages.lose}}
      </h4>
      <h4 v-else-if="userMsg == 'incorrect'">
        <img src="../assets/incorrect.png" :alt="userMsg" />
        {{this.messages.incorrect}}
      </h4>
      <h4 v-else-if="userMsg == 'invalid'">{{this.messages.invalid}}</h4>
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
    userMsg: String,
    iconImg: String
  }
};
</script>

<style scoped>
img {
  width: 50px;
  height: auto;
  vertical-align: middle;
}


</style>
