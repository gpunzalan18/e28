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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.letter {
  background-color: black;
  color: white;
  width: 25px;
  height: 25px;
  text-align: center;
  border-radius: 8px;
  padding-top: 2px;
  float: left;
  margin-right: 10px;
}
</style>
