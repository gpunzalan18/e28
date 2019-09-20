// Declaring all necessary elements from html
let createBtn = document.querySelector('#createBtn');
let guessBtn = document.querySelector('#guessBtn');
let solveBtn = document.querySelector('#solveBtn');
let puzzle = document.querySelector('#puzzle');
let guesses = document.querySelector('#guesses');
let puzzleSolved = document.querySelector('#puzzleSolved');
let secondView = document.querySelector('#secondView');
let inputView = document.querySelector('#inputView');

createBtn.addEventListener('click', generatePuzzle);
guessBtn.addEventListener('click', guessLetter);
solveBtn.addEventListener('click', solvePuzzle);

let randomWord = '';
let invalidAttempt;

function generatePuzzle() {
   guesses.innerHTML = '';
   invalidAttempt = 0;
   puzzleSolved.innerHTML = '';
   guesses.style.display = 'block';

   let category = document.querySelector('input[name="category"]:checked').value;
   let canvasDisplay = '';

   let categoryData = {
      fruits: ['apple', 'avocado', 'watermelon', 'blackberry', 'mango'],
      animals: ['gorilla', 'snake', 'bat', 'crocodile', 'elephant'],
      color: ['red', 'blue', 'yellow', 'white', 'orange']
   }
   randomWord = categoryData[category][Math.floor(Math.random() * 5)];

   for (let i = 0; i < randomWord.length; i++) {
      canvasDisplay += "_ ";
   }
   puzzle.innerHTML = canvasDisplay;
   secondView.style.display = 'block';
   inputView.style.display = 'block';
}

function guessLetter() {
   puzzleSolved.innerHTML = '';
   let canvasDisplay = '';
   let input = document.querySelector('#inputValue').value.toLowerCase();
   if (input.length === 1) {
      let foundIndex = [];
      for (let i = 0; i < randomWord.length; i++) {
         if (input == randomWord.toLowerCase()[i]) {
            canvasDisplay += input + ' ';
            foundIndex.push(i);
         } else {
            canvasDisplay += puzzle.innerHTML[i * 2] + ' ';
         }
      }
      if (foundIndex.length === 0) {
         guesses.innerHTML += input + ' ';
         invalidAttempt += 1;
      }
      puzzle.innerHTML = canvasDisplay;
      isWinner(invalidAttempt);
      document.querySelector('#inputValue').value = '';
   }
}

function solvePuzzle() {
   let input = document.querySelector('#inputValue').value.toLowerCase();
   if (input == randomWord.toLowerCase()) {
      puzzle.innerHTML = input;
      puzzleSolved.innerHTML = 'Congratulations, you solved the puzzle!';
      puzzleSolved.style.color = "green";
      inputView.style.display = 'none';
      guesses.style.display = 'none';
   } else {
      puzzleSolved.innerHTML = '"' + input + '"' + ' is incorrect, try again!';
      puzzleSolved.style.color = "red";
   }
   document.querySelector('#inputValue').value = '';
}

function isWinner(invalidAttempt) {
   if (!puzzle.innerHTML.includes('_')) {
      puzzleSolved.innerHTML = 'Congratulations, you solved the puzzle!';
      puzzleSolved.style.color = "green";
      inputView.style.display = 'none';
      guesses.style.display = 'none';
   } else if (invalidAttempt >= 6) {
      puzzleSolved.innerHTML = 'You\'ve entered 6 invalid letters. Better luck next time!';
      puzzleSolved.style.color = "red";
      inputView.style.display = 'none';

   }
}

