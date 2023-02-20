import gsap from "gsap";
import interact from "interactjs";
import resizeScreen from "./resize";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Glide from "@glidejs/glide";
import videojs from "video.js";
import { resizeData } from "../blocks/modules/header/headerData";
import screenSize from "./screen_size";
import $ from "jquery";
import "slick-carousel";
import "jquery.marquee";

gsap.registerPlugin(ScrollTrigger);

// Prloader
const preloader = class Prloader {
  constructor() {
    this.isLoading = false;
  }
  init() {
    resizeScreen([
      {
        element: "#preloader",
        className: "mobile",
        size: 1023,
        isLess: false, //<=
      },
    ]);
    setTimeout(() => {
      let preloader = document.querySelector(".preloader svg animateTransform");
      preloader.addEventListener("endEvent", () => {
        const fs = document.querySelector("#first-screen");
        if (fs) {
          new firstScreen(true).init();
          this.isPreloaderHidden = true;
          document.querySelector(".preloader").classList.add("isHidden");
          return;
        }
        this.isPreloaderHidden = true;
        document.querySelector(".preloader").classList.add("isHidden");
      });
    }, 0);
  }
};

// Header
const header = class Header {
  constructor() {
    this.countedWidth = 0;
    this.self = this;
    this.isOpened = false;
    this.isPhonesOpened = false;
  }
  openMobileHeader() {
    this.isOpened = !this.isOpened;
    this.isPhonesOpened = false;
    document.querySelector("html").classList.toggle("overflowed");
  }
  openPhonesModal() {
    console.log("clicked");
    this.isPhonesOpened = !this.isPhonesOpened;
    this.isOpened = false;
  }
  closePhonesModal() {
    this.isPhonesOpened = false;
    document.querySelector("html").classList.remove("overflowed");
  }
  init() {
    resizeScreen(resizeData);
    gsap.to(".header-logo", {
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "top+=400 top",
        scrub: 1,
        // markers: true,
      },
      width: () => {
        if (document.querySelector(".en-version")) {
          return (120 * 100) / window.innerWidth + "vw";
        } else {
          return (200 * 100) / window.innerWidth + "vw";
        }
      },
    });
    gsap.to(".header-in", {
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "top+=400 top",
        scrub: 0,
        // markers: true,
      },
      paddingTop: () => {
        //return 10 * 100 / window.innerWidth + 'vw'
        return (1 * 100) / window.innerWidth + "vw";
      },
      paddingBottom: () => {
        //return 10 * 100 / window.innerWidth + 'vw'
        return (1 * 100) / window.innerWidth + "vw";
      },
    });
    this.setHeaderWavePositionOnLoad();
    this.onInit();
    const headerOpener = document.querySelector(".header-menu-opener");
    const headerMenuList = document.querySelectorAll(".header-menu ul li");
    const headerMobileMenuList = document.querySelectorAll(
      ".header-mobile-menu ul li"
    );
    let isOpened = false;

    [...headerMenuList, ...headerMobileMenuList].forEach((element) => {
      element.addEventListener("mouseenter", this.setHeaderWavePosition);
      element.addEventListener("mouseleave", this.setHeaderWavePositionOnLoad);
    });
    headerOpener &&
      headerOpener.addEventListener("click", () => {
        isOpened = !isOpened;
        [
          document.querySelector(".header"),
          document.querySelector(".header-menu-opener"),
          document.querySelector(".header-mobile-menu"),
        ].forEach((element) => element.classList.toggle("isOpened"));
        document.querySelector("html").classList.toggle("overflowed");
      });
  }
  onInit() {
    if (!document.querySelector(".header-mobile-menu")) return;
  }

  setHeaderWavePositionOnLoad() {
    if (document.querySelector(".header-menu li.isActive")) {
      let active_menu = document.querySelector(".header-menu li.isActive");
      gsap.to(".header-menu-border", {
        left: active_menu.offsetLeft,
        width: active_menu.offsetWidth,
        right: "auto",
      });
      gsap.to(".header-menu-wave", {
        left: active_menu.offsetLeft + active_menu.offsetWidth / 2,
      });
    }
  }
  setHeaderWavePosition() {
    gsap.to(".header-menu-border", {
      left: event.target.offsetLeft,
      width: event.target.offsetWidth,
      right: "auto",
    });
  }
};

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

// IndustrySpecialization
const industry = class IndustrySpecialization {
  constructor() {
    this.buttons = document.querySelectorAll(
      ".industry-specialization-tab__navigation .btn"
    );
    this.industryColumns = document.querySelectorAll(
      ".industry-specialization__column"
    );
    this.tabItemsContent = this.industryColumns[0].querySelectorAll(
      ".industry-specialization-tab__content .industry-specialization-tab__content-item"
    );
    this.tabItemsColumn = this.industryColumns[1].querySelectorAll(
      ".industry-specialization-tab__content .industry-specialization-tab__content-item"
    );
  }

  makeHidden(elements, role) {
    if (role === "element") {
      elements.forEach((el) => {
        el.style.display = "none";
      });
    } else if (role === "buttons") {
      elements.forEach((el) => {
        el.classList.remove("active");
      });
    }
  }
  specializtionClick() {
    this.makeHidden(this.tabItemsContent, "element");
    this.makeHidden(this.tabItemsColumn, "element");
    this.tabItemsContent[0].style.display = "block";
    this.tabItemsColumn[0].style.display = "block";
    this.buttons[0].classList.add("active");
    this.buttons.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        this.makeHidden(this.tabItemsContent, "element");
        this.makeHidden(this.tabItemsColumn, "element");
        this.makeHidden(this.buttons, "buttons");
        this.tabItemsContent[idx].style.display = "block";
        this.tabItemsColumn[idx].style.display = "block";
        this.buttons[idx].classList.add("active");
      });
    });
  }

  dynamicStyle() {
    const isMobile = window.innerWidth <= 1023;
    if (isMobile) {
      const inner = document.createElement("p");
      inner.style.width = "250px";
      inner.style.height = "100%";

      const outer = document.createElement("div");
      outer.style.position = "absolute";
      outer.style.top = "0px";
      outer.style.left = "0px";
      outer.style.visibility = "hidden";
      outer.style.width = "200px";
      outer.style.height = "150px";
      outer.style.overflow = "hidden";
      outer.appendChild(inner);

      document.body.appendChild(outer);
      const w1 = inner.offsetWidth;
      outer.style.overflow = "scroll";
      let w2 = inner.offsetWidth;
      if (w1 == w2) w2 = outer.clientWidth;

      document.body.removeChild(outer);

      return w1 - w2;
    }
    return 0;
  }

  addDynamicStyle() {
    const gridRowHidden = document.querySelectorAll(
      ".industry-specialization-tab__grid-row-hidden"
    );
    const gridRowScroll = document.querySelectorAll(
      ".industry-specialization-tab__grid-row-scroll"
    );
    gridRowHidden.forEach((el, idx) => {
      gridRowHidden[idx].style.marginBottom = `${-2 * this.dynamicStyle()}px`;
      gridRowScroll[idx].style.paddingBottom = `${2 * this.dynamicStyle()}px`;
    });
  }

  init() {
    this.specializtionClick();
    this.addDynamicStyle();
    this.dynamicStyle();
    window.addEventListener("resize", () => {
      this.addDynamicStyle();
      this.dynamicStyle();
    });
  }
};

// Main Web
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

// mainAbout
const mainAbout = class MainAbout {
  constructor() {
    this.player;
  }
  openVideoModal() {
    document.querySelector(".video-modal").classList.add("isOpened");
    this.player.play();
  }
  closeVideoModal() {
    document.querySelector(".video-modal").classList.remove("isOpened");
    this.player.pause();
  }
  initVideoOpening() {
    if (!document.querySelector(".main-about-play")) return;
    document.querySelector(".main-about-play").addEventListener("click", () => {
      this.openVideoModal();
    });
    document.querySelector(".video-modal").addEventListener("click", () => {
      this.closeVideoModal();
    });
    this.player = document.getElementById("player_modal");
    videojs("player_modal", {
      fluid: true,
      controls: false,
      // autoplay: true,
      aspectRatio: "16:7",
      // muted: true,
      poster: "img/video_preview.png",
      sources: [
        {
          src: "videos/pv.mp4",
          type: "video/mp4",
        },
      ],
    });
  }
  onCircleAnimationEnd() {}
  animateCircle() {
    if (!document.querySelector(".main-about")) return;
    let self = this;
    if (window.innerWidth > 1023) {
      gsap.to(".main-about__circle", {
        scrollTrigger: {
          trigger: ".trigger-wrapper-about",
          start: "top-=500",
          end: "top",
          scrub: 1,
          // markers: true
        },
        width: () => {
          return (7200 * 100) / window.innerWidth + "vw";
        },
        height: () => {
          return (4900 * 100) / window.innerWidth + "vw";
        },
        onComplete() {
          self.onCircleAnimationEnd();
        },
      });
      gsap.to(".main-about__title", {
        scrollTrigger: {
          trigger: ".trigger-wrapper-about",
          start: "top-=500",
          end: "top",
          scrub: 1,
        },
        color: "#121423",
      });
      gsap.to(".main-about__description", {
        scrollTrigger: {
          trigger: ".trigger-wrapper-about",
          start: "top-=500",
          end: "top",
          scrub: 1,
        },
        color: "#121423",
      });

      gsap.to(".main-about__statistics-item--1", {
        scrollTrigger: {
          trigger: ".trigger-wrapper-about",
          start: "top-=100",
          end: "top+=100",
          scrub: 1,
        },
        opacity: 1,
      });

      gsap.to(".main-about__statistics-item--2", {
        scrollTrigger: {
          trigger: ".trigger-wrapper-about",
          start: "top",
          end: "top+=200",
          scrub: 1,
        },
        opacity: 1,
      });

      gsap.to(".main-about__statistics-item--3", {
        scrollTrigger: {
          trigger: ".trigger-wrapper-about",
          start: "top+=100",
          end: "top+=300",
          scrub: 1,
        },
        opacity: 1,
      });

      gsap.to(".main-about__statistics-item--4", {
        scrollTrigger: {
          trigger: ".trigger-wrapper-about",
          start: "top+=200",
          end: "top+=400",
          scrub: 1,
        },
        opacity: 1,
      });
    }
  }
  init() {
    this.animateCircle();
  }
};

// Main Question
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
    resizeScreen([
      {
        element: ".main-question",
        className: "mobile",
        size: 1023,
        isLess: true, //<=
      },
      {
        element: ".main-resume",
        className: "mobile",
        size: 1023,
        isLess: true, //<=
      },
    ]);
    if (!document.querySelector(this.inputSelector)) return;
    let fileInput = document.querySelector(this.inputSelector);
    fileInput.addEventListener("change", () => this.onInputChange(event));
    this.isSafary = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const mainTentacles = document.querySelectorAll(".main-question-tentacle");
    if (!this.isSafary) {
      mainTentacles[0].style.display = "block";
      mainTentacles[1].style.display = "none";
    } else {
      mainTentacles[1].style.display = "block";
      mainTentacles[0].style.display = "none";
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

// mainCarousel
const mainCarousel = class MainCarousel {
  constructor() {}
  onCarouselChange() {}
  init() {
    resizeScreen([
      {
        element: ".main-carousel",
        className: "mobile",
        size: 1023,
        isLess: true, //<=
      },
    ]);
    // main-carousel
    var self = this;
    var carousel = document.querySelector(".main-carousel-carousel");
    if (!carousel) return;
    var cells = carousel.querySelectorAll(".main-carousel-cell");
    var cellCount; // cellCount set from cells-range input value
    var selectedIndex = 0;
    var cellWidth = carousel.offsetWidth;
    var cellHeight = carousel.offsetHeight;
    var isHorizontal = true;
    var rotateFn = isHorizontal ? "rotateY" : "rotateX";
    var radius, theta;

    var maxTitlesHeight = Math.max.apply(
      null,
      $(".main-carousel__text-item_titles .title")
        .map(function () {
          return $(this).height();
        })
        .get()
    );
    var maxTextsHeight = Math.max.apply(
      null,
      $(".main-carousel__text-item_texts .text")
        .map(function () {
          return $(this).height();
        })
        .get()
    );

    function rotateCarousel() {
      self.onCarouselChange();
      var angle = theta * selectedIndex * -1;
      $(`.main-carousel__text-item_gifts .badge`).css({
        transform: `translateY(-50%) translateX(50%) rotate(${angle}deg)`,
      });
      $(`.main-carousel__text-item_gifts .badge`).text(
        Math.round((360 / cellCount) * (selectedIndex % cellCount))
      );
      $(`.main-carousel__grades .from`).text(
        Math.round((360 / cellCount) * (selectedIndex % cellCount))
      );
      if (Math.round((360 / cellCount) * (selectedIndex % cellCount)) < 0) {
        $(`.main-carousel__grades .from`).text(
          Math.round((360 / cellCount) * (selectedIndex % cellCount)) * -1
        );
      }
      $(`.main-carousel__text-item_gifts .left__in`).css({
        transform: `rotate(${angle * -1}deg)`,
      });
      carousel.style.transform =
        "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
      var cells = carousel.querySelectorAll(".main-carousel-cell");
      document
        .querySelectorAll(`.main-carousel__text-item_titles .title`)
        .forEach((item) => {
          item.classList.remove("isActive");
        });
      if (
        document.querySelector(
          `.main-carousel__text-item_titles .title[data-title-id="${
            (selectedIndex % cellCount) + 1
          }"]`
        )
      ) {
        document
          .querySelector(
            `.main-carousel__text-item_titles .title[data-title-id="${
              (selectedIndex % cellCount) + 1
            }"]`
          )
          .classList.add("isActive");
      }
      gsap.to(document.querySelectorAll(`.main-carousel__text-item_titles`), {
        height: maxTitlesHeight,
      });
      document
        .querySelectorAll(`.main-carousel__text-item_texts .text`)
        .forEach((item) => {
          item.classList.remove("isActive");
        });
      if (
        document.querySelector(
          `.main-carousel__text-item_texts .text[data-text-id="${
            (selectedIndex % cellCount) + 1
          }"]`
        )
      ) {
        document
          .querySelector(
            `.main-carousel__text-item_texts .text[data-text-id="${
              (selectedIndex % cellCount) + 1
            }"]`
          )
          .classList.add("isActive");
      }
      gsap.to(document.querySelectorAll(`.main-carousel__text-item_texts`), {
        height: maxTextsHeight,
      });
      // $(`.main-carousel__text-item_gifts .gift`).each(function() {
      //     $(this).hide('fast');
      // })
      // $(`.main-carousel__text-item_gifts .gift[data-gift-id="${(selectedIndex+1) % +cellCount}"]`).show('fast');
      // document.querySelector(`.main-carousel__text-item_titles .title[data-title-id="${selectedIndex}"]`).classList.add('isActive');
    }

    var prevButton = document.querySelector(".previous-button");
    prevButton.addEventListener("click", function () {
      selectedIndex--;
      rotateCarousel();
      clearInterval(interval);
    });

    var nextButton = document.querySelector(".next-button");
    nextButton.addEventListener("click", function () {
      selectedIndex++;
      rotateCarousel();
      clearInterval(interval);
    });

    var cellsRange = document.querySelector(".cells-range");
    cellsRange.addEventListener("change", changeCarousel);
    cellsRange.addEventListener("input", changeCarousel);

    function changeCarousel() {
      cellCount = cellsRange.value;
      theta = 360 / cellCount;
      var cellSize = isHorizontal ? cellWidth : cellHeight;
      radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
      for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        if (i < cellCount) {
          // visible cell
          cell.style.opacity = 1;
          var cellAngle = theta * i;
          cell.style.transform =
            rotateFn + "(" + cellAngle + "deg) translateZ(" + radius + "px)";
        } else {
          // hidden cell
          cell.style.opacity = 0;
          cell.style.transform = "none";
        }
      }

      rotateCarousel();
    }

    var orientationRadios = document.querySelectorAll(
      'input[name="orientation"]'
    );
    (function () {
      for (var i = 0; i < orientationRadios.length; i++) {
        var radio = orientationRadios[i];
        radio.addEventListener("change", onOrientationChange);
      }
    })();

    function onOrientationChange() {
      var checkedRadio = document.querySelector(
        'input[name="orientation"]:checked'
      );
      isHorizontal = checkedRadio.value == "horizontal";
      rotateFn = isHorizontal ? "rotateY" : "rotateX";
      changeCarousel();
    }
    function chooseElem(index) {
      if (selectedIndex == index) return;
      selectedIndex = index;
      rotateCarousel();
    }

    document.addEventListener("click", function (event) {
      if (event.target.dataset.cellIndex) {
        chooseElem(event.target.dataset.cellIndex - 1);
        clearInterval(interval);
      }
    });
    var interval = setInterval(function () {
      selectedIndex++;
      rotateCarousel();
    }, 5000);

    // set initials
    onOrientationChange();
    let starCoord = 0;

    if (window.innerWidth <= 1023) {
      interact(".main-carousel")
        .draggable({
          origin: "self",
          inertia: true,
          listeners: {
            move(event) {},
          },
        })
        .on("dragstart", (event) => {
          starCoord = event.clientX;
        })
        .on("dragend", (event) => {
          if (starCoord > event.clientX) {
            selectedIndex++;
            rotateCarousel();
            clearInterval(interval);
          } else {
            selectedIndex--;
            rotateCarousel();
            clearInterval(interval);
          }
        });
    }
  }
};

// newsAndTrends
const newsAndTrends = class NewsAndTrends {
  constructor({ itemsSelector }) {
    this.btns = document.querySelectorAll(".news-and-trends-button[data-news]");
    this.slider;
    this.sliderItems;
    this.html = $(".news-and-trends-right-slider .glide").clone();
  }
  onClickBtn() {
    const self = this;
    this.btns.forEach((item) => {
      item.addEventListener("click", function (event) {
        self.btns.forEach((btn) => {
          btn.classList.remove("active");
        });
        this.classList.add("active");
        const news = this.dataset?.news || "all";
        self.onFilter(news);
      });
    });
  }
  initSlider() {
    this.sliderItems = document.querySelectorAll(".news-and-trends-item");
    // this.html = $('.news-and-trends-right-slider').clone();
    this.slider = new Glide(".news-and-trends-right-slider", {
      type: "carousel",
      startAt: 0,
      perView: 3,
      breakpoints: {
        800: {
          perView: 2,
        },
        600: {
          perView: 1,
        },
      },
    }).mount();
  }
  filterSlider({ type }) {}
  onInit() {}
  init() {
    if (!document.querySelector(".news-and-trends")) return;
    this.onClickBtn();
    resizeScreen([
      {
        element: "#news-and-trends",
        className: "mobile",
        size: 1023,
        isLess: true, //<=
      },
      {
        element: ".main-resume",
        className: "mobile",
        size: 1023,
        isLess: true, //<=
      },
    ]);
    this.initSlider();
    this.onInit();

    document
      .querySelectorAll(".news-and-trends .news-and-trends-button")
      .forEach((item) => {
        item.addEventListener("click", (event) => {
          if (this.slider) {
            this.slider.destroy();
          }
          $(".news-and-trends-right-slider .glide").replaceWith(
            $(this.html).clone()
          );
          if (item.dataset.news != "all") {
            event.preventDefault();
            $(
              `.news-and-trends-right-slider .news-and-trends-item:not([data-id-news="${item.dataset.news}"])`
            ).remove();
          }
          this.initSlider();
        });
      });
  }
};

// Main Cases
const mainCases = class MainCases {
  constructor({ itemsClass }) {
    this.itemsClass = itemsClass;
    this.slider = new Glide(".main-cases-slider", {
      type: "carousel",
      startAt: 1,
      perView: 1,
      gap: 0,
    });
  }
  initMobileSlider() {
    if (!document.querySelector(".main-cases-slider")) return;
    this.slider.mount();
  }
  destroyMobileSlider() {
    if (!document.querySelector(".main-cases-slider")) return;
    this.slider.destroy();
  }
  onInit() {}
  onAnimationStart() {}
  onAnimationEnd() {}

  init() {
    if (!document.querySelector(".main-cases")) return;
    let self = this;
    $(function () {
      if (window.innerWidth <= 1023) {
        if (document.querySelector(".js_sl")) {
          $(".js_sl").slick({
            dots: false,
            arrows: true,
            infinite: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
          });
        }
      }
      if (
        (window.innerWidth <= 1366 && window.innerWidth > 1023) ||
        window.innerWidth > 1440
      ) {
        $(".marquee-js").marquee({
          //duration in milliseconds of the marquee
          duration: 10000,
          //gap in pixels between the tickers
          gap: 100,
          //time in milliseconds before the marquee will start animating
          delayBeforeStart: 0,
          //'left' or 'right'
          direction: "left",
          //true or false - should the marquee be duplicated to show an effect of continues flow
          duplicated: true,
        });
      }
    });
    $(function () {
      if (
        (window.innerWidth <= 1366 && window.innerWidth > 1023) ||
        window.innerWidth > 1440
      ) {
        window.addEventListener("scroll", function (event) {
          var top = this.pageYOffset;

          var layers = $(".paralax_layer");
          var speed, yPos;
          layers.each(function () {
            speed = $(this).attr("data-speed");
            var yPos = -((top * speed) / 100);
            $(this).attr(
              "style",
              "transform: translate3d(0px, " + yPos + "px, 0px)"
            );
          });
        });
      }
    });
    this.onInit();
  }
};

// casesUpdated
const casesUpdated = class CasesUpdated {
  constructor() {}
  bioline() {
    if (!document.querySelector(".cases__item.bioline")) return;
    document.querySelectorAll(".cases__item.bioline").forEach((item) => {
      item.addEventListener("mousemove", (event) => {
        gsap.to(item.querySelector(".bioline__image--hidden"), {
          "clip-path": `polygon(0% 0%, ${event.offsetX}px 0%, ${event.offsetX}px 100%, 0% 100%)`,
        });
      });
      item.addEventListener("mouseleave", (event) => {
        gsap.to(item.querySelector(".bioline__image--hidden"), {
          "clip-path": `polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`,
        });
      });
    });
  }
  medex() {
    var figure = $(".medex");
    var vid = figure.find("video");

    [].forEach.call(figure, function (item, index) {
      item.addEventListener("mouseover", hoverVideo.bind(item, index), false);
      item.addEventListener("mouseout", hideVideo.bind(item, index), false);
    });

    function hoverVideo(index, e) {
      vid[index].play();
    }

    function hideVideo(index, e) {
      vid[index].pause();
    }
  }
  setParalax() {
    document
      .querySelectorAll(".cases__item[data-is_paralaxed]")
      .forEach((item) => {
        item.addEventListener("mousemove", (event) => {
          item.querySelectorAll("[data-speed]").forEach((elem) => {
            gsap.to(elem, {
              x: event.offsetX / elem.dataset.speed,
              y: event.offsetY / elem.dataset.speed,
            });
          });
        });
      });
  }

  loadModel(url) {
    return new Promise((resolve, reject) => {
      const manager = new THREE.LoadingManager();
      const loader = new THREE.GLTFLoader(manager);
      loader.load(url, function (gltf) {
        resolve(gltf.scene);
      });
    });
  }
  duplicateTitle() {
    $(".cases__item .cases__item-title").each(function () {
      let text = $(this).text();
      if (window.innerWidth > 1023) {
        $(this).html(
          `<div class="cases__item-title--forslide cases__item-title--top">${text}</div><div class="cases__item-title--forslide cases__item-title--bottom">${text}</div>`
        );
      }
    });
  }
  init() {
    if (window.innerWidth <= 1024) return;
    this.bioline();
    this.medex();
    this.setParalax();
    this.duplicateTitle();
    // this.medex();
  }
};

class UploadFormFile {
  constructor() {
    this.uploadFormFiles = document.querySelectorAll(".upload-form-file");
  }

  onInit() {
    this.uploadFormFiles.forEach((uploadFormFile) => {
      const uploadFormFileField = uploadFormFile.querySelector(
        ".upload-form-file__field"
      );
      const uploadFormFileNoFile = uploadFormFile.querySelector(
        ".upload-form-file__no-file"
      );
      const uploadFormFileFile = uploadFormFile.querySelector(
        ".upload-form-file__file"
      );
      const uploadFormFileFileText = uploadFormFileFile.querySelector(
        ".upload-form-file__file-text"
      );

      uploadFormFileFile.style.display = "none";

      uploadFormFileField.addEventListener("change", (event) => {
        if (event.target.files[0]) {
          uploadFormFileNoFile.style.display = "none";
          uploadFormFileFileText.textContent = event.target.files[0].name;
          uploadFormFileFile.style.display = "inline-flex";
        } else {
          uploadFormFileFile.style.display = "none";
          uploadFormFileNoFile.style.display = "inline-flex";
        }
      });
    });
  }
}

new preloader().init();
new header().init();
new industry().init();
new mainWeb().init();
new mainAbout().init();
new mainCarousel().init();
new newsAndTrends({
  itemsSelector: ".news-and-trends-item",
}).init();

new mainCases({
  itemsClass: ".main-cases-item",
}).init();
new casesUpdated().init();
new UploadFormFile().onInit();

new mainQuestionForm({
  inputSelector: '.main-question-form-item [type="file"]',
  textSelector: ".main-question-form-item span",
}).init();
