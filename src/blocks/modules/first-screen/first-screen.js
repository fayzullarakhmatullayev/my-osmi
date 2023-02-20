import { gsap } from "gsap";
import screenSize from "../../../js/screen_size";

const firstScreen = class FirstScreen {
  constructor(isShowTentacles = false) {
    this.cursorAnimationParams = {
      count: 100,
      colors: ["#FF4978", "#430A66"],
      radius: 40,
      speed: 1,
      lifetime: 150,
      element: "cursor",
    };
    this.circles = [];
    this.isShowTentacles = isShowTentacles;
  }
  setCanvasSize() {
    return this.cursorAnimationParams;
  }

  createCanvas() {
    return new Promise((resolve, reject) => {
      if (document.getElementById(this.cursorAnimationParams.element)) {
        resolve({
          canvas: (this.canvas = document.getElementById(
            this.cursorAnimationParams.element
          )),
          ctx: this.canvas ? (this.ctx = this.canvas.getContext("2d")) : null,
          width:
            (this.width = this.canvas.width =
              document.querySelector(".first-screen").clientWidth),
          height:
            (this.height = this.canvas.height =
              document.querySelector(".first-screen").clientHeight),
        });
      } else {
        reject(new Error("params.element is not defined"));
      }
      this.gradient = this.ctx.createLinearGradient(0, 0, window.innerWidth, 0);
      for (let i = 0; i < this.cursorAnimationParams.colors.length; i++) {
        this.gradient.addColorStop(i, this.cursorAnimationParams.colors[i]);
      }
    });
  }

  updateCanvasSize() {
    return new Promise((resolve, reject) => {
      if (this.canvas && this.ctx) {
        return resolve({
          width:
            (this.width = this.canvas.width =
              document.querySelector(".first-screen").clientWidth),
          height:
            (this.height = this.canvas.height =
              document.querySelector(".first-screen").clientHeight),
        });
      }
    });
  }

  pushCircleObject(x, y) {
    const circle = {
      x,
      y,
      lifetime: this.cursorAnimationParams.radius,
      radius: this.cursorAnimationParams.radius,
    };
    this.circles.push(circle);
  }

  animate({ x, y }) {
    if (!this.canvas) return;
    this.pushCircleObject(x, y);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.gradient;
    this.ctx.strokeStyle = this.gradient;
    // this.ctx.drawImage(this.cursorAnimationParams.shape, 0, 0, this.canvas.width, this.canvas.height);
    for (var i = 1; i < this.circles.length; i++) {
      this.circles[i].lifetime -= this.cursorAnimationParams.speed;
      if (this.circles[i].lifetime <= 0) {
        this.circles.splice(i, 1);
      }
      if (this.circles[i] && this.circles[i + 1]) {
        this.ctx.lineWidth = this.circles[i].radius * 2;
        this.ctx.beginPath();
        this.ctx.moveTo(this.circles[i + 1].x, this.circles[i + 1].y);
        this.ctx.lineTo(this.circles[i].x, this.circles[i].y);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.arc(
          this.circles[i].x,
          this.circles[i].y,
          this.circles[i].radius,
          0,
          Math.PI * 2
        );
        this.ctx.closePath();
        this.ctx.fill();
      }
    }
  }

  animationTentacles() {
    gsap.to(".first-screen__tentacles", {
      duration: 1,
      left: 0,
    });
  }

  init() {
    new screenSize().init();
    gsap.to(".first-screen__tentacles", {
      duration: 1,
      left: 0,
    });
    setTimeout(() => {
      this.createCanvas();

      window.addEventListener("resize", this.updateCanvasSize);

      document
        .getElementById("first-screen")
        .addEventListener("mousemove", (event) => {
          document.getElementById("cursor").style.opacity = 1;
          this.animate({
            x: event.pageX,
            y: event.pageY,
          });
        });

      document
        .getElementById("first-screen")
        .addEventListener("mouseleave", (event) => {
          document.getElementById("cursor").style.opacity = 0;

          this.animate({
            x: event.pageX,
            y: event.pageY,
          });
        });
    }, 0);
  }
};

export default firstScreen;
