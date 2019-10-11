let app = new Vue({
    el: '#app',
    data: {
        content: content,
        gameView: false,
        correctAnswer: false,
        inputView: true,
        invalidAttempt: 0,
        guesses: [],
        randomWord: '',
        pickedCategory: '',
        puzzle: '',
        userInput: '',
        userMsg: ''
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
                let display = '';
                this.userMsg = '';
                for (let i = 0; i < this.randomWord.length; i++) {
                    if (this.userInput.toLowerCase() == this.randomWord[i]) {
                        display += this.userInput.toLowerCase() + ' ';
                    } else {
                        display += this.puzzle[i * 2] + ' ';
                    }
                }
                this.puzzle = display;
            }
            this.isWinner();
        },
        solvePuzzle() {
            if (this.userInput.toLowerCase() == this.randomWord) {
                this.userMsg = 'win';
                this.correctAnswer = true;
            } else {
                this.userMsg = 'incorrect';
                this.correctAnswer = false;
            }
            this.disable()
        },
        isWinner() {
            if (!this.puzzle.includes('_')) {
                this.userMsg = 'win';
                this.correctAnswer = true;
                this.disable();
            } else if (this.invalidAttempt >= 6) {
                this.userMsg = 'lose';
                this.correctAnswer = false;
                this.disable();
            }
            this.userInput = '';
        },
        disable() {
            this.puzzle = this.randomWord;
            this.inputView = false;
        },
        initialize() {
            this.puzzle = '';
            this.userMsg = '';
            this.userInput = '';
            this.guesses = [];
            this.inputView = true;
            this.gameView = true;
            this.invalidAttempt = 0;
        },
    },
    watch: {
        pickedCategory: function () {
            this.initialize();
            let categoryList = this.content.categories[this.pickedCategory].list;
            this.randomWord = categoryList[Math.floor(Math.random() * 5)];

            for (let i = 0; i < this.randomWord.length; i++) {
                this.puzzle += "_ ";
            }
        }
    }
})