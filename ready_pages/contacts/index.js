import gsap from "gsap";
import resizeScreen from "../../src/js/resize";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { resizeData } from "../../src/blocks/modules/header/headerData";
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
    resizeScreen([
      {
        element: ".career-first",
        className: "mobile",
        size: 1023,
        isLess: true,
      },
      {
        element: ".contacts-info",
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
    this.isSafari();
    if (!document.querySelector(this.inputSelector)) return;
    let fileInput = document.querySelector(this.inputSelector);
    console.log(this.inputSelector);
    fileInput.addEventListener("change", () => this.onInputChange(event));
  }
};

new mainQuestionForm({
  inputSelector:
    '.main-question.fileLoaderFirst .main-question-form-item [type="file"]',
  textSelector: "main-question.fileLoaderFirst .main-question-form-item span",
}).init();

class Map {
  constructor() {
    this.mapId = "map";
  }

  onInit() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGVubnk3NDMiLCJhIjoiY2w2ZW9pcjk3MjhrcDNqcnozZmVweThkYiJ9.WY4UqSfHsmv4noUwv5pePQ";
    const map = new mapboxgl.Map({
      container: this.mapId, // container ID
      style: "mapbox://styles/denny743/clacm072x001m14o3xsdw1pwl", // style URL
      center: [37.601402, 55.782552], // starting position [lng, lat]
      zoom: 17, // starting zoom
    });
  }
}

const map = new Map();
map.onInit();

new preloader().init();
new header().init();
new cookiesForm().init();
