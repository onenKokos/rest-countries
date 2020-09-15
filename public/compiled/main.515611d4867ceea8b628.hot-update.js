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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(placeholder),
      _useState4 = Object(_home_lukas_Projects_rest_countries_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      currentRegion = _useState4[0],
      setCurrentRegion = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(options),
      _useState6 = Object(_home_lukas_Projects_rest_countries_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      possibleRegions = _useState6[0],
      setPossibleRegions = _useState6[1];

  var handleChange = function handleChange(e) {
    setPossibleRegions(options.filter(function (option) {
      return option.includes(e.target.value);
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Dropdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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
      lineNumber: 21,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "Dropdown__Selection",
    id: "selected",
    name: "selected",
    placeholder: currentRegion,
    onChange: function onChange(e) {
      return handleChange(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _assets_icons_caret_solid_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Caret",
    className: "Dropdown__Caret",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Dropdown__Options-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, possibleRegions.length > 0 && possibleRegions.map(function (option) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Dropdown__Option",
      key: "k__".concat(option),
      onClick: function onClick(e) {
        return setCurrentRegion(e.target.innerHTML);
      },
      tabIndex: isActive ? 0 : -1,
      role: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
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
  options: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
};
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ })

})
//# sourceMappingURL=main.515611d4867ceea8b628.hot-update.js.map