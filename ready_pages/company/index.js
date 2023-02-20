import gsap from "gsap";
import resizeScreen from "./resize";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { resizeData } from "../../src/blocks/modules/header/headerData";
import videojs from "video.js";
import Glide from "@glidejs/glide";
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

const cookiesForm = class cookiesForm {
  constructor() {
    this.isClosedOnce = false;
    this.cookieForm = document.querySelector(".cookie-form");
  }
  checkIfFormClosedOnce() {
    if (localStorage.getItem("cookiesFormOnceClosed") == "true") {
      this.isClosedOnce = true;
    }
  }
  closeForm() {
    localStorage.setItem("cookiesFormOnceClosed", true);
    this.checkIfFormClosedOnce();
    this.cookieForm.style.display = "none";
  }
  init() {
    if (!this.cookieForm) return;
    this.checkIfFormClosedOnce();

    document
      .querySelector(".cookie-form__button")
      .addEventListener("click", () => {
        this.closeForm();
      });
  }
};

const companyAbout = class CompanyAbout {
  constructor({ selector }) {
    this.selector = selector;
  }
  init() {
    if (!document.querySelector(".company-about__wrap")) return;
    document
      .querySelector(".company-about__wrap")
      .addEventListener("mousemove", (e) => {
        document.querySelector(this.selector).style.clipPath = `circle(${
          (200 * 100) / window.innerWidth
        }vw at ${e.pageX}px ${e.pageY}px)`;
      });
    document
      .querySelector(this.selector)
      .addEventListener("mouseleave", (e) => {
        gsap.to(this.selector, 1, {
          clipPath: `circle(${window.innerWidth}px at ${e.pageX}px ${e.pageY}px)`,
        });
      });
  }
};

const companyVideo = class companyVideo {
  constructor() {
    this.player;
  }
  init() {
    if (document.querySelector("#player")) {
      if (!document.getElementById("player")) return;
      setTimeout(() => {
        this.player = document.getElementById("player");
        videojs("player", {
          fluid: true,
          controls: false,
          autoplay: true,
          aspectRatio: "16:9",
          muted: true,
          // poster: '/img/video_preview.png',
          sources: [
            {
              src: "/videos/pl1.mp4",
              type: "video/mp4",
            },
          ],
        });
      }, 300);
    }
  }
};

const careerFirst = class CareerFirst {
  constructor() {
    this.element = document.querySelector(".career-first");
  }
  isSafari() {
    this.isSafary = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const mainTentacles = document.querySelectorAll(".career-first-tentacle");
    mainTentacles.forEach((ten) => {
      const images = ten.querySelectorAll("img");
      if (this.isSafary) {
        images[0].style.display = "block";
        images[1].style.display = "none";
      } else {
        images[1].style.display = "block";
        images[0].style.display = "none";
      }
    });
  }

  init() {
    this.isSafari();
    if (!this.element) return;
    resizeScreen([
      {
        element: ".career-first",
        className: "mobile",
        size: 1023,
        isLess: true,
      },
      {
        element: ".company-principles",
        className: "mobile",
        size: 1023,
        isLess: true,
      },
      {
        element: ".company-team",
        className: "mobile",
        size: 1023,
        isLess: true,
      },
      {
        element: ".company-raiting",
        className: "mobile",
        size: 1023,
        isLess: true,
      },
      {
        element: ".company-partners",
        className: "mobile",
        size: 1023,
        isLess: true,
      },
      {
        element: ".company-reviews",
        className: "mobile",
        size: 1023,
        isLess: true,
      },
      {
        element: ".career-blog",
        className: "mobile",
        size: 1023,
        isLess: true,
      },
      {
        element: ".footer",
        className: "mobile",
        size: 1023,
        isLess: true,
      },
    ]);
  }
};

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

  checkWindowSize() {
    const isMobile = window.innerWidth <= 1023;
    const mainWebs = document.querySelectorAll(".company-ceo");
    mainWebs.forEach((ele) => {
      ele.style.display = "none";
    });
    mainWebs[0].style.display = "block";
    if (isMobile) {
      mainWebs[0].style.display = "none";
      mainWebs[1].style.display = "block";
      mainWebs[1].classList.add("mobile");
    } else {
      mainWebs[1].style.display = "none";
      mainWebs[0].style.display = "block";
      mainWebs[1].classList.remove("mobile");
    }
  }

  init() {
    window.addEventListener("resize", this.checkWindowSize);
    this.checkWindowSize();
    this.animateElement();
    this.onInitSlider();
  }
};

const companyPrinciples = class CompanyPrinciples {
  constructor() {}
  init() {
    if (document.querySelector(".company-principles")) {
      gsap.to(".company-principles-circle", {
        scrollTrigger: {
          trigger: ".company-principles",
          start: "top center",
          end: "bottom bottom",
          scrub: 1,
          // markers: true
        },
        width: () => {
          return (7200 * 100) / window.innerWidth + "vw";
        },
        height: () => {
          return (4900 * 100) / window.innerWidth + "vw";
        },
      });
    }
    var carousel = document.querySelector(".company-principles-carousel");
    if (!carousel) return;
    var cells = carousel.querySelectorAll(".company-principles-cell");
    var cellCount; // cellCount set from cells-range input value
    var selectedIndex = 0;
    var cellWidth = carousel.offsetWidth;
    var cellHeight = carousel.offsetHeight;
    var isHorizontal = true;
    var rotateFn = isHorizontal ? "rotateY" : "rotateX";
    var radius, theta;

    function rotateCarousel() {
      var angle = theta * selectedIndex * -1;
      carousel.style.transform =
        "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
      if (document.querySelector(`.company-principles-text.isActive`)) {
        document
          .querySelector(`.company-principles-text.isActive`)
          .classList.remove("isActive");
      }
      document
        .querySelector(`[data-text-index="${selectedIndex + 1}"]`)
        .classList.add("isActive");
    }

    var prevButton = document.querySelector(".previous-button");
    prevButton.addEventListener("click", function () {
      selectedIndex--;
      rotateCarousel();
    });

    var nextButton = document.querySelector(".next-button");
    nextButton.addEventListener("click", function () {
      selectedIndex++;
      rotateCarousel();
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
      selectedIndex = index;
      rotateCarousel();
      clearInterval(interval);
    }

    document.addEventListener("click", function (event) {
      if (event.target.dataset.cellIndex) {
        chooseElem(event.target.dataset.cellIndex - 1);
      }
      if (event.target.dataset.textIndex) {
        chooseElem(event.target.dataset.textIndex - 1);
      }
    });

    // set initials
    onOrientationChange();

    var interval = setInterval(() => {
      if (
        !document.querySelector(
          `.company-principles-text[data-text-index="${selectedIndex + 2}"]`
        )
      ) {
        selectedIndex = -1;
      }
      chooseElem(++selectedIndex);
    }, 5000);
  }
};

const companyRaiting = class companyRaiting {
  constructor() {
    if (document.querySelector(".company-raiting-slider")) {
      this.slider = new Glide(".company-raiting-slider", {
        startAt: 0,
        perView: 1,
        gap: 0,
      });
    }
    this.campanyRatingItems = document.querySelectorAll(
      ".company-raiting-item"
    );
  }
  scrollTriggers() {
    ScrollTrigger.matchMedia({
      "(min-width: 1024px)": () => {
        if (!document.querySelector(".company-raiting-items")) return;
        let triggersWrap = document.querySelector(".company-raiting-items");
        document
          .querySelector(".company-raiting")
          .addEventListener("mousemove", (event) => {
            triggersWrap.scroll({
              top: 0,
              left: event.clientX,
            });
          });
      },
    });
  }
  changeSlide(item) {
    this.slider.go(`=${item.dataset.itemId}`);
    document.querySelectorAll(".company-raiting-item").forEach((trigger) => {
      trigger.classList.remove("isActive");
    });
    item.classList.add("isActive");
  }
  onSliderInit() {
    document
      .querySelector(
        `.company-raiting-item[data-item-id="${this.slider.index}"]`
      )
      .classList.add("isActive");
    this.slider.on("run.after", (item) => {
      document.querySelectorAll(".company-raiting-item").forEach((trigger) => {
        trigger.classList.remove("isActive");
      });
      document
        .querySelector(
          `.company-raiting-item[data-item-id="${this.slider.index}"]`
        )
        .classList.add("isActive");
    });
  }
  onMouseHandler() {
    if (!this.campanyRatingItems && !this.campanyRatingItems.length) return;
    this.campanyRatingItems.forEach((item, idx) => {
      item.addEventListener("mouseenter", buttonMouseEnter);
      item.addEventListener("mouseleave", buttonMouseLeave);
      item.addEventListener("click", () => this.changeSlide(item));
      if (item && this.slider) {
        this.onSliderInit();
        this.scrollTriggers();
      }
    });
  }
  init() {
    if (this.slider) {
      this.slider.mount();
    }
    this.onMouseHandler();
  }
};

const companyPartners = class companyPartners {
  constructor(sliderClass) {
    this.sliderClass = sliderClass;
  }
  init() {
    if (!document.querySelector(".company-partners-slider")) return;
    new Glide(".company-partners-slider", {
      startAt: 0,
      bound: "Boolean",
      perView: 2,
      gap: 0,
      breakpoints: {
        1023: {
          perView: 1,
        },
      },
    }).mount();
  }
};

const companyReviews = class companyReviews {
  constructor(sliderClass) {
    this.slider = new Glide(".company-reviews__slider", {
      type: "carousel",
      // focusAt: 'center',
      startAt: 1,
      perView: 1.5,
      gap: 100,
      breakpoints: {
        1023: {
          perView: 1,
        },
      },
    });
    this.translate = 0;
    this.index = 0;
    this.elementWidth = 0;
    this.allElementsWidth = 0;
  }
  countElementWidth() {
    this.elementWidth =
      document.querySelector(
        ".company-reviews-item-stage-2:not(glide__slide--active)"
      ).offsetWidth + 100;
  }
  init() {
    if (!document.querySelector(".company-reviews__slider")) return;

    let self = this;
    var FixBoundPeek = function (Glide, Components, Events) {
      return {
        modify(translate) {
          if (
            self.index < self.slider.index &&
            self.slider.index != 0 &&
            self.slider.index != 1
          ) {
            self.translate += self.elementWidth;
          } else if (
            self.index > self.slider.index &&
            self.slider.index != 0 &&
            self.slider.index != 1
          ) {
            self.translate -= self.elementWidth;
          } else if (self.slider.index == 0 || self.slider.index == 1) {
            self.translate = 0;
          }
          if (self.slider.index - self.index > 1) {
            self.allElementsWidth = 0;
            self.translate = 0;
            document
              .querySelectorAll(".company-reviews-item-stage-2")
              .forEach((item) => {
                if (!item.className.includes("glide__slide--active")) {
                  self.allElementsWidth += item.offsetWidth + 100;
                }
              });
            self.translate += self.allElementsWidth - self.elementWidth * 2;
          }
          self.index = self.slider.index;

          return self.translate;
        },
      };
    };
    if (window.innerWidth > 1023) {
      // this.slider.mutate([FixBoundPeek]).mount();
      this.slider.mount();
      this.index = this.slider.index;
      this.countElementWidth();
    } else {
      this.slider.mount();
    }
  }
};

const careerBlog = class careerBlog {
  constructor(sliderClass) {
    this.sliderClass = sliderClass;
  }
  init() {
    if (!document.querySelector(".career-blog-items")) return;
    if (window.innerWidth > 1023) {
      new Glide(".career-blog-items", {
        startAt: 0,
        perView: 3,
        gap: 20,
        type: "carousel",
      }).mount();
    }
  }
};

function animateTitles() {
  if (document.querySelectorAll(".animated-title")) {
    document.querySelectorAll(".animated-title").forEach((item, i) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: `bottom+=${window.innerHeight} bottom`,
          // end: `top-=${window.innerHeight} top-=${window.innerHeight}`,
          // markers: true,
          onUpdate: (item) => {
            if (item.progress > 0.1) {
              gsap.to(item.trigger, 2.5, {
                transform: `translateX(${-item.progress * 200 + 100}%)`,
              });
            } else {
              gsap.to(item.trigger, 2.5, {
                transform: `translateX(120%)`,
              });
            }
          },
        },
        opacity: "1",
        // x: '-100%'
      });
    });
  }
  if (document.querySelectorAll(".animated-title-top")) {
    document.querySelectorAll(".animated-title-top").forEach((item, i) => {
      if (window.innerWidth > 1023) {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top center+=100",
            end: `bottom+=${window.innerHeight} bottom`,
            // end: `top-=${window.innerHeight} top-=${window.innerHeight}`,
            // markers: true,
            onUpdate: (item) => {
              if (item.progress > 0.1) {
                gsap.to(item.trigger, 2.5, {
                  transform: `translateX(${-item.progress * 200 + 100}%)`,
                });
              } else {
                gsap.to(item.trigger, 2.5, {
                  transform: `translateX(120%)`,
                });
              }
            },
          },
          opacity: "1",
          // x: '-100%'
        });
      } else {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top top+=325",
            end: `bottom+=400 top+=325`,
            // end: `top-=${window.innerHeight} top-=${window.innerHeight}`,
            // markers: true,
            onUpdate: (item) => {
              if (item.progress > 0.1) {
                gsap.to(item.trigger, 2.5, {
                  transform: `translateX(${-item.progress * 200 + 100}%)`,
                });
              } else {
                gsap.to(item.trigger, 2.5, {
                  transform: `translateX(120%)`,
                });
              }
            },
          },
          opacity: "1",
          // x: '-100%'
        });
      }
    });
  }
  setTimeout(() => {
    window.dispatchEvent(new Event("resize"));
  }, 500);
}

const buttonMouseEnter = (event) => {
  let x = event.offsetX;
  let y = event.offsetY;
  let circle = document.createElement("div");
  circle.classList.add("button-circle");
  event.target.appendChild(circle);
  event.target.children[1].style.left = x + "px";
  event.target.children[1].style.top = y + "px";
  gsap.to(event.target.children[1], 0.5, {
    width: 800,
    height: 800,
    x: -400,
    y: -400,
  });
};

const buttonMouseLeave = (event) => {
  let x = event.offsetX;
  let y = event.offsetY;

  event.target.children[1].style.left = x + "px";
  event.target.children[1].style.top = y + "px";

  gsap.to(event.target.children[1], 0.3, {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    onComplete: () => {
      event.target.removeChild(event.target.children[1]);
    },
  });
};

new preloader().init();
new header().init();
new cookiesForm().init();
new companyAbout({
  selector: ".company-about:not(.company-about__title)",
}).init();
new companyVideo().init();

new careerFirst().init();
new mainWeb().init();
new companyPrinciples().init();
new companyRaiting().init();
new companyPartners({
  sliderClass: ".glide",
}).init();
new companyReviews().init();
new careerBlog().init();
animateTitles();
