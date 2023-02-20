import gsap from "gsap";
import resizeScreen from "../../src/js/resize";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Accordion from "accordion-js";

gsap.registerPlugin(ScrollTrigger);

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

class Map {
  constructor() {
      this.mapId = 'map';
  }

  onInit() {
    resizeScreen([{
      element: ".contacts-info",
      className: 'mobile',
      size: 1023,
      isLess: true
    }])
      mapboxgl.accessToken = 'pk.eyJ1IjoiZGVubnk3NDMiLCJhIjoiY2w2ZW9pcjk3MjhrcDNqcnozZmVweThkYiJ9.WY4UqSfHsmv4noUwv5pePQ';
      const map = new mapboxgl.Map({
          container: this.mapId, // container ID
          style: 'mapbox://styles/denny743/clacm072x001m14o3xsdw1pwl', // style URL
          center: [37.601402, 55.782552], // starting position [lng, lat]
          zoom: 17, // starting zoom
      });
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
}

new Map().onInit()

new mainQuestionForm({
  inputSelector:
    '.main-question.fileLoaderFirst .main-question-form-item [type="file"]',
  textSelector: "main-question.fileLoaderFirst .main-question-form-item span",
}).init();

new vacanciesTabs().init();

