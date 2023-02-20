import gsap from "gsap";
import resizeScreen from "../../../js/resize";
import { resizeData } from "./headerData";
import { ScrollTrigger } from "gsap/ScrollTrigger";
console.log(gsap);
gsap.registerPlugin(ScrollTrigger);

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

export default header;
