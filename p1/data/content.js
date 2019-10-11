let content = {
    title: "Project 1 - Mystery Game in Vue.js",
    instruction: "Pick a category:",
    submitLabel: "Enter a letter or solve the puzzle:",
    strikes: "Available strikes:",
    categories: [
        {
            id: 'fruits',
            list: ['apple', 'avocado', 'watermelon', 'blackberry', 'mango']
        },
        {
            id: 'animals',
            list: ['gorilla', 'snake', 'bat', 'crocodile', 'elephant']
        },
        {
            id: 'color',
            list: ['red', 'blue', 'yellow', 'white', 'orange']
        }
    ],
    buttons: {
        generate: "Generate Puzzle",
        submit: "Submit",
    },
    messages: {
        win: "Congratulations, you solved the puzzle!",
        lose: "You\'ve entered 6 invalid letters. Better luck next time!",
        incorrect: "Your answer is incorrect, try again!",
        invalid: "Enter a value."
    }
}