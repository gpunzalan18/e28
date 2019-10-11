let app = new Vue({
    el: "#app",
    data: {
        solution: 35,
        answer: "",
        imageSrc: "",
        imageAlt: "",
        correct: false,
        feedback: "",
        valid: false,
        showHint: false,
        statements: [],
        level: 'easy',
    },
    methods: {
        submitAnswer: function () {
            this.valid = true;
            if (typeof (this.answer) != "number") {
                this.valid = false;
                this.correct = false;
                this.feedback = "incorrect value"
            }
            else if (this.answer == this.solution) {
                this.imageSrc = "happy.png";
                this.imageAlt = "happy face";
                this.feedback = "Correct"
                this.correct = true;
            } else {
                this.imageSrc = "sad.png";
                this.imageAlt = "sad face";
                this.feedback = "Wrong";
                this.correct = false;
            }

            console.log(this.imageSrc)
        }
    }
}) 