let app = new Vue({
  el: '#app',
  data: {
    'playerName': null,
    'guess': null,
    'guesses': [],
    'results': 'tie',
    'gameType': 'numeric',
    'settings': {
      max: 200,
      limit: 5
    },
    'answer': 55,
    'guessesDetailed': [
      { guess: 15, result: 'low' },
      { guess: 60, result: 'high' },
      { guess: 50, result: 'low' }
    ]
  },
  methods: {
    submitGuess() {
      this.guesses.push(this.guess);
      this.guess = null;
    }
  }
}) 