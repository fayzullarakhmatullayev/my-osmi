import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Glide from "@glidejs/glide";

gsap.registerPlugin(ScrollTrigger);

const mainWeb = class Mainweb {
  constructor() {
    this.slider;
    this.element = ".web-tentacle";
    this.trigger = ".first-frame";
    this.isSafary = null;
    this.triggerSlider = true;
    if (document.querySelector(".web-slider")) {
      this.slider = new Glide(".web-slider", {
        type: "carousel",
        startAt: 1,
        perView: 1,
        gap: 0,
      });
    }
  }
  onInitSlider() {
    if (!document.querySelector(".web-slider")) return;

    this.slider = new Glide(".web-slider", {
      type: "carousel",
      startAt: 1,
      perView: 1,
      gap: 0,
    });
    if (window.innerWidth < 1023) {
      this.slider.mount();
    }
  }

  /**
   * Анимация колонок
   */
  animateElement() {
    if (!document.querySelector(".web-right-image")) return;

    gsap.utils.toArray(".web-right-image").forEach((item, i) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (item) => {
          if (item.progress > 0) {
            if (document.querySelector(`.web-subtitles`)) {
              document.querySelectorAll(`.web-subtitle`).forEach((item) => {
                item.classList.remove("isActive");
              });
              document
                .querySelector(
                  `.web-subtitle[data-item-id="${item.trigger.dataset.itemId}"]`
                )
                .classList.add("isActive");
            }
            if (document.querySelector(`.web-titles`)) {
              document.querySelectorAll(`.web-title`).forEach((item) => {
                item.classList.remove("isActive");
              });
              document
                .querySelector(
                  `.web-title[data-item-id="${item.trigger.dataset.itemId}"]`
                )
                .classList.add("isActive");
            }
            if (document.querySelector(`.web-texts`)) {
              document.querySelectorAll(`.web-text`).forEach((item) => {
                item.classList.remove("isActive");
              });
              document
                .querySelector(
                  `.web-text[data-item-id="${item.trigger.dataset.itemId}"]`
                )
                .classList.add("isActive");
            }
            if (document.querySelector(`.web-buttons`)) {
              document.querySelectorAll(`.web-button`).forEach((item) => {
                item.classList.remove("isActive");
              });
              document
                .querySelector(
                  `.web-button[data-item-id="${item.trigger.dataset.itemId}"]`
                )
                .classList.add("isActive");
            }
          }
        },
      });
    });
    gsap.to(".web-data-in", {
      scrollTrigger: {
        trigger: ".web-data",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        // markers: true
      },
      x: 0,
    });
  }
  checkIsSafari() {
    setTimeout(() => {
      this.isSafary = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent
      );
      const webTentacle = document.querySelectorAll(".web-tentacle img");
      if (this.isSafary) {
        webTentacle[0].style.display = "block";
        webTentacle[1].style.display = "none";
      } else {
        webTentacle[1].style.display = "block";
        webTentacle[0].style.display = "none";
      }
    }, 0);
  }
  checkWindowSize() {
    const isMobile = window.innerWidth <= 1023;
    const mainWebs = document.querySelectorAll(".main-web .web");
    mainWebs.forEach((ele) => {
      ele.style.display = "none";
    });
    mainWebs[0].style.display = "block";
    if (isMobile) {
      mainWebs[0].style.display = "none";
      mainWebs[1].style.display = "block";
      mainWebs[1].classList.add("mobile");
      if (this.triggerSlider) {
        this.onInitSlider();
      }
      this.triggerSlider = false;
    } else {
      mainWebs[1].style.display = "none";
      mainWebs[0].style.display = "block";
      mainWebs[1].classList.remove("mobile");
    }
  }

  init() {
    window.addEventListener("resize", this.checkWindowSize);
    this.checkWindowSize();
    this.checkIsSafari();
    this.animateElement();
    this.onInitSlider();
  }
};
export default mainWeb;
