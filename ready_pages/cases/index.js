import gsap from "gsap";
import resizeScreen from "./resize";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { resizeData } from "../../src/blocks/modules/header/headerData";
import $ from "jquery";
import "slick-carousel";
import "jquery.marquee";
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
        element: ".footer",
        className: "mobile",
        size: 1023,
        isLess: true,
      },
      {
        element: ".cookie-form",
        className: "mobile",
        size: 1023,
        isLess: true,
      },
    ]);
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

new mainCases({
  itemsClass: ".main-cases-item",
}).init();
new casesUpdated().init();

new preloader().init();
new header().init();
new cookiesForm().init();
new careerFirst().init();
