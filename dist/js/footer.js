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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/footer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize */ "./src/js/resize.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Footer = /*#__PURE__*/function () {
  function Footer() {
    _classCallCheck(this, Footer);
  }
  _createClass(Footer, [{
    key: "init",
    value: function init() {
      var cols = document.querySelectorAll('.footer-info__column');
      var rows = document.querySelectorAll('.footer-info__row');
      cols.forEach(function (col, idx) {
        col.id = "footer_col_".concat(idx);
        Object(_resize__WEBPACK_IMPORTED_MODULE_0__["default"])([{
          element: "#footer_col_".concat(idx),
          className: 'mobile',
          size: 1023,
          isLess: true
        }, {
          element: "#footer_col_".concat(idx, " .footer-info__icon"),
          className: 'mobile',
          size: 1023,
          isLess: true
        }]);
      });
      rows.forEach(function (r, idx) {
        r.id = "footer_row_".concat(idx);
        Object(_resize__WEBPACK_IMPORTED_MODULE_0__["default"])([{
          element: "#footer_row_".concat(idx),
          className: 'mobile',
          size: 1023,
          isLess: true
        }, {
          element: "#footer_row_".concat(idx, " .footer-info__title"),
          className: 'mobile',
          size: 1023,
          isLess: true
        }, {
          element: "#footer_row_".concat(idx, " .footer-info__text"),
          className: 'mobile',
          size: 1023,
          isLess: true
        }]);
      });
      Object(_resize__WEBPACK_IMPORTED_MODULE_0__["default"])([{
        element: '.footer',
        className: 'mobile',
        size: 1023,
        isLess: true
      }, {
        element: '.footer__content',
        className: 'mobile',
        size: 1023,
        isLess: true
      }, {
        element: '.footer__list-menu',
        className: 'mobile',
        size: 1023,
        isLess: true
      }, {
        element: '.footer-phones',
        className: 'mobile',
        size: 1023,
        isLess: true
      }, {
        element: '.footer-socials',
        className: 'mobile',
        size: 1023,
        isLess: true
      }, {
        element: '.footer__row',
        className: 'mobile',
        size: 1023,
        isLess: true
      }, {
        element: '.footer-info--name',
        className: 'mobile',
        size: 1023,
        isLess: true
      }, {
        element: '.footer-menu-first',
        className: 'mobile',
        size: 1023,
        isLess: true
      }, {
        element: '.footer-menu-second',
        className: 'mobile',
        size: 1023,
        isLess: true
      }, {
        element: '.footer-menu-third',
        className: 'mobile',
        size: 1023,
        isLess: true
      }, {
        element: '.footer-info footer-info--name',
        className: 'mobile',
        size: 1023,
        isLess: true
      }, {
        element: '.footer-info--presentation',
        className: 'mobile',
        size: 1023,
        isLess: true
      }, {
        element: '.footer-info--bookkeeping',
        className: 'mobile',
        size: 1023,
        isLess: true
      }, {
        element: '.footer-info--address',
        className: 'mobile',
        size: 1023,
        isLess: true
      }]);
    }
  }]);
  return Footer;
}();
new Footer().init();

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
//# sourceMappingURL=footer.js.map