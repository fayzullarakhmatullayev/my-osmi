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
/******/ 		"main": 0
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
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! interactjs */ "./node_modules/interactjs/dist/interact.min.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resize */ "./src/js/resize.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/dist/video.es.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery_marquee__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery.marquee */ "./node_modules/jquery.marquee/jquery.marquee.min.js");
/* harmony import */ var jquery_marquee__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery_marquee__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["ScrollTrigger"]);

// IndustrySpecialization
var industry = /*#__PURE__*/function () {
  function IndustrySpecialization() {
    _classCallCheck(this, IndustrySpecialization);
    this.buttons = document.querySelectorAll(".industry-specialization-tab__navigation .btn");
    this.industryColumns = document.querySelectorAll(".industry-specialization__column");
    this.tabItemsContent = this.industryColumns[0].querySelectorAll(".industry-specialization-tab__content .industry-specialization-tab__content-item");
    this.tabItemsColumn = this.industryColumns[1].querySelectorAll(".industry-specialization-tab__content .industry-specialization-tab__content-item");
  }
  _createClass(IndustrySpecialization, [{
    key: "makeHidden",
    value: function makeHidden(elements, role) {
      if (role === "element") {
        elements.forEach(function (el) {
          el.style.display = "none";
        });
      } else if (role === "buttons") {
        elements.forEach(function (el) {
          el.classList.remove("active");
        });
      }
    }
  }, {
    key: "specializtionClick",
    value: function specializtionClick() {
      var _this = this;
      this.makeHidden(this.tabItemsContent, "element");
      this.makeHidden(this.tabItemsColumn, "element");
      this.tabItemsContent[0].style.display = "block";
      this.tabItemsColumn[0].style.display = "block";
      this.buttons[0].classList.add("active");
      this.buttons.forEach(function (btn, idx) {
        btn.addEventListener("click", function () {
          _this.makeHidden(_this.tabItemsContent, "element");
          _this.makeHidden(_this.tabItemsColumn, "element");
          _this.makeHidden(_this.buttons, "buttons");
          _this.tabItemsContent[idx].style.display = "block";
          _this.tabItemsColumn[idx].style.display = "block";
          _this.buttons[idx].classList.add("active");
        });
      });
    }
  }, {
    key: "dynamicStyle",
    value: function dynamicStyle() {
      var isMobile = window.innerWidth <= 1023;
      if (isMobile) {
        var inner = document.createElement("p");
        inner.style.width = "250px";
        inner.style.height = "100%";
        var outer = document.createElement("div");
        outer.style.position = "absolute";
        outer.style.top = "0px";
        outer.style.left = "0px";
        outer.style.visibility = "hidden";
        outer.style.width = "200px";
        outer.style.height = "150px";
        outer.style.overflow = "hidden";
        outer.appendChild(inner);
        document.body.appendChild(outer);
        var w1 = inner.offsetWidth;
        outer.style.overflow = "scroll";
        var w2 = inner.offsetWidth;
        if (w1 == w2) w2 = outer.clientWidth;
        document.body.removeChild(outer);
        return w1 - w2;
      }
      return 0;
    }
  }, {
    key: "addDynamicStyle",
    value: function addDynamicStyle() {
      var _this2 = this;
      var gridRowHidden = document.querySelectorAll(".industry-specialization-tab__grid-row-hidden");
      var gridRowScroll = document.querySelectorAll(".industry-specialization-tab__grid-row-scroll");
      gridRowHidden.forEach(function (el, idx) {
        gridRowHidden[idx].style.marginBottom = "".concat(-2 * _this2.dynamicStyle(), "px");
        gridRowScroll[idx].style.paddingBottom = "".concat(2 * _this2.dynamicStyle(), "px");
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;
      this.specializtionClick();
      this.addDynamicStyle();
      this.dynamicStyle();
      window.addEventListener("resize", function () {
        _this3.addDynamicStyle();
        _this3.dynamicStyle();
      });
    }
  }]);
  return IndustrySpecialization;
}();

// Main Web
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
        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["ScrollTrigger"].create({
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
    key: "checkIsSafari",
    value: function checkIsSafari() {
      var _this4 = this;
      setTimeout(function () {
        _this4.isSafary = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        var webTentacle = document.querySelectorAll(".web-tentacle img");
        if (_this4.isSafary) {
          webTentacle[0].style.display = "block";
          webTentacle[1].style.display = "none";
        } else {
          webTentacle[1].style.display = "block";
          webTentacle[0].style.display = "none";
        }
      }, 0);
    }
  }, {
    key: "checkWindowSize",
    value: function checkWindowSize() {
      var isMobile = window.innerWidth <= 1023;
      var mainWebs = document.querySelectorAll(".main-web .web");
      mainWebs.forEach(function (ele) {
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
  }, {
    key: "init",
    value: function init() {
      window.addEventListener("resize", this.checkWindowSize);
      this.checkWindowSize();
      this.checkIsSafari();
      this.animateElement();
      this.onInitSlider();
    }
  }]);
  return Mainweb;
}();

// mainAbout
var mainAbout = /*#__PURE__*/function () {
  function MainAbout() {
    _classCallCheck(this, MainAbout);
    this.player;
  }
  _createClass(MainAbout, [{
    key: "openVideoModal",
    value: function openVideoModal() {
      document.querySelector(".video-modal").classList.add("isOpened");
      this.player.play();
    }
  }, {
    key: "closeVideoModal",
    value: function closeVideoModal() {
      document.querySelector(".video-modal").classList.remove("isOpened");
      this.player.pause();
    }
  }, {
    key: "initVideoOpening",
    value: function initVideoOpening() {
      var _this5 = this;
      if (!document.querySelector(".main-about-play")) return;
      document.querySelector(".main-about-play").addEventListener("click", function () {
        _this5.openVideoModal();
      });
      document.querySelector(".video-modal").addEventListener("click", function () {
        _this5.closeVideoModal();
      });
      this.player = document.getElementById("player_modal");
      Object(video_js__WEBPACK_IMPORTED_MODULE_5__["default"])("player_modal", {
        fluid: true,
        controls: false,
        // autoplay: true,
        aspectRatio: "16:7",
        // muted: true,
        poster: "img/video_preview.png",
        sources: [{
          src: "videos/pv.mp4",
          type: "video/mp4"
        }]
      });
    }
  }, {
    key: "onCircleAnimationEnd",
    value: function onCircleAnimationEnd() {}
  }, {
    key: "animateCircle",
    value: function animateCircle() {
      if (!document.querySelector(".main-about")) return;
      var self = this;
      if (window.innerWidth > 1023) {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(".main-about__circle", {
          scrollTrigger: {
            trigger: ".trigger-wrapper-about",
            start: "top-=500",
            end: "top",
            scrub: 1
            // markers: true
          },

          width: function width() {
            return 7200 * 100 / window.innerWidth + "vw";
          },
          height: function height() {
            return 4900 * 100 / window.innerWidth + "vw";
          },
          onComplete: function onComplete() {
            self.onCircleAnimationEnd();
          }
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(".main-about__title", {
          scrollTrigger: {
            trigger: ".trigger-wrapper-about",
            start: "top-=500",
            end: "top",
            scrub: 1
          },
          color: "#121423"
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(".main-about__description", {
          scrollTrigger: {
            trigger: ".trigger-wrapper-about",
            start: "top-=500",
            end: "top",
            scrub: 1
          },
          color: "#121423"
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(".main-about__statistics-item--1", {
          scrollTrigger: {
            trigger: ".trigger-wrapper-about",
            start: "top-=100",
            end: "top+=100",
            scrub: 1
          },
          opacity: 1
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(".main-about__statistics-item--2", {
          scrollTrigger: {
            trigger: ".trigger-wrapper-about",
            start: "top",
            end: "top+=200",
            scrub: 1
          },
          opacity: 1
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(".main-about__statistics-item--3", {
          scrollTrigger: {
            trigger: ".trigger-wrapper-about",
            start: "top+=100",
            end: "top+=300",
            scrub: 1
          },
          opacity: 1
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(".main-about__statistics-item--4", {
          scrollTrigger: {
            trigger: ".trigger-wrapper-about",
            start: "top+=200",
            end: "top+=400",
            scrub: 1
          },
          opacity: 1
        });
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.animateCircle();
    }
  }]);
  return MainAbout;
}();

// Main Question
var mainQuestionForm = /*#__PURE__*/function () {
  function mainQuestionForm(_ref) {
    var inputSelector = _ref.inputSelector;
    _classCallCheck(this, mainQuestionForm);
    this.inputSelector = inputSelector;
    this.file = "";
    this.hasFile = false;
    this.isSafary = null;
  }
  _createClass(mainQuestionForm, [{
    key: "onInputChange",
    value: function onInputChange(event) {
      if (!event.target.files.length) {
        this.hasFile = false;
        this.file = null;
        return;
      }
      this.hasFile = true;
      this.file = _objectSpread({}, event.target.files)[0];
    }
  }, {
    key: "init",
    value: function init() {
      var _this6 = this;
      Object(_resize__WEBPACK_IMPORTED_MODULE_2__["default"])([{
        element: ".main-question",
        className: "mobile",
        size: 1023,
        isLess: true //<=
      }, {
        element: ".main-resume",
        className: "mobile",
        size: 1023,
        isLess: true //<=
      }]);

      if (!document.querySelector(this.inputSelector)) return;
      var fileInput = document.querySelector(this.inputSelector);
      fileInput.addEventListener("change", function () {
        return _this6.onInputChange(event);
      });
      this.isSafary = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      var mainTentacles = document.querySelectorAll(".main-question-tentacle");
      if (!this.isSafary) {
        mainTentacles[0].style.display = "block";
        mainTentacles[1].style.display = "none";
      } else {
        mainTentacles[1].style.display = "block";
        mainTentacles[0].style.display = "none";
      }
      mainTentacles.forEach(function (ten) {
        var tenImage = ten.querySelectorAll("img");
        if (window.innerWidth < 1023) {
          tenImage[1].style.display = "block";
          tenImage[0].style.display = "none";
        } else {
          tenImage[1].style.display = "none";
          tenImage[0].style.display = "block";
        }
      });
    }
  }]);
  return mainQuestionForm;
}();

// mainCarousel
var mainCarousel = /*#__PURE__*/function () {
  function MainCarousel() {
    _classCallCheck(this, MainCarousel);
  }
  _createClass(MainCarousel, [{
    key: "onCarouselChange",
    value: function onCarouselChange() {}
  }, {
    key: "init",
    value: function init() {
      Object(_resize__WEBPACK_IMPORTED_MODULE_2__["default"])([{
        element: ".main-carousel",
        className: "mobile",
        size: 1023,
        isLess: true //<=
      }]);
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
      var maxTitlesHeight = Math.max.apply(null, jquery__WEBPACK_IMPORTED_MODULE_6___default()(".main-carousel__text-item_titles .title").map(function () {
        return jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).height();
      }).get());
      var maxTextsHeight = Math.max.apply(null, jquery__WEBPACK_IMPORTED_MODULE_6___default()(".main-carousel__text-item_texts .text").map(function () {
        return jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).height();
      }).get());
      function rotateCarousel() {
        self.onCarouselChange();
        var angle = theta * selectedIndex * -1;
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(".main-carousel__text-item_gifts .badge").css({
          transform: "translateY(-50%) translateX(50%) rotate(".concat(angle, "deg)")
        });
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(".main-carousel__text-item_gifts .badge").text(Math.round(360 / cellCount * (selectedIndex % cellCount)));
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(".main-carousel__grades .from").text(Math.round(360 / cellCount * (selectedIndex % cellCount)));
        if (Math.round(360 / cellCount * (selectedIndex % cellCount)) < 0) {
          jquery__WEBPACK_IMPORTED_MODULE_6___default()(".main-carousel__grades .from").text(Math.round(360 / cellCount * (selectedIndex % cellCount)) * -1);
        }
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(".main-carousel__text-item_gifts .left__in").css({
          transform: "rotate(".concat(angle * -1, "deg)")
        });
        carousel.style.transform = "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
        var cells = carousel.querySelectorAll(".main-carousel-cell");
        document.querySelectorAll(".main-carousel__text-item_titles .title").forEach(function (item) {
          item.classList.remove("isActive");
        });
        if (document.querySelector(".main-carousel__text-item_titles .title[data-title-id=\"".concat(selectedIndex % cellCount + 1, "\"]"))) {
          document.querySelector(".main-carousel__text-item_titles .title[data-title-id=\"".concat(selectedIndex % cellCount + 1, "\"]")).classList.add("isActive");
        }
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelectorAll(".main-carousel__text-item_titles"), {
          height: maxTitlesHeight
        });
        document.querySelectorAll(".main-carousel__text-item_texts .text").forEach(function (item) {
          item.classList.remove("isActive");
        });
        if (document.querySelector(".main-carousel__text-item_texts .text[data-text-id=\"".concat(selectedIndex % cellCount + 1, "\"]"))) {
          document.querySelector(".main-carousel__text-item_texts .text[data-text-id=\"".concat(selectedIndex % cellCount + 1, "\"]")).classList.add("isActive");
        }
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelectorAll(".main-carousel__text-item_texts"), {
          height: maxTextsHeight
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
      var starCoord = 0;
      if (window.innerWidth <= 1023) {
        interactjs__WEBPACK_IMPORTED_MODULE_1___default()(".main-carousel").draggable({
          origin: "self",
          inertia: true,
          listeners: {
            move: function move(event) {}
          }
        }).on("dragstart", function (event) {
          starCoord = event.clientX;
        }).on("dragend", function (event) {
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
  }]);
  return MainCarousel;
}();

// newsAndTrends
var newsAndTrends = /*#__PURE__*/function () {
  function NewsAndTrends(_ref2) {
    var itemsSelector = _ref2.itemsSelector;
    _classCallCheck(this, NewsAndTrends);
    this.btns = document.querySelectorAll(".news-and-trends-button[data-news]");
    this.slider;
    this.sliderItems;
    this.html = jquery__WEBPACK_IMPORTED_MODULE_6___default()(".news-and-trends-right-slider .glide").clone();
  }
  _createClass(NewsAndTrends, [{
    key: "onClickBtn",
    value: function onClickBtn() {
      var self = this;
      this.btns.forEach(function (item) {
        item.addEventListener("click", function (event) {
          var _this$dataset;
          self.btns.forEach(function (btn) {
            btn.classList.remove("active");
          });
          this.classList.add("active");
          var news = ((_this$dataset = this.dataset) === null || _this$dataset === void 0 ? void 0 : _this$dataset.news) || "all";
          self.onFilter(news);
        });
      });
    }
  }, {
    key: "initSlider",
    value: function initSlider() {
      this.sliderItems = document.querySelectorAll(".news-and-trends-item");
      // this.html = $('.news-and-trends-right-slider').clone();
      this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__["default"](".news-and-trends-right-slider", {
        type: "carousel",
        startAt: 0,
        perView: 3,
        breakpoints: {
          800: {
            perView: 2
          },
          600: {
            perView: 1
          }
        }
      }).mount();
    }
  }, {
    key: "filterSlider",
    value: function filterSlider(_ref3) {
      var type = _ref3.type;
    }
  }, {
    key: "onInit",
    value: function onInit() {}
  }, {
    key: "init",
    value: function init() {
      var _this7 = this;
      if (!document.querySelector(".news-and-trends")) return;
      this.onClickBtn();
      Object(_resize__WEBPACK_IMPORTED_MODULE_2__["default"])([{
        element: "#news-and-trends",
        className: "mobile",
        size: 1023,
        isLess: true //<=
      }, {
        element: ".main-resume",
        className: "mobile",
        size: 1023,
        isLess: true //<=
      }]);

      this.initSlider();
      this.onInit();
      document.querySelectorAll(".news-and-trends .news-and-trends-button").forEach(function (item) {
        item.addEventListener("click", function (event) {
          if (_this7.slider) {
            _this7.slider.destroy();
          }
          jquery__WEBPACK_IMPORTED_MODULE_6___default()(".news-and-trends-right-slider .glide").replaceWith(jquery__WEBPACK_IMPORTED_MODULE_6___default()(_this7.html).clone());
          if (item.dataset.news != "all") {
            event.preventDefault();
            jquery__WEBPACK_IMPORTED_MODULE_6___default()(".news-and-trends-right-slider .news-and-trends-item:not([data-id-news=\"".concat(item.dataset.news, "\"])")).remove();
          }
          _this7.initSlider();
        });
      });
    }
  }]);
  return NewsAndTrends;
}();

// Main Cases
var mainCases = /*#__PURE__*/function () {
  function MainCases(_ref4) {
    var itemsClass = _ref4.itemsClass;
    _classCallCheck(this, MainCases);
    this.itemsClass = itemsClass;
    this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__["default"](".main-cases-slider", {
      type: "carousel",
      startAt: 1,
      perView: 1,
      gap: 0
    });
  }
  _createClass(MainCases, [{
    key: "initMobileSlider",
    value: function initMobileSlider() {
      if (!document.querySelector(".main-cases-slider")) return;
      this.slider.mount();
    }
  }, {
    key: "destroyMobileSlider",
    value: function destroyMobileSlider() {
      if (!document.querySelector(".main-cases-slider")) return;
      this.slider.destroy();
    }
  }, {
    key: "onInit",
    value: function onInit() {}
  }, {
    key: "onAnimationStart",
    value: function onAnimationStart() {}
  }, {
    key: "onAnimationEnd",
    value: function onAnimationEnd() {}
  }, {
    key: "init",
    value: function init() {
      if (!document.querySelector(".main-cases")) return;
      var self = this;
      jquery__WEBPACK_IMPORTED_MODULE_6___default()(function () {
        if (window.innerWidth <= 1023) {
          if (document.querySelector(".js_sl")) {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()(".js_sl").slick({
              dots: false,
              arrows: true,
              infinite: true,
              fade: true,
              autoplay: true,
              autoplaySpeed: 3000,
              slidesToShow: 1
            });
          }
        }
        if (window.innerWidth <= 1366 && window.innerWidth > 1023 || window.innerWidth > 1440) {
          jquery__WEBPACK_IMPORTED_MODULE_6___default()(".marquee-js").marquee({
            //duration in milliseconds of the marquee
            duration: 10000,
            //gap in pixels between the tickers
            gap: 100,
            //time in milliseconds before the marquee will start animating
            delayBeforeStart: 0,
            //'left' or 'right'
            direction: "left",
            //true or false - should the marquee be duplicated to show an effect of continues flow
            duplicated: true
          });
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_6___default()(function () {
        if (window.innerWidth <= 1366 && window.innerWidth > 1023 || window.innerWidth > 1440) {
          window.addEventListener("scroll", function (event) {
            var top = this.pageYOffset;
            var layers = jquery__WEBPACK_IMPORTED_MODULE_6___default()(".paralax_layer");
            var speed, yPos;
            layers.each(function () {
              speed = jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).attr("data-speed");
              var yPos = -(top * speed / 100);
              jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).attr("style", "transform: translate3d(0px, " + yPos + "px, 0px)");
            });
          });
        }
      });
      this.onInit();
    }
  }]);
  return MainCases;
}();

// casesUpdated
var casesUpdated = /*#__PURE__*/function () {
  function CasesUpdated() {
    _classCallCheck(this, CasesUpdated);
  }
  _createClass(CasesUpdated, [{
    key: "bioline",
    value: function bioline() {
      if (!document.querySelector(".cases__item.bioline")) return;
      document.querySelectorAll(".cases__item.bioline").forEach(function (item) {
        item.addEventListener("mousemove", function (event) {
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(item.querySelector(".bioline__image--hidden"), {
            "clip-path": "polygon(0% 0%, ".concat(event.offsetX, "px 0%, ").concat(event.offsetX, "px 100%, 0% 100%)")
          });
        });
        item.addEventListener("mouseleave", function (event) {
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(item.querySelector(".bioline__image--hidden"), {
            "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
          });
        });
      });
    }
  }, {
    key: "medex",
    value: function medex() {
      var figure = jquery__WEBPACK_IMPORTED_MODULE_6___default()(".medex");
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
  }, {
    key: "setParalax",
    value: function setParalax() {
      document.querySelectorAll(".cases__item[data-is_paralaxed]").forEach(function (item) {
        item.addEventListener("mousemove", function (event) {
          item.querySelectorAll("[data-speed]").forEach(function (elem) {
            gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(elem, {
              x: event.offsetX / elem.dataset.speed,
              y: event.offsetY / elem.dataset.speed
            });
          });
        });
      });
    }
  }, {
    key: "loadModel",
    value: function loadModel(url) {
      return new Promise(function (resolve, reject) {
        var manager = new THREE.LoadingManager();
        var loader = new THREE.GLTFLoader(manager);
        loader.load(url, function (gltf) {
          resolve(gltf.scene);
        });
      });
    }
  }, {
    key: "duplicateTitle",
    value: function duplicateTitle() {
      jquery__WEBPACK_IMPORTED_MODULE_6___default()(".cases__item .cases__item-title").each(function () {
        var text = jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).text();
        if (window.innerWidth > 1023) {
          jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).html("<div class=\"cases__item-title--forslide cases__item-title--top\">".concat(text, "</div><div class=\"cases__item-title--forslide cases__item-title--bottom\">").concat(text, "</div>"));
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (window.innerWidth <= 1024) return;
      this.bioline();
      this.medex();
      this.setParalax();
      this.duplicateTitle();
      // this.medex();
    }
  }]);
  return CasesUpdated;
}();
var UploadFormFile = /*#__PURE__*/function () {
  function UploadFormFile() {
    _classCallCheck(this, UploadFormFile);
    this.uploadFormFiles = document.querySelectorAll(".upload-form-file");
  }
  _createClass(UploadFormFile, [{
    key: "onInit",
    value: function onInit() {
      this.uploadFormFiles.forEach(function (uploadFormFile) {
        var uploadFormFileField = uploadFormFile.querySelector(".upload-form-file__field");
        var uploadFormFileNoFile = uploadFormFile.querySelector(".upload-form-file__no-file");
        var uploadFormFileFile = uploadFormFile.querySelector(".upload-form-file__file");
        var uploadFormFileFileText = uploadFormFileFile.querySelector(".upload-form-file__file-text");
        uploadFormFileFile.style.display = "none";
        uploadFormFileField.addEventListener("change", function (event) {
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
  }]);
  return UploadFormFile;
}();
new industry().init();
new mainWeb().init();
new mainAbout().init();
new mainCarousel().init();
new newsAndTrends({
  itemsSelector: ".news-and-trends-item"
}).init();
new mainCases({
  itemsClass: ".main-cases-item"
}).init();
new casesUpdated().init();
new UploadFormFile().onInit();
new mainQuestionForm({
  inputSelector: '.main-question-form-item [type="file"]',
  textSelector: ".main-question-form-item span"
}).init();

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
//# sourceMappingURL=main.js.map