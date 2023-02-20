import gsap from "gsap";
import resizeScreen from "../../src/js/resize";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { resizeData } from "../../src/blocks/modules/header/headerData";
import Accordion from "accordion-js";
// import screenSize from "./screen_size";
// import $ from "jquery";

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

// mainQuestionForm
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
        element: ".career-first",
        className: "mobile",
        size: 1023,
        isLess: true,
      },
    ]);
    if (!document.querySelector(this.inputSelector)) return;
    let fileInput = document.querySelector(this.inputSelector);
    fileInput.addEventListener("change", () => this.onInputChange(event));
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
};

const vacanciesTabs = class vacanciesTabs {
  constructor() {}
  init() {
    if (!document.querySelector(".vacancies-tabs-items")) return;

    resizeScreen([
      {
        element: ".vacancies-tabs",
        className: "mobile",
        size: 1023,
        isLess: true,
      },
      {
        element: ".main-resume",
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
    new Accordion(".vacancies-tabs-items", {
      duration: 400,
      showMultiple: true,
      elementClass: "vacancies-tabs-item",
      triggerClass: "vacancies-tabs-item-title",
      panelClass: "vacancies-tabs-item-body",
      // openOnInit: [0],
      beforeOpen: (currentElement) => {
        gsap.to(currentElement.querySelector(".vacancies-tabs-item-body"), 1, {
          heigth: currentElement.querySelector(".vacancies-tabs-item-body")
            .offsetHeight,
        });
      },
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

new preloader().init();
new header().init();

new mainQuestionForm({
  inputSelector:
    '.main-question.fileLoaderFirst .main-question-form-item [type="file"]',
  textSelector: "main-question.fileLoaderFirst .main-question-form-item span",
}).init();

new vacanciesTabs().init();

new cookiesForm().init();
