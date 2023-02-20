/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"company": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/company.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/company.js":
/*!***************************!*\
  !*** ./src/js/company.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resize */ "./src/js/resize.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/dist/video.es.js");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"]);
var companyAbout = /*#__PURE__*/function () {
  function CompanyAbout(_ref) {
    var selector = _ref.selector;
    _classCallCheck(this, CompanyAbout);
    this.selector = selector;
  }
  _createClass(CompanyAbout, [{
    key: "init",
    value: function init() {
      var _this = this;
      if (!document.querySelector(".company-about__wrap")) return;
      document.querySelector(".company-about__wrap").addEventListener("mousemove", function (e) {
        document.querySelector(_this.selector).style.clipPath = "circle(".concat(200 * 100 / window.innerWidth, "vw at ").concat(e.pageX, "px ").concat(e.pageY, "px)");
      });
      document.querySelector(this.selector).addEventListener("mouseleave", function (e) {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(_this.selector, 1, {
          clipPath: "circle(".concat(window.innerWidth, "px at ").concat(e.pageX, "px ").concat(e.pageY, "px)")
        });
      });
    }
  }]);
  return CompanyAbout;
}();
var companyVideo = /*#__PURE__*/function () {
  function companyVideo() {
    _classCallCheck(this, companyVideo);
    this.player;
  }
  _createClass(companyVideo, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      if (document.querySelector("#player")) {
        if (!document.getElementById("player")) return;
        setTimeout(function () {
          _this2.player = document.getElementById("player");
          Object(video_js__WEBPACK_IMPORTED_MODULE_3__["default"])("player", {
            fluid: true,
            controls: false,
            autoplay: true,
            aspectRatio: "16:9",
            muted: true,
            // poster: '/img/video_preview.png',
            sources: [{
              src: "/videos/pl1.mp4",
              type: "video/mp4"
            }]
          });
        }, 300);
      }
    }
  }]);
  return companyVideo;
}();
var careerFirst = /*#__PURE__*/function () {
  function CareerFirst() {
    _classCallCheck(this, CareerFirst);
    this.element = document.querySelector(".career-first");
  }
  _createClass(CareerFirst, [{
    key: "isSafari",
    value: function isSafari() {
      var _this3 = this;
      this.isSafary = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      var mainTentacles = document.querySelectorAll(".career-first-tentacle");
      mainTentacles.forEach(function (ten) {
        var images = ten.querySelectorAll("img");
        if (_this3.isSafary) {
          images[0].style.display = "block";
          images[1].style.display = "none";
        } else {
          images[1].style.display = "block";
          images[0].style.display = "none";
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.isSafari();
      if (!this.element) return;
      Object(_resize__WEBPACK_IMPORTED_MODULE_1__["default"])([{
        element: ".career-first",
        className: "mobile",
        size: 1023,
        isLess: true
      }, {
        element: ".company-principles",
        className: "mobile",
        size: 1023,
        isLess: true
      }, {
        element: ".company-team",
        className: "mobile",
        size: 1023,
        isLess: true
      }, {
        element: ".company-raiting",
        className: "mobile",
        size: 1023,
        isLess: true
      }, {
        element: ".company-partners",
        className: "mobile",
        size: 1023,
        isLess: true
      }, {
        element: ".company-reviews",
        className: "mobile",
        size: 1023,
        isLess: true
      }, {
        element: ".career-blog",
        className: "mobile",
        size: 1023,
        isLess: true
      }, {
        element: ".footer",
        className: "mobile",
        size: 1023,
        isLess: true
      }]);
    }
  }]);
  return CareerFirst;
}();
var mainWeb = /*#__PURE__*/function () {
  function Mainweb() {
    _classCallCheck(this, Mainweb);
    this.slider;
    this.element = ".web-tentacle";
    this.trigger = ".first-frame";
    this.isSafary = null;
    this.triggerSlider = true;
    if (document.querySelector(".web-slider")) {
      this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__["default"](".web-slider", {
        type: "carousel",
        startAt: 1,
        perView: 1,
        gap: 0
      });
    }
  }
  _createClass(Mainweb, [{
    key: "onInitSlider",
    value: function onInitSlider() {
      if (!document.querySelector(".web-slider")) return;
      this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__["default"](".web-slider", {
        type: "carousel",
        startAt: 1,
        perView: 1,
        gap: 0
      });
      if (window.innerWidth < 1023) {
        this.slider.mount();
      }
    }

    /**
     * Анимация колонок
     */
  }, {
    key: "animateElement",
    value: function animateElement() {
      if (!document.querySelector(".web-right-image")) return;
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray(".web-right-image").forEach(function (item, i) {
        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"].create({
          trigger: item,
          start: "top center",
          end: "bottom bottom",
          onUpdate: function onUpdate(item) {
            if (item.progress > 0) {
              if (document.querySelector(".web-subtitles")) {
                document.querySelectorAll(".web-subtitle").forEach(function (item) {
                  item.classList.remove("isActive");
                });
                document.querySelector(".web-subtitle[data-item-id=\"".concat(item.trigger.dataset.itemId, "\"]")).classList.add("isActive");
              }
              if (document.querySelector(".web-titles")) {
                document.querySelectorAll(".web-title").forEach(function (item) {
                  item.classList.remove("isActive");
                });
                document.querySelector(".web-title[data-item-id=\"".concat(item.trigger.dataset.itemId, "\"]")).classList.add("isActive");
              }
              if (document.querySelector(".web-texts")) {
                document.querySelectorAll(".web-text").forEach(function (item) {
                  item.classList.remove("isActive");
                });
                document.querySelector(".web-text[data-item-id=\"".concat(item.trigger.dataset.itemId, "\"]")).classList.add("isActive");
              }
              if (document.querySelector(".web-buttons")) {
                document.querySelectorAll(".web-button").forEach(function (item) {
                  item.classList.remove("isActive");
                });
                document.querySelector(".web-button[data-item-id=\"".concat(item.trigger.dataset.itemId, "\"]")).classList.add("isActive");
              }
            }
          }
        });
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(".web-data-in", {
        scrollTrigger: {
          trigger: ".web-data",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: true,
          pinSpacing: false
          // markers: true
        },

        x: 0
      });
    }
  }, {
    key: "checkWindowSize",
    value: function checkWindowSize() {
      var isMobile = window.innerWidth <= 1023;
      var mainWebs = document.querySelectorAll(".company-ceo");
      mainWebs.forEach(function (ele) {
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
  }, {
    key: "init",
    value: function init() {
      window.addEventListener("resize", this.checkWindowSize);
      this.checkWindowSize();
      this.animateElement();
      this.onInitSlider();
    }
  }]);
  return Mainweb;
}();
var companyPrinciples = /*#__PURE__*/function () {
  function CompanyPrinciples() {
    _classCallCheck(this, CompanyPrinciples);
  }
  _createClass(CompanyPrinciples, [{
    key: "init",
    value: function init() {
      if (document.querySelector(".company-principles")) {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(".company-principles-circle", {
          scrollTrigger: {
            trigger: ".company-principles",
            start: "top center",
            end: "bottom bottom",
            scrub: 1
            // markers: true
          },

          width: function width() {
            return 7200 * 100 / window.innerWidth + "vw";
          },
          height: function height() {
            return 4900 * 100 / window.innerWidth + "vw";
          }
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
        carousel.style.transform = "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
        if (document.querySelector(".company-principles-text.isActive")) {
          document.querySelector(".company-principles-text.isActive").classList.remove("isActive");
        }
        document.querySelector("[data-text-index=\"".concat(selectedIndex + 1, "\"]")).classList.add("isActive");
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
            cell.style.transform = rotateFn + "(" + cellAngle + "deg) translateZ(" + radius + "px)";
          } else {
            // hidden cell
            cell.style.opacity = 0;
            cell.style.transform = "none";
          }
        }
        rotateCarousel();
      }
      var orientationRadios = document.querySelectorAll('input[name="orientation"]');
      (function () {
        for (var i = 0; i < orientationRadios.length; i++) {
          var radio = orientationRadios[i];
          radio.addEventListener("change", onOrientationChange);
        }
      })();
      function onOrientationChange() {
        var checkedRadio = document.querySelector('input[name="orientation"]:checked');
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
      var interval = setInterval(function () {
        if (!document.querySelector(".company-principles-text[data-text-index=\"".concat(selectedIndex + 2, "\"]"))) {
          selectedIndex = -1;
        }
        chooseElem(++selectedIndex);
      }, 5000);
    }
  }]);
  return CompanyPrinciples;
}();
var companyRaiting = /*#__PURE__*/function () {
  function companyRaiting() {
    _classCallCheck(this, companyRaiting);
    if (document.querySelector(".company-raiting-slider")) {
      this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__["default"](".company-raiting-slider", {
        startAt: 0,
        perView: 1,
        gap: 0
      });
    }
    this.campanyRatingItems = document.querySelectorAll(".company-raiting-item");
  }
  _createClass(companyRaiting, [{
    key: "scrollTriggers",
    value: function scrollTriggers() {
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"].matchMedia({
        "(min-width: 1024px)": function minWidth1024px() {
          if (!document.querySelector(".company-raiting-items")) return;
          var triggersWrap = document.querySelector(".company-raiting-items");
          document.querySelector(".company-raiting").addEventListener("mousemove", function (event) {
            triggersWrap.scroll({
              top: 0,
              left: event.clientX
            });
          });
        }
      });
    }
  }, {
    key: "changeSlide",
    value: function changeSlide(item) {
      this.slider.go("=".concat(item.dataset.itemId));
      document.querySelectorAll(".company-raiting-item").forEach(function (trigger) {
        trigger.classList.remove("isActive");
      });
      item.classList.add("isActive");
    }
  }, {
    key: "onSliderInit",
    value: function onSliderInit() {
      var _this4 = this;
      document.querySelector(".company-raiting-item[data-item-id=\"".concat(this.slider.index, "\"]")).classList.add("isActive");
      this.slider.on("run.after", function (item) {
        document.querySelectorAll(".company-raiting-item").forEach(function (trigger) {
          trigger.classList.remove("isActive");
        });
        document.querySelector(".company-raiting-item[data-item-id=\"".concat(_this4.slider.index, "\"]")).classList.add("isActive");
      });
    }
  }, {
    key: "onMouseHandler",
    value: function onMouseHandler() {
      var _this5 = this;
      if (!this.campanyRatingItems && !this.campanyRatingItems.length) return;
      this.campanyRatingItems.forEach(function (item, idx) {
        item.addEventListener("mouseenter", buttonMouseEnter);
        item.addEventListener("mouseleave", buttonMouseLeave);
        item.addEventListener("click", function () {
          return _this5.changeSlide(item);
        });
        if (item && _this5.slider) {
          _this5.onSliderInit();
          _this5.scrollTriggers();
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this.slider) {
        this.slider.mount();
      }
      this.onMouseHandler();
    }
  }]);
  return companyRaiting;
}();
var companyPartners = /*#__PURE__*/function () {
  function companyPartners(sliderClass) {
    _classCallCheck(this, companyPartners);
    this.sliderClass = sliderClass;
  }
  _createClass(companyPartners, [{
    key: "init",
    value: function init() {
      if (!document.querySelector(".company-partners-slider")) return;
      new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__["default"](".company-partners-slider", {
        startAt: 0,
        bound: "Boolean",
        perView: 2,
        gap: 0,
        breakpoints: {
          1023: {
            perView: 1
          }
        }
      }).mount();
    }
  }]);
  return companyPartners;
}();
var companyReviews = /*#__PURE__*/function () {
  function companyReviews(sliderClass) {
    _classCallCheck(this, companyReviews);
    this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__["default"](".company-reviews__slider", {
      type: "carousel",
      // focusAt: 'center',
      startAt: 1,
      perView: 1.5,
      gap: 100,
      breakpoints: {
        1023: {
          perView: 1
        }
      }
    });
    this.translate = 0;
    this.index = 0;
    this.elementWidth = 0;
    this.allElementsWidth = 0;
  }
  _createClass(companyReviews, [{
    key: "countElementWidth",
    value: function countElementWidth() {
      this.elementWidth = document.querySelector(".company-reviews-item-stage-2:not(glide__slide--active)").offsetWidth + 100;
    }
  }, {
    key: "init",
    value: function init() {
      if (!document.querySelector(".company-reviews__slider")) return;
      var self = this;
      var FixBoundPeek = function FixBoundPeek(Glide, Components, Events) {
        return {
          modify: function modify(translate) {
            if (self.index < self.slider.index && self.slider.index != 0 && self.slider.index != 1) {
              self.translate += self.elementWidth;
            } else if (self.index > self.slider.index && self.slider.index != 0 && self.slider.index != 1) {
              self.translate -= self.elementWidth;
            } else if (self.slider.index == 0 || self.slider.index == 1) {
              self.translate = 0;
            }
            if (self.slider.index - self.index > 1) {
              self.allElementsWidth = 0;
              self.translate = 0;
              document.querySelectorAll(".company-reviews-item-stage-2").forEach(function (item) {
                if (!item.className.includes("glide__slide--active")) {
                  self.allElementsWidth += item.offsetWidth + 100;
                }
              });
              self.translate += self.allElementsWidth - self.elementWidth * 2;
            }
            self.index = self.slider.index;
            return self.translate;
          }
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
  }]);
  return companyReviews;
}();
var careerBlog = /*#__PURE__*/function () {
  function careerBlog(sliderClass) {
    _classCallCheck(this, careerBlog);
    this.sliderClass = sliderClass;
  }
  _createClass(careerBlog, [{
    key: "init",
    value: function init() {
      if (!document.querySelector(".career-blog-items")) return;
      if (window.innerWidth > 1023) {
        new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__["default"](".career-blog-items", {
          startAt: 0,
          perView: 3,
          gap: 20,
          type: "carousel"
        }).mount();
      }
    }
  }]);
  return careerBlog;
}();
function animateTitles() {
  if (document.querySelectorAll(".animated-title")) {
    document.querySelectorAll(".animated-title").forEach(function (item, i) {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(item, {
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom+=".concat(window.innerHeight, " bottom"),
          // end: `top-=${window.innerHeight} top-=${window.innerHeight}`,
          // markers: true,
          onUpdate: function onUpdate(item) {
            if (item.progress > 0.1) {
              gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(item.trigger, 2.5, {
                transform: "translateX(".concat(-item.progress * 200 + 100, "%)")
              });
            } else {
              gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(item.trigger, 2.5, {
                transform: "translateX(120%)"
              });
            }
          }
        },
        opacity: "1"
        // x: '-100%'
      });
    });
  }

  if (document.querySelectorAll(".animated-title-top")) {
    document.querySelectorAll(".animated-title-top").forEach(function (item, i) {
      if (window.innerWidth > 1023) {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top center+=100",
            end: "bottom+=".concat(window.innerHeight, " bottom"),
            // end: `top-=${window.innerHeight} top-=${window.innerHeight}`,
            // markers: true,
            onUpdate: function onUpdate(item) {
              if (item.progress > 0.1) {
                gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(item.trigger, 2.5, {
                  transform: "translateX(".concat(-item.progress * 200 + 100, "%)")
                });
              } else {
                gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(item.trigger, 2.5, {
                  transform: "translateX(120%)"
                });
              }
            }
          },
          opacity: "1"
          // x: '-100%'
        });
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top top+=325",
            end: "bottom+=400 top+=325",
            // end: `top-=${window.innerHeight} top-=${window.innerHeight}`,
            // markers: true,
            onUpdate: function onUpdate(item) {
              if (item.progress > 0.1) {
                gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(item.trigger, 2.5, {
                  transform: "translateX(".concat(-item.progress * 200 + 100, "%)")
                });
              } else {
                gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(item.trigger, 2.5, {
                  transform: "translateX(120%)"
                });
              }
            }
          },
          opacity: "1"
          // x: '-100%'
        });
      }
    });
  }

  setTimeout(function () {
    window.dispatchEvent(new Event("resize"));
  }, 500);
}
var buttonMouseEnter = function buttonMouseEnter(event) {
  var x = event.offsetX;
  var y = event.offsetY;
  var circle = document.createElement("div");
  circle.classList.add("button-circle");
  event.target.appendChild(circle);
  event.target.children[1].style.left = x + "px";
  event.target.children[1].style.top = y + "px";
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(event.target.children[1], 0.5, {
    width: 800,
    height: 800,
    x: -400,
    y: -400
  });
};
var buttonMouseLeave = function buttonMouseLeave(event) {
  var x = event.offsetX;
  var y = event.offsetY;
  event.target.children[1].style.left = x + "px";
  event.target.children[1].style.top = y + "px";
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(event.target.children[1], 0.3, {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    onComplete: function onComplete() {
      event.target.removeChild(event.target.children[1]);
    }
  });
};
new companyAbout({
  selector: ".company-about:not(.company-about__title)"
}).init();
new companyVideo().init();
new careerFirst().init();
new mainWeb().init();
new companyPrinciples().init();
new companyRaiting().init();
new companyPartners({
  sliderClass: ".glide"
}).init();
new companyReviews().init();
new careerBlog().init();
animateTitles();

/***/ }),

/***/ "./src/js/resize.js":
/*!**************************!*\
  !*** ./src/js/resize.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resizeScreen; });
function resizeScreen(resizeData) {
  if (!resizeData.length) return;
  function resize(element, className, size, isLess) {
    var el = document.querySelector(element);
    if (isLess) {
      window.innerWidth <= size ? el.classList.add(className) : el.classList.remove(className);
    } else {
      window.innerWidth > size ? el.classList.add(className) : el.classList.remove(className);
    }
  }
  window.addEventListener("resize", loopResizeData);
  function loopResizeData() {
    resizeData.forEach(function (_ref) {
      var element = _ref.element,
        className = _ref.className,
        size = _ref.size,
        isLess = _ref.isLess;
      resize(element, className, size, isLess);
    });
  }
  loopResizeData();
}

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=company.js.map