<template>
  <div>
    <slot></slot>
    <br />
    <br />
    <input id="inputVal" type="text" v-model.trim="userInput" @keyup.enter="guess" />
    <button type="submit" @click="guess">{{content.buttons.submit}}</button>
  </div>
</template>

<script>
import content from "../../data/content.json";

export default {
  name: "UserInput",
  data: function() {
    return {
      content: content,
      userInput: "",
      invalidAttempt: 0,
      newPuzzleView: "",
      userMsg: null,
      correctAnswer: true
    };
  },
  props: {
    randomWord: {
      type: String,
      default: ""
    },
    puzzle: {
      type: String,
      default: null
    }
  },
  methods: {
    guess() {
      this.reset();
      if (this.userInput.length == 1) {
        this.letterGuess();
      } else if (this.userInput.length > 1) {
        this.solvePuzzle();
      } else {
        this.$emit(
          "display-validation-msg",
          !this.correctAnswer,
          this.content.messages.enterValue
        );
      }
    },
    letterGuess() {
      if (!this.randomWord.includes(this.userInput)) {
        this.$emit("invalid-input", this.userInput.toLowerCase());
        this.invalidAttempt += 1;
      } else {
        let display = "";
        this.userMsg = "";
        for (let i = 0; i < this.randomWord.length; i++) {
          if (this.userInput.toLowerCase() == this.randomWord[i]) {
            display += this.userInput.toLowerCase() + " ";
          } else {
            display += this.puzzle[i * 2] + " ";
          }
        }
        this.$emit("new-puzzle-view", display);
        this.newPuzzleView = display;
      }
      this.isWinner();
    },
    solvePuzzle() {
      if (this.userInput.toLowerCase() == this.randomWord) {
        this.$emit(
          "display-validation-msg",
          this.correctAnswer,
          this.content.messages.puzzleSolved
        );
      } else {
        this.$emit(
          "display-validation-msg",
          !this.correctAnswer,
          this.content.messages.incorrectAnswer
        );
      }
      this.disable();
    },
    isWinner() {
      if (!this.newPuzzleView.includes("_")) {
        this.$emit(
          "display-validation-msg",
          this.correctAnswer,
          this.content.messages.puzzleSolved
        );
        this.disable();
      } else if (this.invalidAttempt >= 6) {
        this.$emit(
          "display-validation-msg",
          !this.correctAnswer,
          this.content.messages.invalidAttempts
        );
        this.disable();
      }
      this.userInput = "";
    },
    disable() {
      this.$emit("disable-input-view");
    },
    reset() {
      this.$emit("display-validation-msg", null, null);
      this.newPuzzleView = this.puzzle;
      this.userMsg = "";
    }
  }
};
</script>

<style scoped>
</style>
