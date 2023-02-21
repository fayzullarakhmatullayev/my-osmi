import gsap from 'gsap'
import resizeScreen from "./resize";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Glide from '@glidejs/glide'
gsap.registerPlugin(ScrollTrigger);

function checkSafari() {
  resizeScreen([
    {element: '.career-first', className:'mobile', size: 1023, isLess: true },
    {element: '.career-blocks', className:'mobile', size: 1023, isLess: true },
    {element: '.career-qualities', className:'mobile', size: 1023, isLess: true },
    {element: '.career-blog', className:'mobile', size: 1023, isLess: true },
    {element: '.main-resume', className:'mobile', size: 1023, isLess: true },
  ])
  const isSafary = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const mainTentacles = document.querySelectorAll(".career-first-tentacle");
  const infos = document.querySelectorAll('.career-first-info');
  infos[0].classList.add = 'mobile'
  mainTentacles.forEach((ten) => {
    const images = ten.querySelectorAll("img");
    if (isSafary) {
      images[0].style.display = "block";
      images[1].style.display = "none";
    } else {
      images[1].style.display = "block";
      images[0].style.display = "none";
    }
  });
}

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
const hhBlogs = document.querySelectorAll('.hh_block');
const blogBtn = document.querySelector('.career-blog-button');
blogBtn && blogBtn.classList.add('mobile')
hhBlogs[0].classList.add('hh_mobile')
class careerBlocks {
  constructor() {}
  animateItems() {
      if (!document.querySelector('.career-blocks-item')) return;
      ScrollTrigger.matchMedia({
          "(min-width: 1024px)": () => {
              gsap.utils.toArray(".career-blocks-item").forEach((item, i) => {
                  ScrollTrigger.create({
                      trigger: item,
                      start: "top top",
                      pin: true,
                      pinSpacing: false,
                  });
              });
          }
      });
  }
  init() {
      this.animateItems();
  }
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

document.querySelector('.more_cases').addEventListener('mouseenter', buttonMouseEnter)
document.querySelector('.more_cases').addEventListener('mouseleave', buttonMouseLeave)

const textarea = document.querySelector('.main-question-inputs textarea');
if(textarea) {
  textarea.value = ''
}
class careerBlog {
    constructor(sliderClass) {
        this.sliderClass = sliderClass;
        this.btns = document.querySelectorAll(".news-and-trends-button");
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
    init() {
        if (!document.querySelector('.career-blog-items')) return;
        if (window.innerWidth > 1023) {
          this.onClickBtn();
            new Glide('.career-blog-items', {
                startAt: 0,
                perView: 3,
                gap: 20,
                type: 'carousel',
            }).mount();
        }
    }
}


checkSafari()
animateTitles()
new careerBlocks().init()
new careerBlog().init()