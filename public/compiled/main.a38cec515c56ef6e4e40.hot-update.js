webpackHotUpdate("main",{

/***/ "./resources/js/atoms/Dropdown.jsx":
/*!*****************************************!*\
  !*** ./resources/js/atoms/Dropdown.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/home/lukas/Projects/rest-countries/resources/js/atoms/Dropdown.jsx";




var Dropdown = function Dropdown(props) {
  var placeholder = props.placeholder,
      options = props.options;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Dropdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "Dropdown__Selection",
    id: "selected",
    name: "selected",
    placeholder: placeholder,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};

Dropdown.propTypes = {
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)
};
Dropdown.defaultProps = {
  placeholder: 'Filter by Region',
  options: ['Hello', 'World']
};
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ })

})
//# sourceMappingURL=main.a38cec515c56ef6e4e40.hot-update.js.map