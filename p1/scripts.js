let app = new Vue({
    el: '#app',
    data: {
        content: content,
        secondView: false,
        inputView: true,
        invalidAttempt: 0,
        guesses: [],
        randomWord: '',
        pickedCategory: '',
        puzzle: '',
        userInput: '',
        userMsg: '',
        msgColor: '',
        guessBtn: '',
    },
    methods: {
        generatePuzzle() {
            this.reset();
            let categoryList = this.content.categories[this.pickedCategory].list;
            this.randomWord = categoryList[Math.floor(Math.random() * 5)];

            for (let i = 0; i < this.randomWord.length; i++) {
                this.puzzle += "_ ";
            }
        },
        guess() {
            if (this.userInput.length == 1) {
                this.guessLetter();
            } else if (this.userInput.length > 1) {
                this.solvePuzzle();
            } else {
                this.msgColor = 'red';
                this.userMsg = "Enter a value."
            }
        },
        guessLetter() {
            if (this.userInput.length === 1) {
                let foundIndex = [];
                let display = '';
                this.userMsg = '';
                for (let i = 0; i < this.randomWord.length; i++) {
                    if (this.userInput.toLowerCase() == this.randomWord[i]) {
                        display += this.userInput.toLowerCase() + ' ';
                        foundIndex.push(i);
                    } else {
                        display += this.puzzle[i * 2] + ' ';
                    }
                }
                this.puzzle = display;

                if (foundIndex.length === 0) {
                    this.guesses.push(this.userInput.toLowerCase());
                    this.invalidAttempt += 1;
                }
                this.isWinner();
                this.userInput = '';
            }
        },
        solvePuzzle() {
            if (this.userInput.length >= 1 && this.userInput.toLowerCase() == this.randomWord) {
                this.inputView = false;
                this.puzzle = this.userInput.toLowerCase();
                this.msgColor = 'green';
                this.userMsg = this.content.messages.win;
            } else {
                this.msgColor = 'red';
                this.userMsg = this.content.messages.incorrect;
            }
            this.userInput = '';
        },
        reset() {
            this.puzzle = '';
            this.userMsg = '';
            this.userInput = '';
            this.guesses = [];
            this.inputView = true;
            this.secondView = true;
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