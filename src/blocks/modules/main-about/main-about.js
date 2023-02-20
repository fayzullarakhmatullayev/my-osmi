import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import videojs from "video.js";
console.log(gsap);
gsap.registerPlugin(ScrollTrigger);

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

export default mainAbout;
