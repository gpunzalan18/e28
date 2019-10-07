let app = new Vue({
  el: '#app',
  data: {
    content: content,
    showSecondView: false,
    randomWord: '',
    picked: '',
    puzzle: '',
    guessedLetter: '',
    guesses: [],
    invalidAttempt: 0,
    userMsg: '',
    inputView: true,
    msgColor: '',
    guessBtn: '',
    btnName: ''
  },
  methods: {
    generatePuzzle() {
      this.reset();
      this.showSecondView = true;
      categoryList = this.content.categories[this.picked].list;
      this.randomWord = categoryList[Math.floor(Math.random() * 5)];

      for (let i = 0; i < this.randomWord.length; i++) {
        this.puzzle += "_ ";
      }
    },
    guessEnter() {
      if (this.guessedLetter.length == 1) {
        this.guessLetter();
      } else if (this.guessedLetter.length > 1) {
        this.solvePuzzle();
      }
    },
    guessLetter() {
      let foundIndex = [];
      let display = '';
      this.userMsg = '';
      if (this.guessedLetter.length === 1) {
        for (let i = 0; i < this.randomWord.length; i++) {
          if (this.guessedLetter == this.randomWord.toLowerCase()[i]) {
            display += this.guessedLetter + ' ';
            foundIndex.push(i);
          } else {
            display += this.puzzle[i * 2] + ' ';
          }
        }
        this.puzzle = display;

        if (foundIndex.length === 0) {
          this.guesses.push(this.guessedLetter);
          this.invalidAttempt += 1;
        }
        this.isWinner();
        this.guessedLetter = '';
      }
    },
    solvePuzzle() {
      if (this.guessedLetter.length >= 1 && this.guessedLetter == this.randomWord.toLowerCase()) {
        this.msgColor = 'green';
        this.userMsg = this.content.messages.win;
        this.inputView = false;
        this.guesses = [];
        this.puzzle = this.guessedLetter;
      } else {
        this.msgColor = 'red';
        this.userMsg = this.content.messages.incorrect;
      }
      this.guessedLetter = '';
    },
    reset() {
      this.puzzle = '';
      this.userMsg = '';
      this.guesses = [];
      this.inputView = true;
      this.guessedLetter = '';
      this.invalidAttempt = 0;
    },
    isWinner() {
      if (!this.puzzle.includes('_')) {
        this.msgColor = 'green';
        this.userMsg = this.content.messages.win;
        this.inputView = false;
      } else if (this.invalidAttempt >= 6) {
        this.msgColor = 'red';
        this.userMsg = this.content.messages.lose;
        this.puzzle = this.randomWord;
        this.inputView = false;
      }
    },
  }
})