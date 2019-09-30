let app = new Vue({
  el: '#app',
  data: {
    content: content,
    showSecondView: false,
    randomWord: null,
    picked: null,
    puzzle: '',
    guessedLetter: null
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
    guessLetter() {
      let foundIndex = [];
      let display = '';
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
        this.guessedLetter = null;
      }
    },
    reset() {
      this.puzzle = '';
    }
  }
})