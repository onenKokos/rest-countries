webpackHotUpdate("main",{

/***/ "./resources/js/atoms/Dropdown.jsx":
/*!*****************************************!*\
  !*** ./resources/js/atoms/Dropdown.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_lukas_Projects_rest_countries_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_caret_solid_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/caret-solid.svg */ "./resources/assets/icons/caret-solid.svg");
/* harmony import */ var _assets_icons_caret_solid_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_caret_solid_svg__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "/home/lukas/Projects/rest-countries/resources/js/atoms/Dropdown.jsx";





var Dropdown = function Dropdown(props) {
  var placeholder = props.placeholder,
      options = props.options;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_home_lukas_Projects_rest_countries_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Dropdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Dropdown__Container ".concat(isActive ? 'Dropdown__Container--is-Active' : ''),
    tabIndex: 0,
    onClick: function onClick() {
      return setIsActive(!isActive);
    },
    role: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "Dropdown__Selection",
    id: "selected",
    name: "selected",
    placeholder: placeholder,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _assets_icons_caret_solid_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Caret",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Dropdown__Options-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, options.length > 0 && options.map(function (option) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Dropdown__Option",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    }, option);
  }))));
};

Dropdown.propTypes = {
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)
};
Dropdown.defaultProps = {
  placeholder: 'Filter by Region',
  options: ['Hello', 'World']
};
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ })

})
//# sourceMappingURL=main.b2c9dd3cede702aa5741.hot-update.js.map