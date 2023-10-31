const App = {
  data() {
    return {
      workCards: [false, false, false, false, false, false, false, false],
      hiddenEmail: "waleed.rawasia@gmail.com",
      clickMe: "click to show"
    }
  },
  methods: {
    toggleCard: function(num) {
      if (this.workCards[num]) {
        this.workCards[num] = false
        document.querySelectorAll('.work-card')[num].classList.remove('active')
      } else {
        this.workCards[num] = true
        document.querySelectorAll('.work-card')[num].classList.add('active')
      }
    },
    showEmail: function() {
      this.clickMe = this.hiddenEmail
    }
  }
}

Vue.createApp(App).mount('#app');