<template>
  <div id="app">
    <h1>{{content.title}}</h1>
    <h3>{{content.instruction}}</h3>
    <label v-for="(item, index) in content.categories" :key="index">
      <input type="radio" :value="index" v-model="pickedCategory" />
      {{item.id}}
    </label>

    <div v-if="gameView">
      <h2 v-if="puzzle">{{puzzle}}</h2>

      <!-- Letter Display Component -->
      <h4 v-if="guesses" class="guesses">
        <letter-display v-for="(guess, index) in guesses" :key="index" :letter="guess"></letter-display>
      </h4>

      <div v-if="inputView">
        <label for="userInput">
          {{content.submitLabel}}
          <br />
          <br />
          <input id="userInput" type="text" v-model.trim="userInput" @keyup.enter="guess" />
        </label>
        <button type="submit" @click="guess">{{content.buttons.submit}}</button>
        <h4>{{this.content.strikes}} {{6 - invalidAttempt}}</h4>
      </div>
  
      <validation-msg :userMsg="userMsg" :correctAnswer="correctAnswer"></validation-msg>

      <!-- Validation messages to user -->
    </div>
  </div>
</template>

<script>
import content from "../data/content.json";
import LetterDisplay from "../src/components/LetterDisplay";
import ValidationMsg from "../src/components/ValidationMsg";

export default {
  name: "app",
  components: {
    LetterDisplay,
    ValidationMsg
  },
  data: function() {
    return {
      content: content,
      gameView: false,
      correctAnswer: false,
      inputView: true,
      invalidAttempt: 0,
      guesses: null,
      randomWord: "",
      pickedCategory: "",
      puzzle: null,
      userInput: "",
      userMsg: ""
    };
  },
  methods: {
    guess() {
      if (this.userInput.length == 1) {
        this.letterGuess();
      } else if (this.userInput.length > 1) {
        this.solvePuzzle();
      } else {
        this.userMsg = "invalid";
      }
    },
    letterGuess() {
      if (!this.randomWord.includes(this.userInput)) {
        this.guesses.push(this.userInput.toLowerCase());
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
        this.puzzle = display;
      }
      this.isWinner();
    },
    solvePuzzle() {
      if (this.userInput.toLowerCase() == this.randomWord) {
        this.userMsg = "win";
        this.correctAnswer = true;
      } else {
        this.userMsg = "incorrect";
        this.correctAnswer = false;
      }
      this.disable();
    },
    isWinner() {
      if (!this.puzzle.includes("_")) {
        this.userMsg = "win";
        this.correctAnswer = true;
        this.disable();
      } else if (this.invalidAttempt >= 6) {
        this.userMsg = "lose";
        this.correctAnswer = false;
        this.disable();
      }
      this.userInput = "";
    },
    disable() {
      this.puzzle = this.randomWord;
      this.inputView = false;
    },
    initialize() {
      this.puzzle = "";
      this.userMsg = "";
      this.userInput = "";
      this.guesses = [];
      this.inputView = true;
      this.gameView = true;
      this.invalidAttempt = 0;
    }
  },
  watch: {
    pickedCategory: function() {
      this.initialize();
      let categoryList = this.content.categories[this.pickedCategory].list;
      this.randomWord = categoryList[Math.floor(Math.random() * 5)];

      for (let i = 0; i < this.randomWord.length; i++) {
        this.puzzle += "_ ";
      }
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      console.log("Content:", this.content);
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-top: 30px;
}

[v-cloak] {
  display: none;
}

.guesses {
  display: list-item;
}
</style>
