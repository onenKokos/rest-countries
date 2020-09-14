webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/index.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src??ref--4-2!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./resources/sass/index.scss ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_fonts_NunitoSans_Light_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/fonts/NunitoSans-Light.ttf */ "./resources/assets/fonts/NunitoSans-Light.ttf");
/* harmony import */ var _assets_fonts_NunitoSans_Light_ttf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_NunitoSans_Light_ttf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_NunitoSans_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/fonts/NunitoSans-SemiBold.ttf */ "./resources/assets/fonts/NunitoSans-SemiBold.ttf");
/* harmony import */ var _assets_fonts_NunitoSans_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_NunitoSans_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_fonts_NunitoSans_ExtraBold_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/fonts/NunitoSans-ExtraBold.ttf */ "./resources/assets/fonts/NunitoSans-ExtraBold.ttf");
/* harmony import */ var _assets_fonts_NunitoSans_ExtraBold_ttf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_NunitoSans_ExtraBold_ttf__WEBPACK_IMPORTED_MODULE_4__);
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_NunitoSans_Light_ttf__WEBPACK_IMPORTED_MODULE_2___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_NunitoSans_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_3___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_NunitoSans_ExtraBold_ttf__WEBPACK_IMPORTED_MODULE_4___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* stylelint-disable */\n/* stylelint-enable */\n@font-face {\n  font-display: swap;\n  font-family: Nunito-Light;\n  font-weight: 300;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\n@font-face {\n  font-display: swap;\n  font-family: Nunito-SemiBold;\n  font-weight: 600;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n}\n@font-face {\n  font-display: swap;\n  font-family: Nunito-Bold;\n  font-weight: 800;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n}", "",{"version":3,"sources":["/home/lukas/Projects/rest-countries/resources/sass/_variables.scss","/home/lukas/Projects/rest-countries/resources/sass/_typography.scss","webpack://resources/sass/index.scss"],"names":[],"mappings":"AAAA,sBAAA;AAuBA,qBAAA;ACvBA;EACE,kBAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,+DAAA;ACGF;ADAA;EACE,kBAAA;EACA,4BAAA;EACA,gBAAA;EACA,kBAAA;EACA,+DAAA;ACEF;ADCA;EACE,kBAAA;EACA,wBAAA;EACA,gBAAA;EACA,kBAAA;EACA,+DAAA;ACCF","sourcesContent":["/* stylelint-disable */\n\n// BREAKPOINTS\n$xs: 375px;\n$lg: 1440px;\n\n// FONT SIZES\n$tiny: 14px;\n$small: 16px;\n\n// COLORS\n$dark_blue: hsl(209, 23, 22);\n$very_dark_blue: hsl(207, 26, 17);\n$very_dark_blue--alt: hsl(200, 15, 8);\n$dark_gray: hsl(0, 0, 52);\n$very_light_gray: hsl(0, 0, 98);\n$white: hsl(0, 0, 100);\n\n// FONTS\n$font_light: 'Nunito-light', sans-serif;\n$font_semibold: 'Nunito-SemiBold', sans-serif;\n$font_bold: 'Nunito-Bold', sans-serif;\n\n/* stylelint-enable */\n","@font-face {\n  font-display: swap;\n  font-family: Nunito-Light;\n  font-weight: 300;\n  font-style: normal;\n  src: url('../assets/fonts/NunitoSans-Light.ttf') format('truetype');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: Nunito-SemiBold;\n  font-weight: 600;\n  font-style: normal;\n  src: url('../assets/fonts/NunitoSans-SemiBold.ttf') format('truetype');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: Nunito-Bold;\n  font-weight: 800;\n  font-style: normal;\n  src: url('../assets/fonts/NunitoSans-ExtraBold.ttf') format('truetype');\n}\n","/* stylelint-disable */\n/* stylelint-enable */\n@font-face {\n  font-display: swap;\n  font-family: Nunito-Light;\n  font-weight: 300;\n  font-style: normal;\n  src: url(\"../assets/fonts/NunitoSans-Light.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-display: swap;\n  font-family: Nunito-SemiBold;\n  font-weight: 600;\n  font-style: normal;\n  src: url(\"../assets/fonts/NunitoSans-SemiBold.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-display: swap;\n  font-family: Nunito-Bold;\n  font-weight: 800;\n  font-style: normal;\n  src: url(\"../assets/fonts/NunitoSans-ExtraBold.ttf\") format(\"truetype\");\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./resources/assets/fonts/NunitoSans-ExtraBold.ttf":
/*!*********************************************************!*\
  !*** ./resources/assets/fonts/NunitoSans-ExtraBold.ttf ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fonts/NunitoSans-ExtraBold.ttf";

/***/ }),

/***/ "./resources/assets/fonts/NunitoSans-Light.ttf":
/*!*****************************************************!*\
  !*** ./resources/assets/fonts/NunitoSans-Light.ttf ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fonts/NunitoSans-Light.ttf";

/***/ }),

/***/ "./resources/assets/fonts/NunitoSans-SemiBold.ttf":
/*!********************************************************!*\
  !*** ./resources/assets/fonts/NunitoSans-SemiBold.ttf ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fonts/NunitoSans-SemiBold.ttf";

/***/ })

})
//# sourceMappingURL=main.edb2398de3b6f2c0e31c.hot-update.js.map