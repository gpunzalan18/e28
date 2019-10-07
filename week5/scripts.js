let app = new Vue({
  el: "#app",
  data: {
    solution: 35,
    answer: "",
    imageSrc: "",
    imageAlt: ""
  },
  methods: {
    submitAnswer: function () {
      if (this.answer == this.solution) {
        this.imageSrc = "happy.png";
        this.imageAlt = "happy face";
      } else {
        this.imageSrc = "sad.png";
        this.imageAlt = "sad face";
      }

      console.log(this.imageSrc)
    }
  }
}) 