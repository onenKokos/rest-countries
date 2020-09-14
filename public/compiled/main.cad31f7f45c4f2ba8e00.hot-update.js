webpackHotUpdate("main",{

/***/ "./resources/js/atoms/ThemeToggler.jsx":
/*!*********************************************!*\
  !*** ./resources/js/atoms/ThemeToggler.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_moon_regular_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/moon-regular.svg */ "./resources/assets/icons/moon-regular.svg");
/* harmony import */ var _assets_icons_moon_regular_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_moon_regular_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_moon_solid_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/moon-solid.svg */ "./resources/assets/icons/moon-solid.svg");
/* harmony import */ var _assets_icons_moon_solid_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_moon_solid_svg__WEBPACK_IMPORTED_MODULE_3__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../sass/atoms/ThemeToggler'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var _this = undefined,
    _jsxFileName = "/home/lukas/Projects/rest-countries/resources/js/atoms/ThemeToggler.jsx";







var ThemeToggler = function ThemeToggler(props) {
  var title = props.title,
      alt = props.alt,
      isActive = props.isActive;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ThemeToggler",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: isActive ? _assets_icons_moon_solid_svg__WEBPACK_IMPORTED_MODULE_3___default.a : _assets_icons_moon_regular_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: alt,
    className: "ThemeToggler__Icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, title));
};

ThemeToggler.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
ThemeToggler.defaultProps = {
  title: 'Dark mode',
  alt: 'Theme toggler',
  isActive: true
};
/* harmony default export */ __webpack_exports__["default"] = (ThemeToggler);

/***/ })

})
//# sourceMappingURL=main.cad31f7f45c4f2ba8e00.hot-update.js.map