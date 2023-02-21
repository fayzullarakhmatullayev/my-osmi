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
/******/ 		"career": 0
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
/******/ 	deferredModules.push(["./src/js/career.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/career.js":
/*!**************************!*\
  !*** ./src/js/career.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resize */ "./src/js/resize.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"]);
function checkSafari() {
  Object(_resize__WEBPACK_IMPORTED_MODULE_1__["default"])([{
    element: '.career-first',
    className: 'mobile',
    size: 1023,
    isLess: true
  }, {
    element: '.career-blocks',
    className: 'mobile',
    size: 1023,
    isLess: true
  }, {
    element: '.career-qualities',
    className: 'mobile',
    size: 1023,
    isLess: true
  }, {
    element: '.career-blog',
    className: 'mobile',
    size: 1023,
    isLess: true
  }, {
    element: '.main-resume',
    className: 'mobile',
    size: 1023,
    isLess: true
  }]);
  var isSafary = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  var mainTentacles = document.querySelectorAll(".career-first-tentacle");
  var infos = document.querySelectorAll('.career-first-info');
  infos[0].classList.add = 'mobile';
  mainTentacles.forEach(function (ten) {
    var images = ten.querySelectorAll("img");
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
var hhBlogs = document.querySelectorAll('.hh_block');
var blogBtn = document.querySelector('.career-blog-button');
blogBtn && blogBtn.classList.add('mobile');
hhBlogs[0].classList.add('hh_mobile');
var careerBlocks = /*#__PURE__*/function () {
  function careerBlocks() {
    _classCallCheck(this, careerBlocks);
  }
  _createClass(careerBlocks, [{
    key: "animateItems",
    value: function animateItems() {
      if (!document.querySelector('.career-blocks-item')) return;
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"].matchMedia({
        "(min-width: 1024px)": function minWidth1024px() {
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray(".career-blocks-item").forEach(function (item, i) {
            gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"].create({
              trigger: item,
              start: "top top",
              pin: true,
              pinSpacing: false
            });
          });
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.animateItems();
    }
  }]);
  return careerBlocks;
}();
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
document.querySelector('.more_cases').addEventListener('mouseenter', buttonMouseEnter);
document.querySelector('.more_cases').addEventListener('mouseleave', buttonMouseLeave);
var textarea = document.querySelector('.main-question-inputs textarea');
if (textarea) {
  textarea.value = '';
}
var careerBlog = /*#__PURE__*/function () {
  function careerBlog(sliderClass) {
    _classCallCheck(this, careerBlog);
    this.sliderClass = sliderClass;
  }
  _createClass(careerBlog, [{
    key: "init",
    value: function init() {
      if (!document.querySelector('.career-blog-items')) return;
      if (window.innerWidth > 1023) {
        new _glidejs_glide__WEBPACK_IMPORTED_MODULE_3__["default"]('.career-blog-items', {
          startAt: 0,
          perView: 3,
          gap: 20,
          type: 'carousel'
        }).mount();
      }
    }
  }]);
  return careerBlog;
}();
checkSafari();
animateTitles();
new careerBlocks().init();
new careerBlog().init();

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
    if (!el) return;
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

/***/ })

/******/ });
//# sourceMappingURL=career.js.map