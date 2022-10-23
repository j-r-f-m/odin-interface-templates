/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/* -------------------------------- fonts ----------------------------------- */\nbody {\n  font-family: Roboto;\n}\n\n/* --------------------------------- layout ----------------------------------*/\nbody {\n  /* need height to be able to center items */\n  height: 100vh;\n  display: grid;\n  place-items: center;\n  background-color: lightgrey;\n}\n\n/* --------------------------------- style ---------------------------------- */\n\n/* +++++++++++++++++++++++++++++ dropdown +++++++++++++++++++++++++++++++++ */\n#dropdown-container {\n  border: solid 1px red;\n}\n\n#dropdown-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu {\n  padding: 1.5rem;\n}\n\n#menu:hover {\n  background-color: lightgrey;\n}\n\n#menu,\n.link {\n  width: 8rem;\n  text-align: center;\n}\n\n.link {\n  padding: 0.5rem 1.5rem 0.5rem 1.5rem;\n  text-decoration: none;\n}\n\n/* ++++++++++++++++++++++++++++++++++++ navbar +++++++++++++++++++++++++++ */\n#navbar-container {\n  height: 1.5rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.link-navbar {\n  border: solid 1px red;\n  padding: 1.5rem;\n  text-decoration: none;\n}\n\n/* ++++++++++++++++++++++++++++++++++ Slideshow +++++++++++++++++++++++++++ */\n\n#slideshow-container {\n  display: grid;\n  grid-template-columns: repeat(11, [col-start]1fr);\n  grid-template-rows: repeat(11, [row-start] 1fr);\n\n  position: relative;\n}\n\nimg {\n  height: 100%;\n\n  grid-column: 1 / 12;\n  grid-row: 1 / 12;\n}\n\n\n\n#left-arrow {\n  grid-column: 1 / 3;\n  grid-row: 6 / 7;\n}\n\n#right-arrow {\n  grid-column: 10 / 12;\n  grid-row: 6 / 7;\n}\n\n#left-arrow,\n#right-arrow {\n  height: 3.5rem;\n  justify-self: center;\n  z-index: 2;\n}\n\n#dots-container {\n  grid-column: 5 / 8;\n  grid-row: 11 / 12;\n  z-index: 2;\n\n  place-self: center;\n  display: flex;\n\n\n}\n\n.dot {\n  height: 2rem;\n  margin: 0 0.3rem 0 0.3rem;\n\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;AACA,+EAA+E;AAC/E;EACE,mBAAmB;AACrB;;AAEA,+EAA+E;AAC/E;EACE,2CAA2C;EAC3C,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA,+EAA+E;;AAE/E,6EAA6E;AAC7E;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;EAEE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC,qBAAqB;AACvB;;AAEA,4EAA4E;AAC5E;EACE,cAAc;;EAEd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,qBAAqB;AACvB;;AAEA,6EAA6E;;AAE7E;EACE,aAAa;EACb,iDAAiD;EACjD,+CAA+C;;EAE/C,kBAAkB;AACpB;;AAEA;EACE,YAAY;;EAEZ,mBAAmB;EACnB,gBAAgB;AAClB;;;;AAIA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,eAAe;AACjB;;AAEA;;EAEE,cAAc;EACd,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,UAAU;;EAEV,kBAAkB;EAClB,aAAa;;;AAGf;;AAEA;EACE,YAAY;EACZ,yBAAyB;;AAE3B","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/* -------------------------------- fonts ----------------------------------- */\nbody {\n  font-family: Roboto;\n}\n\n/* --------------------------------- layout ----------------------------------*/\nbody {\n  /* need height to be able to center items */\n  height: 100vh;\n  display: grid;\n  place-items: center;\n  background-color: lightgrey;\n}\n\n/* --------------------------------- style ---------------------------------- */\n\n/* +++++++++++++++++++++++++++++ dropdown +++++++++++++++++++++++++++++++++ */\n#dropdown-container {\n  border: solid 1px red;\n}\n\n#dropdown-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu {\n  padding: 1.5rem;\n}\n\n#menu:hover {\n  background-color: lightgrey;\n}\n\n#menu,\n.link {\n  width: 8rem;\n  text-align: center;\n}\n\n.link {\n  padding: 0.5rem 1.5rem 0.5rem 1.5rem;\n  text-decoration: none;\n}\n\n/* ++++++++++++++++++++++++++++++++++++ navbar +++++++++++++++++++++++++++ */\n#navbar-container {\n  height: 1.5rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.link-navbar {\n  border: solid 1px red;\n  padding: 1.5rem;\n  text-decoration: none;\n}\n\n/* ++++++++++++++++++++++++++++++++++ Slideshow +++++++++++++++++++++++++++ */\n\n#slideshow-container {\n  display: grid;\n  grid-template-columns: repeat(11, [col-start]1fr);\n  grid-template-rows: repeat(11, [row-start] 1fr);\n\n  position: relative;\n}\n\nimg {\n  height: 100%;\n\n  grid-column: 1 / 12;\n  grid-row: 1 / 12;\n}\n\n\n\n#left-arrow {\n  grid-column: 1 / 3;\n  grid-row: 6 / 7;\n}\n\n#right-arrow {\n  grid-column: 10 / 12;\n  grid-row: 6 / 7;\n}\n\n#left-arrow,\n#right-arrow {\n  height: 3.5rem;\n  justify-self: center;\n  z-index: 2;\n}\n\n#dots-container {\n  grid-column: 5 / 8;\n  grid-row: 11 / 12;\n  z-index: 2;\n\n  place-self: center;\n  display: flex;\n\n\n}\n\n.dot {\n  height: 2rem;\n  margin: 0 0.3rem 0 0.3rem;\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeFac": () => (/* binding */ NodeFac),
/* harmony export */   "dltNodeById": () => (/* binding */ dltNodeById)
/* harmony export */ });
/**
 * creates and returns dom-node
 *
 * @param {string} typeOfEle type dom-element.
 * @param {string} parentEleId parent of the new dom-element.
 * @param {string} txt add optional text content.
 * @return {object} crtNode returns newly created dom-node
 */
const NodeFac = (typeOfEle, parentEleId, txt) => {
  const crtNode = () => {
    // create element
    const createDomElement = document.createElement(typeOfEle);
    // optional text content
    createDomElement.textContent = txt;
    // set parent node
    const parentElement = document.getElementById(parentEleId);
    parentElement.appendChild(createDomElement);
    // created node is returned -> element methods can be used
    return createDomElement;
  };

  return { crtNode };
};

const dltNodeById = (id) => {
  if (document.getElementById(id)) {
    // delete node
    const node = document.getElementById(id);
    node.remove();
  }
};




/***/ }),

/***/ "./src/dropdown.js":
/*!*************************!*\
  !*** ./src/dropdown.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
// dropdown menu template



/**
 * create options for dropdown (links)
 *
 * @param {number} numElem number of options for dropdown
 */
const dropDownOptions = (numElem) => {
  for (let i = 0; i < numElem; i += 1) {
    const currLink = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)(
      "div",
      "dropdown-container",
      `Link ${i}`
    ).crtNode();
    currLink.id = `link-${i}`;
    currLink.className = "link";
    // currLink.setAttribute("href", "");
  }
};

/**
 * hide or show the options available from the dropdown
 *
 * @param {string} hideOrShow none or display -> hide or show options
 */
const hideShow = (hideOrShow) => {
  const links = document.getElementsByClassName("link");
  // iterate through links and change their display style
  for (let i = 0; i < links.length; i += 1) {
    links[i].style.display = hideOrShow;
  }
};

/**
 * template for creating dropdown menu
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  // dropdwon contaner
  const dropdownContainer = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)("div", "content").crtNode();
  dropdownContainer.id = "dropdown-container";
  // dropdown menu
  const dropdownMenu = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)("div", "dropdown-container", "Menu").crtNode();
  dropdownMenu.id = "menu";
  // add dropdown options (links)
  dropDownOptions(3);
  // hide dropdown options by default
  hideShow("none");
  dropdownMenu.addEventListener("click", (e) => {
    if (e.target.nextElementSibling.style.display === "block") {
      hideShow("none");
    } else {
      hideShow("block");
    }
  });
});


/***/ }),

/***/ "./src/mobileNavBar.js":
/*!*****************************!*\
  !*** ./src/mobileNavBar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
// template for mobile navbar



/**
 * reset background color of navbar options
 *
 *
 */
const resetBackgroundColor = () => {
  const navBarOptions = document.getElementsByClassName("link-navbar");
  console.log(navBarOptions.length);
  for (let i = 0; i < navBarOptions.length; i += 1) {
    console.log(navBarOptions[i]);
    navBarOptions[i].parentNode.style.backgroundColor = "";
  }
};

/**
 * create elements of navbar
 *
 * @param {string} arrName array with name (string) of navbar elements
 *
 */
const navBarOpt = (arrName) => {
  for (let i = 0; i < arrName.length; i += 1) {
    // create otpion container for txt and img
    const optionCon = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)("div", "navbar-container").crtNode();
    optionCon.className = "nav-opt-con";
    optionCon.id = `nav-opt-con-${i}`;
    // create option (link)
    const currLink = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)(
      "div",
      `nav-opt-con-${i}`,
      `${arrName[i]}`
    ).crtNode();
    currLink.id = `link-navbar-${i}`;
    currLink.className = "link-navbar";
    // eventlistener
    optionCon.addEventListener("click", (e) => {
      // reset background color for all option
      resetBackgroundColor();
      // set background color for selected option
      e.target.parentNode.style.backgroundColor = "#D3D3D3";
    });
  }
  // set default background color for irst (default option)
  const firstOption = document.getElementById("nav-opt-con-0");
  console.log(firstOption);
  firstOption.style.backgroundColor = "#D3D3D3";
};

/**
 * template for creating mobile navbar
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  // navbar container
  const navBarCon = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)("div", "content").crtNode();
  navBarCon.id = "navbar-container";
  // create navbar options
  navBarOpt(["News", "Videos", "Photos", "Chat"]);
});


/***/ }),

/***/ "./src/slideShow.js":
/*!**************************!*\
  !*** ./src/slideShow.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _images_img_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/img_1.jpg */ "./src/images/img_1.jpg");
/* harmony import */ var _images_img_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/img_2.jpg */ "./src/images/img_2.jpg");
/* harmony import */ var _images_img_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/img_3.jpg */ "./src/images/img_3.jpg");
/* harmony import */ var _images_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/arrow-left.svg */ "./src/images/arrow-left.svg");
/* harmony import */ var _images_arrow_right_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/arrow-right.svg */ "./src/images/arrow-right.svg");
/* harmony import */ var _images_circle_empty_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/circle-empty.svg */ "./src/images/circle-empty.svg");
/* harmony import */ var _images_circle_full_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/circle-full.svg */ "./src/images/circle-full.svg");









// slider index
let CURR_SLIDER_IDX = 0;
// slider images
const ARR_SLIDER = [_images_img_1_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_img_2_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_img_3_jpg__WEBPACK_IMPORTED_MODULE_3__];

/**
 * set full dot at CURR_SLIDER_IDX
 *
 * @param {number} currIdx CURR_SLIDER_IDX of current slide
 */
const setFullDot = (currIdx) => {
  // create img object
  const fullDot = new Image();
  fullDot.src = _images_circle_full_svg__WEBPACK_IMPORTED_MODULE_7__;
  fullDot.id = `dot-${currIdx}`;
  fullDot.className = "dot";
  // get parent div of the dot that represents the current slide
  const parentCurrDot = document.getElementById(`id-div-dot-${currIdx}`);
  parentCurrDot.appendChild(fullDot);
  // add eventlistener
  // dotEvent(fullDot);
};

/**
 * set slides
 *
 * @param {object} parenObj parent object of slide
 * @param {number} currIdx current index of slide that is supposed to be displayed
 * @return {object} return created image
 *
 */
const addSlide = (parenObj, currIdx) => {
  // create image
  const currImage = new Image();
  currImage.src = ARR_SLIDER[currIdx];
  currImage.id = `image-${currIdx}`;
  currImage.className = "image";
  parenObj.appendChild(currImage);
  return currImage;
};

/**
 * calculate idx of new slide when clicking on dots
 * @param {number} newIdx idx of wanted image
 * @return {number} new index that will display wanted image
 */
const dotCalIdx = (e) => {
  // get id of clicked dot
  const getId = e.target.id;
  const idx = getId.charAt(getId.length - 1);

  return Number(idx);
};

/**
 * event listeners for the empty dots
 *
 * @param {object}
 */
const dotEvent = (objEvent) => {
  const obj = objEvent;
  obj.addEventListener("click", (e) => {
    // delete old image
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNodeById)(`image-${CURR_SLIDER_IDX}`);
    // delete old full dot
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNodeById)(`dot-${CURR_SLIDER_IDX}`);
    // create old empty dot
    setEmptyDot(CURR_SLIDER_IDX);
    // update the CURRENT_SLIDER_IDX !!!!!!!!!!!!!
    // get slideshow-container to load new image
    const parentSlide = e.target.parentElement.parentElement.parentElement;
    CURR_SLIDER_IDX = dotCalIdx(e);
    // load new image with revcieved idx
    addSlide(parentSlide, CURR_SLIDER_IDX);
    // delete empty dot of new image
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNodeById)(`dot-${CURR_SLIDER_IDX}`);
    // set full dot
    setFullDot(CURR_SLIDER_IDX);
  });
};

/**
 * set empty dot at CURR_SLIDER_IDX
 *
 * @param {number} currIdx CURR_SLIDER_IDX of current slide
 */
const setEmptyDot = (currIdx) => {
  // append full dot to parent div current image(dot)
  const emptyDot = new Image();
  emptyDot.src = _images_circle_empty_svg__WEBPACK_IMPORTED_MODULE_6__;
  emptyDot.id = `dot-${currIdx}`;
  emptyDot.className = "dot";
  // get parent div of the dot that represents the curren slide
  const parentCurrDot = document.getElementById(`id-div-dot-${currIdx}`);
  parentCurrDot.appendChild(emptyDot);
  // add eventlistener
  dotEvent(emptyDot);
};

/**
 * create the empty dots for images in ARR_SLIDER
 * this function is only used in the beginning
 */
const dots = () => {
  const dotsCon = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)("div", "slideshow-container").crtNode();
  dotsCon.id = "dots-container";
  for (let i = 0; i < ARR_SLIDER.length; i += 1) {
    // create parent div for each dot
    const dotDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)("div", "dots-container").crtNode();
    dotDiv.id = `id-div-dot-${i}`;
    // create dot icon
    const currDot = new Image();
    currDot.src = _images_circle_empty_svg__WEBPACK_IMPORTED_MODULE_6__;
    currDot.id = `dot-${i}`;
    currDot.className = "dot";
    dotDiv.appendChild(currDot);

    // add eventlistener
    dotEvent(currDot);
  }
};

/**
 * set images
 *
 * @param {object} parenObj parent object of slide
 * @param {object} image image object
 * @param {number} currIdx current index for id
 * @return {object} return created image
 *
 */
const addArrow = (parenObj, image) => {
  const currImage = new Image();
  currImage.src = image;
  parenObj.appendChild(currImage);
  return currImage;
};

/**
 * calculate idex of new Slide if the left arrow was clicked
 *
 * @param {number} currIdx current index of slider
 * @return {number} newIdx that will display the wanted image
 *
 */
const LeftCalIdx = (currIdx) => {
  let newIdx = currIdx;
  if (newIdx === 0) {
    // if current index is 0 and we click the left arrow the last image in the
    // slider array is supposed to be displayed
    newIdx = ARR_SLIDER.length - 1;
  } else {
    newIdx = currIdx - 1;
  }
  return newIdx;
};

/**
 * calculate idex of new Slide if the right arrow was clicked
 *
 * @param {number} currIdx current index of slider
 * @return {number} newIdx that will display the wanted image
 *
 */
const RightCalIdx = (currIdx) => {
  let newIdx = currIdx;
  if (newIdx === ARR_SLIDER.length - 1) {
    // if current index is 2 and we click the right arrow the first image
    // (arrSlides[0]) in the slider array is supposed to be displayed
    newIdx = 0;
  } else {
    newIdx = currIdx + 1;
  }
  return newIdx;
};

/**
 * create left arrow-button that changes the images in the left direction
 *
 *@param {object} parentObj parent object of image
 */
const crtLeftArrow = (parentObj) => {
  // add left arrow
  const leftArrow = addArrow(parentObj, _images_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4__);
  leftArrow.id = "left-arrow";
  leftArrow.addEventListener("click", () => {
    // delete old image
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNodeById)(`image-${CURR_SLIDER_IDX}`);
    // delete old full dot
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNodeById)(`dot-${CURR_SLIDER_IDX}`);
    // create old empty dot
    setEmptyDot(CURR_SLIDER_IDX);
    // calculate new CURR_SLIDER_IDX !!!!!!!!!!!
    CURR_SLIDER_IDX = LeftCalIdx(CURR_SLIDER_IDX);
    // show next image with updated CURR_SLIDER_IDX
    addSlide(parentObj, CURR_SLIDER_IDX);
    // delete empty dot of new image
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNodeById)(`dot-${CURR_SLIDER_IDX}`);
    // set full dot
    setFullDot(CURR_SLIDER_IDX);
  });
};

/**
 * create right arrow-button that changes the images in the right direction
 *
 *@param {object} parentObj parent object of image
 */
const crtRightArrow = (parentObj) => {
  // add left arrow
  const leftArrow = addArrow(parentObj, _images_arrow_right_svg__WEBPACK_IMPORTED_MODULE_5__);
  leftArrow.id = "right-arrow";
  leftArrow.addEventListener("click", () => {
    // delete old image
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNodeById)(`image-${CURR_SLIDER_IDX}`);
    // delete old full dot
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNodeById)(`dot-${CURR_SLIDER_IDX}`);
    // create old empty dot
    setEmptyDot(CURR_SLIDER_IDX);
    // calculate new CURR_SLIDER_IDX !!!!!!!!!!!
    CURR_SLIDER_IDX = RightCalIdx(CURR_SLIDER_IDX);
    // show next image with updated CURR_SLIDER_IDX
    addSlide(parentObj, CURR_SLIDER_IDX);
    // delete empty dot of new image
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNodeById)(`dot-${CURR_SLIDER_IDX}`);
    // set full dot
    setFullDot(CURR_SLIDER_IDX);
  });
};

/**
 * template for creating slide show
 *
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  // slideshow container
  const slideShowCon = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.NodeFac)("div", "content").crtNode();
  slideShowCon.id = "slideshow-container";
  // set slide
  addSlide(slideShowCon, CURR_SLIDER_IDX);
  // add left arrow
  crtLeftArrow(slideShowCon);
  // add right arrow
  crtRightArrow(slideShowCon, _images_arrow_right_svg__WEBPACK_IMPORTED_MODULE_5__);
  // add dots
  dots(CURR_SLIDER_IDX);
  // delete empty dot at current index
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dltNodeById)(`dot-${CURR_SLIDER_IDX}`);
  // add full dot
  setFullDot(CURR_SLIDER_IDX);
});


/***/ }),

/***/ "./src/images/arrow-left.svg":
/*!***********************************!*\
  !*** ./src/images/arrow-left.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "arrow-left.svg";

/***/ }),

/***/ "./src/images/arrow-right.svg":
/*!************************************!*\
  !*** ./src/images/arrow-right.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "arrow-right.svg";

/***/ }),

/***/ "./src/images/circle-empty.svg":
/*!*************************************!*\
  !*** ./src/images/circle-empty.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "circle-empty.svg";

/***/ }),

/***/ "./src/images/circle-full.svg":
/*!************************************!*\
  !*** ./src/images/circle-full.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "circle-full.svg";

/***/ }),

/***/ "./src/images/img_1.jpg":
/*!******************************!*\
  !*** ./src/images/img_1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img_1.jpg";

/***/ }),

/***/ "./src/images/img_2.jpg":
/*!******************************!*\
  !*** ./src/images/img_2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img_2.jpg";

/***/ }),

/***/ "./src/images/img_3.jpg":
/*!******************************!*\
  !*** ./src/images/img_3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img_3.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown */ "./src/dropdown.js");
/* harmony import */ var _mobileNavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobileNavBar */ "./src/mobileNavBar.js");
/* harmony import */ var _slideShow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slideShow */ "./src/slideShow.js");





(() => {
  // hide all links from dropdown
  // navbar();
  (0,_slideShow__WEBPACK_IMPORTED_MODULE_3__["default"])();
  // dropdown();
})();

})();

/******/ })()
;
//# sourceMappingURL=bundle553561eeda61fdff0a20.js.map