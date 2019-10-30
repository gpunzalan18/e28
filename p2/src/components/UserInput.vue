<template>
  <div>
    <label for="inputVal">
      {{content.submitLabel}}
      <br />
      <br />
      <input id="inputVal" type="text" v-model.trim="userInput" @keyup.enter="guess" />
    </label>
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
      guesses: [],
      invalidAttempt: 0
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
      this.userMsg = "";
      if (this.userInput.length == 1) {
        this.letterGuess();
      } else if (this.userInput.length > 1) {
        this.solvePuzzle();
      } else {
        this.userMsg = this.content.messages.invalid;
        this.$emit("solve-puzzle", this.correctAnswer, this.userMsg, true);
      }
    },
    letterGuess() {
      if (!this.randomWord.includes(this.userInput)) {
        this.$emit("letter-guess", this.userInput.toLowerCase(), null);

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
        this.$emit("letter-guess", null, display);
      }
      this.isWinner();
    },
    solvePuzzle() {
      if (this.userInput.toLowerCase() == this.randomWord) {
        this.userMsg = this.content.messages.win;
        this.correctAnswer = true;
      } else {
        this.userMsg = this.content.messages.incorrect;
        this.correctAnswer = false;
      }
      this.$emit("solve-puzzle", this.correctAnswer, this.userMsg, false);
      this.disable();
    },
    isWinner() {
      if (!this.puzzle.includes("_")) {
        this.userMsg = this.content.messages.win;
        this.correctAnswer = true;
        this.$emit("solve-puzzle", this.correctAnswer, this.userMsg, false);
        this.disable();
      } else if (this.invalidAttempt >= 6) {
        this.userMsg = this.content.messages.lose;
        this.correctAnswer = false;
        this.$emit("solve-puzzle", this.correctAnswer, this.userMsg, false);
        this.disable();
      }
      this.userInput = "";
    },
    disable() {
      this.puzzle = this.randomWord;
      this.inputView = false;
    }
  }
};
</script>

<style scoped>
</style>
