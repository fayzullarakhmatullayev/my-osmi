/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/blog.js":
/*!************************!*\
  !*** ./src/js/blog.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize */ "./src/js/resize.js");

function checkSafari() {
  Object(_resize__WEBPACK_IMPORTED_MODULE_0__["default"])([{
    element: '.career-first',
    className: 'mobile',
    size: 1023,
    isLess: true
  }, {
    element: '.blog-items',
    className: 'mobile',
    size: 1023,
    isLess: true
  }]);
  var isSafary = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  var mainTentacles = document.querySelectorAll(".career-first-tentacle");
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
var buttonMouseEnter = function buttonMouseEnter(event) {
  var x = event.offsetX;
  var y = event.offsetY;
  var circle = document.createElement("div");
  circle.classList.add("button-circle");
  event.target.appendChild(circle);
  event.target.children[1].style.left = x + "px";
  event.target.children[1].style.top = y + "px";
  gsap.to(event.target.children[1], 0.5, {
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
  gsap.to(event.target.children[1], 0.3, {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    onComplete: function onComplete() {
      event.target.removeChild(event.target.children[1]);
    }
  });
};
var btns = document.querySelectorAll('.button--main');
btns.forEach(function (btn) {
  btn.addEventListener("mouseenter", buttonMouseEnter);
  btn.addEventListener("mouseleave", buttonMouseLeave);
});
checkSafari();

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
//# sourceMappingURL=blog.js.map