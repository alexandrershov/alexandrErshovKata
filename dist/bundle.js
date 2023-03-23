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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_js_swiper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/js/swiper.js */ "./src/js/swiper.js");
/* harmony import */ var _src_js_swiper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_js_swiper_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_js_readmore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/js/readmore.js */ "./src/js/readmore.js");
/* harmony import */ var _src_js_readmore_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_js_readmore_js__WEBPACK_IMPORTED_MODULE_2__);



var popupWindowBlur = document.getElementById("popupWindowBlur");
var closeMenu = document.getElementById("closeMenu");
var feedback = document.getElementById("feedback");
var header = document.getElementById("header");
var submit = document.getElementById("submit");
var feedBackNumber = document.getElementById("feedBackNumber");
var inputName = document.getElementById("inputName");
var inputNumber = document.getElementById("inputNumber");
var menuName = "";
var className = "";
var i = -1;

var popUpWindowSwipe = function popUpWindowSwipe(e) {
  closePopUpWindow();

  if (e.target.closest("#ButtonMenu") || e.target.closest("#closeMenu")) {
    menuName = popUpWindow;
    className = "popup-window_invisible";
  } else if (e.target.closest("#submitData") || e.target.closest(".popup-window_feedback__button") && !feedBackNumber.classList.contains("invisible-feedback") || e.target.closest("#submitDataHeader")) {
    menuName = feedBackNumber;
    className = "invisible-feedback";
    inputNumber.hasAttribute("autofocus", " ") ? inputNumber.removeAttribute("autofocus", " ") : inputNumber.setAttribute("autofocus", " ");
  } else if (e.target.closest("#submitNumber") || e.target.closest("#closeMenuNumber") || e.target.closest("#submitNumberHeader")) {
    menuName = feedback;
    className = "invisible-feedback";
    inputName.hasAttribute("autofocus", " ") ? inputName.removeAttribute("autofocus", " ") : inputName.setAttribute("autofocus", " ");
  } else return;

  document.body.classList.toggle("scroll");
  menuName.classList.toggle(className);
  popupWindowBlur.classList.toggle("blured");
  closePopUpWindow();

  if (!(className == '') && i > 0) {
    document.body.classList.toggle("scroll");
    menuName.classList.toggle(className);
    popupWindowBlur.classList.toggle("blured");
  }
};

var closePopUpWindow = function closePopUpWindow() {
  i = -1;
  className = "";
  menuName = "";

  if (!feedback.classList.contains("invisible-feedback")) {
    className = "invisible-feedback";
    menuName = feedback;
    ++i;
  }

  if (!feedBackNumber.classList.contains("invisible-feedback")) {
    className = "invisible-feedback";
    menuName = feedBackNumber;
    ++i;
  }

  if (!popUpWindow.classList.contains("popup-window_invisible")) {
    className = "popup-window_invisible";
    menuName = popUpWindow;
    ++i;
  } else return;
};

var onclosePopUpWindow = function onclosePopUpWindow(e) {
  if (e.type == "click" || e.code == "Escape") {
    closePopUpWindow();

    if (className == "") {
      return;
    } else {
      document.body.classList.toggle("scroll");
      menuName.classList.toggle(className);
      popupWindowBlur.classList.toggle("blured");
    }
  } else return;
};

closeMenu.addEventListener("click", popUpWindowSwipe);
feedback.addEventListener("click", popUpWindowSwipe);
feedBackNumber.addEventListener("click", popUpWindowSwipe);
header.addEventListener("click", popUpWindowSwipe);
submit.addEventListener("click", popUpWindowSwipe);
popupWindowBlur.addEventListener("click", onclosePopUpWindow);
document.addEventListener("keydown", onclosePopUpWindow);

/***/ }),

/***/ "./src/js/readmore.js":
/*!****************************!*\
  !*** ./src/js/readmore.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var readMore = document.querySelectorAll('.button-read-more');
var blockSwipe = document.querySelectorAll('.blockSwipe');
i = 0;

var onClick = function onClick(e) {
  readMore.forEach(function (element) {
    if (e.target == element) {
      blockSwipe[i].classList.toggle('height');

      if (element.innerText == 'Показать все') {
        element.innerHTML = 'Скрыть';
      } else element.innerHTML = 'Показать все';

      element.classList.toggle('grow__onwards_vertical');
      i = 0;
    }

    ;
    i++;
  });
  i = 0;
};

readMore.forEach(function (e) {
  e.addEventListener('click', onClick);
});

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var mySwiper = document.querySelectorAll('.mySwiper');
var swiperPagination = document.querySelectorAll('.swiper-pagination');
var i = 0;
mySwiper.forEach(function (element) {
  var swiper = new Swiper(element, {
    spaceBetween: 24,
    pagination: {
      el: swiperPagination[i]
    },
    mousewhell: true,
    keyboard: true,
    slidesPerView: 'auto',
    breakpoints: {
      768: {
        enabled: false
      }
    }
  });
  i++;
});

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map