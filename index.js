const App = {
  data() {
    return {
      isMobileNavActive: false
    }
  },
  methods: {
    toggleMobileNav() {
      if (this.isMobileNavActive == false) {
        this.isMobileNavActive = true;
      } else {
        this.isMobileNavActive = false;
      }
    },
    mobileNavOff() {
      this.isMobileNavActive = false;
    }
  }
}

Vue.createApp(App).mount('#app');