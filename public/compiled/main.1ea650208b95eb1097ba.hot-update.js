webpackHotUpdate("main",{

/***/ "./resources/js/App.jsx":
/*!******************************!*\
  !*** ./resources/js/App.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _molecules_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./molecules/Layout */ "./resources/js/molecules/Layout.jsx");
/* harmony import */ var _atoms_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atoms/SearchBar */ "./resources/js/atoms/SearchBar.jsx");
var _jsxFileName = "/home/lukas/Projects/rest-countries/resources/js/App.jsx";




function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_molecules_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./resources/js/atoms/SearchBar.jsx":
/*!******************************************!*\
  !*** ./resources/js/atoms/SearchBar.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@Assets/icons/search-solid.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var _this = undefined,
    _jsxFileName = "/home/lukas/Projects/rest-countries/resources/js/atoms/SearchBar.jsx";





var SearchBar = function SearchBar(props) {
  var placeholder = props.placeholder,
      alt = props.alt;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "SearchBar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "searchBar",
    id: "searchBar",
    placeholder: placeholder,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: !(function webpackMissingModule() { var e = new Error("Cannot find module '@Assets/icons/search-solid.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    alt: alt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
};

SearchBar.propTypes = {
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  atl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
SearchBar.defaultProps = {
  placeholder: 'Search for a country...',
  alt: 'Search Icon'
};
/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ })

})
//# sourceMappingURL=main.1ea650208b95eb1097ba.hot-update.js.map