const mainQuestionForm = class mainQuestionForm {
  constructor({ inputSelector }) {
    this.inputSelector = inputSelector;
    this.file = "";
    this.hasFile = false;
    this.isSafary = null;
  }
  onInputChange(event) {
    if (!event.target.files.length) {
      this.hasFile = false;
      this.file = null;
      return;
    }
    this.hasFile = true;
    this.file = { ...event.target.files }[0];
  }
  init() {
    if (!document.querySelector(this.inputSelector)) return;
    let fileInput = document.querySelector(this.inputSelector);
    fileInput.addEventListener("change", () => this.onInputChange(event));
    this.isSafary = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const mainTentacles = document.querySelectorAll(".main-question-tentacle");
    if (!this.isSafary) {
      mainTentacles[0].style.block = "block";
      mainTentacles[1].style.block = "none";
    } else {
      mainTentacles[1].style.block = "block";
      mainTentacles[0].style.block = "none";
    }
    mainTentacles.forEach((ten) => {
      const tenImage = ten.querySelectorAll("img");
      if (window.innerWidth < 1023) {
        tenImage[1].style.display = "block";
        tenImage[0].style.display = "none";
      } else {
        tenImage[1].style.display = "none";
        tenImage[0].style.display = "block";
      }
    });
  }
};

export default mainQuestionForm;
