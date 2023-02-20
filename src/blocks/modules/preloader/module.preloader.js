import "../../../js/commonVue.js";

window.preloader = new Vue({
  el: "#preloader",
  data: () => ({
    isPreloaderHidden: false,
  }),
  mounted() {
    setTimeout(() => {
      let preloader = document.querySelector(".preloader svg animateTransform");
      preloader.addEventListener("endEvent", () => {
        this.isPreloaderHidden = true;
        if (window.firstScreen) {
          window.firstScreen.isShowTentacles = true;
        }
      });
    }, 0);
  },
});
