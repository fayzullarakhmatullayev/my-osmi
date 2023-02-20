const screenSize = class ScreenSize {
  constructor() {
    this.window = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  init() {
    window.addEventListener("resize", () => {
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    });
  }
};

export default screenSize;
