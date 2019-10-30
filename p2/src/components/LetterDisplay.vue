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
  width: 30px;
  height: 25px;
  text-align: center;
  border-radius: 8px;
  padding-top: 7px;
  float: left;
  margin-right: 10px;
}
</style>
