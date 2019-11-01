<template>
  <span class="letter">{{letter}}</span>
</template>

<script>
export default {
  name: "LetterDisplay",
  props: {
    letter: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.letter {
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 8px;
  padding: 5px 15px;
  margin-right: 10px;
}
</style>
