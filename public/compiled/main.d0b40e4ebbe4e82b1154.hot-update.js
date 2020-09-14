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
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/icons/moon-regular.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var _this = undefined,
    _jsxFileName = "/home/lukas/Projects/rest-countries/resources/js/atoms/ThemeToggler.jsx";





var ThemeToggler = function ThemeToggler(props) {
  var text = props.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ThemeToggler",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: !(function webpackMissingModule() { var e = new Error("Cannot find module '../../assets/icons/moon-regular.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    alt: "Icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, text));
};

ThemeToggler.propTypes = {
  text: propTypes.string
};
ThemeToggler.defaultProps = {
  text: 'Dark mode'
};
/* harmony default export */ __webpack_exports__["default"] = (ThemeToggler);

/***/ }),

/***/ "./resources/js/molecules/Header.jsx":
/*!*******************************************!*\
  !*** ./resources/js/molecules/Header.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_ThemeToggler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/ThemeToggler */ "./resources/js/atoms/ThemeToggler.jsx");
var _this = undefined,
    _jsxFileName = "/home/lukas/Projects/rest-countries/resources/js/molecules/Header.jsx";





var Header = function Header(props) {
  var title = props.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "Header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_ThemeToggler__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), ' ');
};

Header.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Header.defaultProps = {
  title: 'Where in the world?'
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=main.d0b40e4ebbe4e82b1154.hot-update.js.map