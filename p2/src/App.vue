<template>
  <div id="app">
    <h1>{{content.title}}</h1>
    <h3>{{content.instruction}}</h3>
    <label v-for="(item, index) in content.categories" :key="index">
      <input type="radio" :value="index" v-model="pickedCategory" />
      {{item.id}}
    </label>
    <br />
    <div v-if="gameView">
      <h2 v-if="puzzle">{{puzzle}}</h2>
      <div v-if="guesses" class="guesses">
        <letter-display v-for="(guess, index) in guesses" :key="index" :letter="guess"></letter-display>
      </div>

      <div v-if="inputView">
        <user-input
          :randomWord="randomWord"
          :puzzle="puzzle"
          @invalid-input="invalidInput"
          @new-puzzle-view="newPuzzleView"
          @display-validation-msg="displayValidationMsg"
          @disable-input-view="disableInputView"
        >
          <label>{{content.submitLabel}}</label>
        </user-input>
        <h4>{{this.content.strikes}} {{6 - guesses.length}}</h4>
      </div>

      <!-- Validation Message Component -->
      <validation-msg :userMsg="userMsg" :correctAnswer="correctAnswer"></validation-msg>
    </div>
  </div>
</template>

<script>
import content from "../data/content.json";
import LetterDisplay from "../src/components/LetterDisplay";
import ValidationMsg from "../src/components/ValidationMsg";
import UserInput from "../src/components/UserInput";

export default {
  name: "app",
  components: {
    UserInput,
    LetterDisplay,
    ValidationMsg
  },
  data: function() {
    return {
      content: content,
      gameView: false,
      correctAnswer: false,
      inputView: true,
      randomWord: "",
      pickedCategory: "",
      puzzle: null,
      userMsg: null,
      guesses: []
    };
  },
  methods: {
    initialize() {
      this.puzzle = "";
      this.userMsg = null;
      this.guesses = [];
      this.inputView = true;
      this.gameView = true;
    },
    // Event methods
    newPuzzleView(view) {
      this.puzzle = view;
    },
    invalidInput(invalidInput) {
      this.guesses.push(invalidInput);
    },
    displayValidationMsg(correctAnswer, userMsg) {
      this.correctAnswer = correctAnswer;
      this.userMsg = userMsg;
    },
    disableInputView() {
      this.inputView = false;
      this.puzzle = this.randomWord;
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
  }
};
</script>

<style>
[v-cloak] {
  display: none;
}

.guesses {
  display: flex;
  margin-bottom: 25px;
}
</style>
