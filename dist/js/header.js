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
/******/ 		"header": 0
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
/******/ 	deferredModules.push(["./src/js/header.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/header/headerData.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/header/headerData.js ***!
  \*************************************************/
/*! exports provided: resizeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeData", function() { return resizeData; });
var resizeData = [{
  element: ".header__phones_mobile",
  className: "header__phones_mobile_show",
  size: 1023,
  isLess: true //<=
}, {
  element: ".header-menu-opener",
  className: "header-menu-opener_show",
  size: 1023,
  isLess: true //<=
}, {
  element: ".header-logo",
  className: "mobile",
  size: 1023,
  isLess: true //<=
}, {
  element: ".header-menu",
  className: "header-menu_show",
  size: 1023,
  isLess: false
}, {
  element: ".header-lang",
  className: "header-lang_show",
  size: 1023,
  isLess: false
}, {
  element: ".header-mobile-menu",
  className: "header-mobile-menu_show",
  size: 1023,
  isLess: true
}];

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _src_blocks_modules_header_headerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/blocks/modules/header/headerData */ "./src/blocks/modules/header/headerData.js");
/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resize */ "./src/js/resize.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);

// Header
var header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);
    this.countedWidth = 0;
    this.self = this;
    this.isOpened = false;
    this.isPhonesOpened = false;
  }
  _createClass(Header, [{
    key: "openMobileHeader",
    value: function openMobileHeader() {
      this.isOpened = !this.isOpened;
      this.isPhonesOpened = false;
      document.querySelector("html").classList.toggle("overflowed");
    }
  }, {
    key: "openPhonesModal",
    value: function openPhonesModal() {
      console.log("clicked");
      this.isPhonesOpened = !this.isPhonesOpened;
      this.isOpened = false;
    }
  }, {
    key: "closePhonesModal",
    value: function closePhonesModal() {
      this.isPhonesOpened = false;
      document.querySelector("html").classList.remove("overflowed");
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      Object(_resize__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_blocks_modules_header_headerData__WEBPACK_IMPORTED_MODULE_2__["resizeData"]);
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(".header-logo", {
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: "top+=400 top",
          scrub: 1
          // markers: true,
        },

        width: function width() {
          if (document.querySelector(".en-version")) {
            return 120 * 100 / window.innerWidth + "vw";
          } else {
            return 200 * 100 / window.innerWidth + "vw";
          }
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(".header-in", {
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: "top+=400 top",
          scrub: 0
          // markers: true,
        },

        paddingTop: function paddingTop() {
          //return 10 * 100 / window.innerWidth + 'vw'
          return 1 * 100 / window.innerWidth + "vw";
        },
        paddingBottom: function paddingBottom() {
          //return 10 * 100 / window.innerWidth + 'vw'
          return 1 * 100 / window.innerWidth + "vw";
        }
      });
      this.setHeaderWavePositionOnLoad();
      this.onInit();
      var headerOpener = document.querySelector(".header-menu-opener");
      var headerMenuList = document.querySelectorAll(".header-menu ul li");
      var headerMobileMenuList = document.querySelectorAll(".header-mobile-menu ul li");
      var isOpened = false;
      [].concat(_toConsumableArray(headerMenuList), _toConsumableArray(headerMobileMenuList)).forEach(function (element) {
        element.addEventListener("mouseenter", _this.setHeaderWavePosition);
        element.addEventListener("mouseleave", _this.setHeaderWavePositionOnLoad);
      });
      headerOpener && headerOpener.addEventListener("click", function () {
        isOpened = !isOpened;
        [document.querySelector(".header"), document.querySelector(".header-menu-opener"), document.querySelector(".header-mobile-menu")].forEach(function (element) {
          return element.classList.toggle("isOpened");
        });
        document.querySelector("html").classList.toggle("overflowed");
      });
    }
  }, {
    key: "onInit",
    value: function onInit() {
      if (!document.querySelector(".header-mobile-menu")) return;
    }
  }, {
    key: "setHeaderWavePositionOnLoad",
    value: function setHeaderWavePositionOnLoad() {
      if (document.querySelector(".header-menu li.isActive")) {
        var active_menu = document.querySelector(".header-menu li.isActive");
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(".header-menu-border", {
          left: active_menu.offsetLeft,
          width: active_menu.offsetWidth,
          right: "auto"
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(".header-menu-wave", {
          left: active_menu.offsetLeft + active_menu.offsetWidth / 2
        });
      }
    }
  }, {
    key: "setHeaderWavePosition",
    value: function setHeaderWavePosition() {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(".header-menu-border", {
        left: event.target.offsetLeft,
        width: event.target.offsetWidth,
        right: "auto"
      });
    }
  }]);
  return Header;
}();
new header().init();

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
//# sourceMappingURL=header.js.map