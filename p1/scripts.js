let app = new Vue({
  el: '#app',
  data: appData,
  methods: {
    enable: function () {
      this.showSecondView = true;
    }
  }
})