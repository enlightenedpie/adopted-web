module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "15Pj":
/***/ (function(module, exports) {



/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "6dtT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SVG = {
  AdptLogo: function AdptLogo() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      viewBox: "0 0 216 36"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M121.07713.59447V3.74992A14.15539,14.15539,0,0,0,111.54769.59447H97.35693V11.50132C94.84373,4.77409,88.37149,0,80.08756,0A18.19756,18.19756,0,0,0,63.40768,10.023C60.54124,4.36045,54.52011.59447,46.79127.59447H33.24621V26.93759L21.93068.34636H14.885L0,35.32665H7.78962l3.17572-7.78886h14.6866l3.17533,7.78886h17.964c7.68067,0,13.68613-3.76062,16.574-9.393a18.02876,18.02876,0,0,0,16.62291,9.98858A18.11633,18.11633,0,0,0,97.35693,24.30053V35.32665h7.6413V24.90646h5.80513c7.79,0,14.04167-4.16739,14.04167-12.20436v-.09977a12.69771,12.69771,0,0,0-.95612-4.96142h7.75636V35.32665h7.64092V7.64091h10.56852V.59447Zm-107.383,20.1943L18.30845,9.52639l4.61467,11.26238Zm43.56662-2.7292c0,6.153-4.21747,10.37011-10.46951,10.37011H40.88712V7.49105h5.90415c6.252,0,10.46951,4.31725,10.46951,10.47027Zm33.24659,0c0,5.95462-4.26755,10.81625-10.41981,10.81625-6.15264,0-10.51882-4.96141-10.51882-10.9145v-.09977c0-5.95347,4.26716-10.81625,10.41942-10.81625,6.15264,0,10.51921,4.961,10.51921,10.916Zm26.59735-5.20952c0,2.97769-2.2326,5.2596-6.05287,5.2596h-6.05362V7.49105h5.90453c3.82026,0,6.202,1.83578,6.202,5.25961Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M154.71965.59438h24.70947V2.976h-22.129V16.62148h19.89634V19.0031H157.3001v13.942h22.377v2.38161H154.71965Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M185.98178.59438h11.56068C208.45821.59438,216,8.087,216,17.86146v.09977c0,9.77447-7.54179,17.36543-18.45754,17.36543H185.98178Zm11.56068,32.35067c9.67541,0,15.7784-6.599,15.7784-14.88547v-.09835c0-8.2366-6.103-14.98524-15.7784-14.98524h-8.9806V32.94505Z"
    }));
  },
  GabbyAnim: function GabbyAnim() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 4897.5123 4965.0115",
      className: "gabby"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n                    .a,.b,.d,.e,.o,.p{fill: none;}.b{stroke:#495077;stroke-width:24px;}.b,.d,.e,.n,.o,.p{stroke-linecap:round;}.b,.d,.e,.p{stroke-miterlimit:10;}.c{clip-path:url(#a);}.d,.e,.p{stroke:#d9c2b1;}.d{stroke-width:80px;}.e{stroke-width:100px;}.f{clip-path:url(#b);}.g{clip-path:url(#c);}.h{fill:#775e48;}.i{fill:#9d7b60;}.j{fill:#dcc1b2;}.k{fill:#dc6172;}.l{fill:#fff;}.m{fill:#050606;}.n{fill:#231f20;}.n,.o{stroke:#231f20;stroke-linejoin:round;stroke-width:12px;}.p{stroke-width:80px;}.q{clip-path:url(#d);}.r{fill:#f2d176;}.s{fill:#66c7c7;}.t{fill:#495078;}.lrg-lead{transform-origin:2047px 1462px;}.small-lead{transform-origin:1771px 1764px;}.med-lead{transform-origin:1849px 1566px;}.cloud{transform-origin:3486px 1129px;}.belly.bounce{transform-origin:907px 3788px;}.mouth{transform-origin:995px 2687px;}.gabby-eyes{transform-origin:928px 2442px;}.choicepost{transform-origin:3500px 1695px;}.adoptionsign{transform-origin:3500px 1695px;}.parentingsign{transform-origin:3500px 1695px;}\n                    "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
      id: "a"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      className: "a",
      x: "67.8914",
      y: "1316.0608",
      width: "1829.8174",
      height: "4012.9507",
      transform: "translate(1965.6001 6645.0724) rotate(-180)"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
      id: "b"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
      className: "a",
      points: "81.495 3499.898 1957.86 3162.626 1957.86 953.376 81.495 1290.649 81.495 3499.898"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
      id: "c"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
      className: "a",
      points: "71.682 3505.209 1948.047 3167.937 1948.047 958.688 71.682 1295.96 71.682 3505.209"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
      id: "d"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "a",
      d: "M4564.1182,960.1562A284.5893,284.5893,0,0,0,4642.81,763.3886c0-157.7571-127.8884-285.6455-285.6464-285.6455a284.21,284.21,0,0,0-142.7388,38.2608c-20.1617-138.0171-138.98-244.01-282.5923-244.01a284.4069,284.4069,0,0,0-179.8192,63.7516,285.6411,285.6411,0,0,0-328.3909-22.1076c-51.6858-73.4793-137.0718-121.541-233.7344-121.541-127.0982,0-234.7549,83.0342-271.82,197.7969a287.877,287.877,0,0,0-35.3123-2.2511c-107.1548,0-200.4747,59.0388-249.3513,146.3284q-6.9208-.36-13.93-.3715c-145.4068,0-263.2821,117.8753-263.2821,263.2821a263.7359,263.7359,0,0,0,8.13,65.11c-107.5292,40.993-183.9492,145.0156-183.9492,266.9408,0,121.9795,76.4861,226.0416,184.0914,266.9961a284.4679,284.4679,0,0,0-26.93,121.1014c0,157.758,127.8884,285.6455,285.6464,285.6455a286.1452,286.1452,0,0,0,69.7781-8.6214,285.3358,285.3358,0,0,0,342.5587,6.86c48.4123,88.9075,142.6716,149.2453,251.03,149.2453a284.7256,284.7256,0,0,0,204.5425-86.3492,285.2068,285.2068,0,0,0,229.61,115.7417c138.6276,0,254.1549-98.7656,280.1435-229.7616a284.2235,284.2235,0,0,0,142.642,38.2055c148.8531,0,271.0569-113.8747,284.385-259.2509a293.0671,293.0671,0,0,0,65.2837,7.4084c161.4652,0,292.3585-130.8933,292.3585-292.3585C4785.5123,1106.81,4691.2826,991.871,4564.1182,960.1562Z"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      className: "belly-emphasis"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
      className: "b",
      x1: "512.9938",
      y1: "3585.734",
      x2: "328.5323",
      y2: "3543.166"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
      className: "b",
      x1: "502.3518",
      y1: "3765.3807",
      x2: "296.6063",
      y2: "3765.3807"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
      className: "b",
      x1: "502.3518",
      y1: "3929.8256",
      x2: "335.627",
      y2: "3993.6776"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
      className: "b",
      x1: "576.0144",
      y1: "3465.124",
      x2: "418.9894",
      y2: "3370.1499"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
      className: "b",
      x1: "569.8499",
      y1: "4057.5291",
      x2: "456.2364",
      y2: "4188.7805"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      className: "c"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "d",
      d: "M981.2623,3058.5072S843.3339,3767.8531,725.11,3940.2635"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
      className: "e",
      x1: "1179.4595",
      y1: "4235.8243",
      x2: "1137.7382",
      y2: "5007.6686"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      className: "f"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      className: "g"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
      className: "h",
      points: "1297.245 3166.582 1152.074 3117.592 821.705 3125.569 759.361 2867.781 1222.306 2641.794 1332.922 2378.762 1514.047 2378.762 1498.251 2772.672 1458.613 3002.362 1297.245 3166.582"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "i",
      d: "M538.8235,2239.4941c17.325,5.9343,46.3069-68.2683,63.5133-33.554,65.1024,131.3452,117.5971,513.2958,180.5614,543.144,10.0954,241.8755,38.8071,376.4852,38.8071,376.4852-294.1975-23.6765-282.8818-355.1442-282.8818-355.1442Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "j",
      d: "M970.6772,2913.4585h.0007c188.2539,0,346.1634-141.5739,366.0086-328.1454l27.6379-259.833c2.0908-391.7321-147.3831-405.4824-366.0086-405.4824H789.3074c-136.4781,0-242.87,117.866-228.4827,253.1244l43.8439,412.191C624.5138,2771.8846,782.4233,2913.4585,970.6772,2913.4585Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "i",
      d: "M1297.2452,3166.5818s90.9242-426.1729,6.06-1124.623L560.2915,2247.1933,537.661,2389.251,469.77,2177.6443s-95.3926-346.4116,171.0433-439.6682c441.9329-154.6833,712.7268,131.4993,712.7268,131.4993s248.085,23.6763,248.085,183.4912-21.498,758.4711-21.498,758.4711S1591.4419,3142.9056,1297.2452,3166.5818Z"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
      className: "e",
      x1: "953.0035",
      y1: "4236.1191",
      x2: "970.76",
      y2: "5031.6165"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "k",
      d: "M877.51,4235.8243h408.5272a61.5842,61.5842,0,0,0,60.8516-71.0554L1169.0173,3021.9521a61.5843,61.5843,0,0,0-60.8516-52.1131H1002.02a61.5842,61.5842,0,0,0-61.222,54.9141L816.2882,4167.57A61.5843,61.5843,0,0,0,877.51,4235.8243Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
      className: "k belly bounce",
      cx: "907.1955",
      cy: "3788.3374",
      rx: "281",
      ry: "359.5213"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      className: "gabby-eyes"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
      className: "l eye-white left",
      cx: "1085.4478",
      cy: "2442.0163",
      rx: "92.6917",
      ry: "92.6917"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
      className: "m eye-iris left",
      cx: "1081.6281",
      cy: "2477.3614",
      rx: "61.3044",
      ry: "61.3044"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
      className: "l eye-white right",
      cx: "770.1805",
      cy: "2442.0163",
      rx: "92.6917",
      ry: "92.6917"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
      className: "m eye-iris right",
      cx: "766.3608",
      cy: "2477.3614",
      rx: "61.3044",
      ry: "61.3044"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "n mouth",
      d: "M995.2385,2686.8689c48.5529,86.3054-156.0884-5.0236-156.0884-5.0236S946.3281,2599.9279,995.2385,2686.8689Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "o",
      d: "M1210.6247,2300.6794s-31.9024-75.5322-98.8724-50.9021"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "o",
      d: "M759.5923,2255.5674s-50.9021-18.0732-95.2362,50.8965"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "p",
      d: "M1172.3729,3043.5115c53.2553,131.4823,136.682,251.648,169.9794,390.8146,33.3018,139.185-406.0674,496.0239-424.0338,527.4255"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      className: "l lrg-lead",
      cx: "2047.0407",
      cy: "1461.6986",
      r: "62.2694"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      className: "l med-lead",
      cx: "1848.7342",
      cy: "1566.292",
      r: "49.1492"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      className: "l small-lead",
      cx: "1770.8941",
      cy: "1764.2365",
      r: "38.4981"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      className: "cloud"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
      className: "l",
      cx: "3486.0932",
      cy: "1128.9318",
      rx: "1084.0258",
      ry: "663.668"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      className: "l",
      cx: "2619.4739",
      cy: "796.8813",
      r: "263.2817"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      className: "l",
      cx: "4357.1634",
      cy: "763.3892",
      r: "285.6461"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      className: "l",
      cx: "4493.1541",
      cy: "1243.7949",
      r: "292.3579"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      className: "l",
      cx: "2882.7556",
      cy: "673.2888",
      r: "285.6461"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      className: "l",
      cx: "2868.8025",
      cy: "1569.0351",
      r: "285.6461"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      className: "l",
      cx: "3189.8878",
      cy: "477.743",
      r: "285.6461"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      className: "l",
      cx: "3572.1929",
      cy: "557.6396",
      r: "285.6461"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      className: "l",
      cx: "2466.0184",
      cy: "1128.9318",
      r: "285.6461"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      className: "l",
      cx: "2623.1803",
      cy: "1517.0291",
      r: "285.6461"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      className: "l",
      cx: "3286.5467",
      cy: "1664.5131",
      r: "285.6461"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      className: "l",
      cx: "3720.6995",
      cy: "1693.9054",
      r: "285.6461"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      className: "l",
      cx: "3931.8331",
      cy: "557.6396",
      r: "285.6461"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      className: "l",
      cx: "4143.4851",
      cy: "1502.349",
      r: "285.6461"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      className: "q post-choice"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "r choicepost",
      d: "M3509.23,1992.645H3407.4452V635.5048a50.8924,50.8924,0,0,1,50.8923-50.8923h0a50.8923,50.8923,0,0,1,50.8922,50.8923Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "s adoptionsign",
      d: "M4178.8974,1043.57H3182.643a27.8773,27.8773,0,0,1-27.8773-27.8772V718.2994a27.8773,27.8773,0,0,1,27.8773-27.8773h996.2544a27.8775,27.8775,0,0,1,17.6034,6.261L4379.0937,845.38a27.8773,27.8773,0,0,1,0,43.2325l-182.5929,148.6964A27.8769,27.8769,0,0,1,4178.8974,1043.57Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "s parentingsign",
      d: "M2723.4786,1434.3147H3719.733a27.8772,27.8772,0,0,0,27.8773-27.8772V1109.0446a27.8773,27.8773,0,0,0-27.8773-27.8773H2723.4786a27.877,27.877,0,0,0-17.6034,6.2611l-182.5929,148.6964a27.8773,27.8773,0,0,0,0,43.2325l182.5929,148.6964A27.8769,27.8769,0,0,0,2723.4786,1434.3147Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "adoption"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "t",
      d: "M3378.7,927.2463l-2.3745-19.791h-23.749l-2.3745,19.791c-.5938,5.541-4.354,7.1245-8.1143,7.1245h-11.8745c-5.937,0-8.9057-4.1562-7.9165-10.0932l18.999-125.4727c.792-5.7392,3.76-7.7182,8.3125-7.7182h29.6856c4.5522,0,7.5205,1.979,8.3125,7.7182l18.999,125.4727c.9893,5.937-1.9795,10.0932-7.9165,10.0932h-11.8745C3383.0541,934.3708,3379.2939,932.7873,3378.7,927.2463Zm-23.5507-41.956h18.4052l-2.5727-22.5615-5.541-52.8414h-1.9795l-5.5411,52.8414Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "t",
      d: "M3429.7578,934.3708c-5.1456,0-8.1143-2.9687-8.1143-8.1142V799.2009c0-5.146,2.9687-8.1142,8.1143-8.1142h31.0712c25.53,0,39.1856,9.895,39.1856,31.4668v80.35c0,21.5717-13.6553,31.4672-39.1856,31.4672Zm31.0712-22.1655c6.5313,0,9.8955-3.958,9.8955-9.3017v-80.35c0-5.3433-3.3642-9.3013-9.8955-9.3013h-9.895v98.9531Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "t",
      d: "M3599.163,821.5642v82.3291c0,21.5718-13.6552,31.4673-39.1855,31.4673s-39.1856-9.8955-39.1856-31.4673V821.5642c0-21.5718,13.6558-31.4673,39.1856-31.4673S3599.163,799.9924,3599.163,821.5642Zm-49.0805,0v82.3291c0,5.3433,3.3642,9.3018,9.895,9.3018s9.8955-3.9585,9.8955-9.3018V821.5642c0-5.3437-3.3643-9.3018-9.8955-9.3018S3550.0825,816.2205,3550.0825,821.5642Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "t",
      d: "M3649.2309,884.8943v41.3623c0,5.1455-2.9688,8.1142-8.1143,8.1142h-13.062c-5.1455,0-8.1142-2.9687-8.1142-8.1142V799.2009c0-5.146,2.9687-8.1142,8.1142-8.1142h29.0923c25.53,0,39.1856,9.895,39.1856,31.4668V853.427c0,21.5718-13.6553,31.4673-39.1856,31.4673Zm7.916-22.1655c6.5313,0,9.8955-3.9581,9.8955-9.3018V822.5535c0-5.3433-3.3642-9.3013-9.8955-9.3013h-7.916v49.4766Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "t",
      d: "M3761.4418,813.2522V926.2566c0,5.1455-2.9687,8.1142-8.1142,8.1142h-13.062c-5.1455,0-8.1143-2.9687-8.1143-8.1142V813.2522h-18.8008c-5.1455,0-8.1142-2.9688-8.1142-8.1143v-5.937c0-5.146,2.9687-8.1142,8.1142-8.1142h66.8921c5.146,0,8.1143,2.9682,8.1143,8.1142v5.937c0,5.1455-2.9683,8.1143-8.1143,8.1143Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "t",
      d: "M3830.5087,926.2566c0,5.1455-2.9687,8.1142-8.1142,8.1142h-13.062c-5.1455,0-8.1138-2.9687-8.1138-8.1142V799.2009c0-5.146,2.9683-8.1142,8.1138-8.1142h13.062c5.1455,0,8.1142,2.9682,8.1142,8.1142Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "t",
      d: "M3929.6577,821.5642v82.3291c0,21.5718-13.6553,31.4673-39.1856,31.4673s-39.1851-9.8955-39.1851-31.4673V821.5642c0-21.5718,13.6553-31.4673,39.1851-31.4673S3929.6577,799.9924,3929.6577,821.5642Zm-49.0806,0v82.3291c0,5.3433,3.3642,9.3018,9.895,9.3018s9.8955-3.9585,9.8955-9.3018V821.5642c0-5.3437-3.3642-9.3018-9.8955-9.3018S3880.5771,816.2205,3880.5771,821.5642Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "t",
      d: "M4003.4741,799.2009c0-5.146,2.9687-8.1142,8.1142-8.1142h11.083c5.1455,0,8.1138,2.9682,8.1138,8.1142V926.2566c0,5.1455-2.9683,8.1142-8.1138,8.1142h-13.26c-4.9478,0-6.9268-2.5727-8.1143-5.937l-14.8433-42.748-9.6972-34.4356-1.979.3955,2.9687,35.4253v39.1856c0,5.1455-2.9687,8.1142-8.1142,8.1142h-11.083c-5.1456,0-8.1138-2.9687-8.1138-8.1142V799.2009c0-5.146,2.9682-8.1142,8.1138-8.1142h13.26c4.9478,0,6.9268,2.5727,8.1143,5.937l14.8432,42.748,9.6973,34.4356,1.979-.396-2.9687-35.4253Z"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "parenting"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "t",
      d: "M2878.0024,1286.53v41.3623c0,5.1455-2.9688,8.1143-8.1143,8.1143h-13.062c-5.1455,0-8.1142-2.9688-8.1142-8.1143V1200.8367c0-5.146,2.9687-8.1143,8.1142-8.1143h29.0923c25.53,0,39.1855,9.895,39.1855,31.4668v30.8735c0,21.5718-13.6552,31.4673-39.1855,31.4673Zm7.916-22.1655c6.5312,0,9.8955-3.958,9.8955-9.3018v-30.8735c0-5.3433-3.3643-9.3013-9.8955-9.3013h-7.916v49.4766Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "t",
      d: "M2992.5878,1328.8821l-2.3745-19.791h-23.749l-2.3745,19.791c-.5938,5.541-4.354,7.1245-8.1143,7.1245H2944.101c-5.937,0-8.9057-4.1563-7.9165-10.0933l18.999-125.4726c.792-5.7393,3.76-7.7183,8.3125-7.7183h29.6856c4.5522,0,7.5205,1.979,8.3125,7.7183l18.999,125.4726c.9893,5.937-1.9795,10.0933-7.9165,10.0933h-11.8745C2996.9418,1336.0066,2993.1816,1334.4231,2992.5878,1328.8821Zm-23.5508-41.9561h18.4053l-2.5727-22.5615-5.541-52.8413h-1.9795l-5.5411,52.8413Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "t",
      d: "M3099.4545,1276.4368l18.01,47.8935c1.583,4.1558.5937,11.6763-7.5205,11.6763H3096.288c-4.1557,0-6.7285-1.979-7.916-5.3433l-17.6138-49.477h-5.937v46.706c0,5.1455-2.9687,8.1143-8.1142,8.1143h-13.062c-5.1455,0-8.1138-2.9688-8.1138-8.1143V1200.8367c0-5.146,2.9683-8.1143,8.1138-8.1143h31.0712c25.53,0,39.1856,9.895,39.1856,31.4668v25.53C3113.9018,1262.781,3108.954,1271.489,3099.4545,1276.4368Zm-24.7383-17.4161c6.5313,0,9.8956-3.958,9.8956-9.3012v-25.53c0-5.3433-3.3643-9.3013-9.8956-9.3013h-9.895v44.1328Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "t",
      d: "M3192.666,1192.7224c5.1455,0,8.1142,2.9683,8.1142,8.1143v5.937c0,5.1455-2.9687,8.1142-8.1142,8.1142H3163.97v38.3936h21.1757c5.1456,0,8.1143,2.9687,8.1143,8.1142v5.9375c0,5.1456-2.9687,8.1138-8.1143,8.1138H3163.97v38.3941h28.6963c5.1455,0,8.1142,2.9687,8.1142,8.1142v5.937c0,5.1455-2.9687,8.1143-8.1142,8.1143h-49.8726c-5.1455,0-8.1138-2.9688-8.1138-8.1143V1200.8367c0-5.146,2.9683-8.1143,8.1138-8.1143Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "t",
      d: "M3268.6577,1200.8367c0-5.146,2.9687-8.1143,8.1142-8.1143h11.083c5.1455,0,8.1138,2.9683,8.1138,8.1143v127.0556c0,5.1455-2.9683,8.1143-8.1138,8.1143h-13.26c-4.9478,0-6.9268-2.5728-8.1143-5.937l-14.8433-42.7481-9.6972-34.4355-1.979.3955,2.9687,35.4253v39.1855c0,5.1455-2.9687,8.1143-8.1142,8.1143h-11.0831c-5.1455,0-8.1137-2.9688-8.1137-8.1143V1200.8367c0-5.146,2.9682-8.1143,8.1137-8.1143h13.26c4.9478,0,6.9268,2.5728,8.1143,5.937l14.8432,42.7481,9.6973,34.4355,1.979-.396-2.9687-35.4253Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "t",
      d: "M3365.0346,1214.8879v113.0044c0,5.1455-2.9687,8.1143-8.1143,8.1143h-13.062c-5.1455,0-8.1142-2.9688-8.1142-8.1143V1214.8879h-18.8008c-5.1455,0-8.1143-2.9687-8.1143-8.1142v-5.937c0-5.146,2.9688-8.1143,8.1143-8.1143h66.8921c5.146,0,8.1142,2.9683,8.1142,8.1143v5.937c0,5.1455-2.9682,8.1142-8.1142,8.1142Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "t",
      d: "M3434.102,1327.8923c0,5.1455-2.9688,8.1143-8.1143,8.1143h-13.062c-5.1455,0-8.1142-2.9688-8.1142-8.1143V1200.8367c0-5.146,2.9687-8.1143,8.1142-8.1143h13.062c5.1455,0,8.1143,2.9683,8.1143,8.1143Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "t",
      d: "M3507.9189,1200.8367c0-5.146,2.9687-8.1143,8.1142-8.1143h11.083c5.1456,0,8.1138,2.9683,8.1138,8.1143v127.0556c0,5.1455-2.9682,8.1143-8.1138,8.1143h-13.26c-4.9478,0-6.9268-2.5728-8.1143-5.937l-14.8432-42.7481-9.6973-34.4355-1.979.3955,2.9687,35.4253v39.1855c0,5.1455-2.9687,8.1143-8.1142,8.1143h-11.083c-5.1455,0-8.1143-2.9688-8.1143-8.1143V1200.8367c0-5.146,2.9688-8.1143,8.1143-8.1143h13.26c4.9478,0,6.9268,2.5728,8.1143,5.937l14.8428,42.7481,9.6977,34.4355,1.979-.396-2.9687-35.4253Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "t",
      d: "M3626.2631,1259.8127c5.146,0,8.1143,2.9683,8.1143,8.1143v37.602c0,21.5718-13.6553,31.4673-39.1856,31.4673s-39.185-9.8955-39.185-31.4673V1223.2c0-21.5717,13.6552-31.4672,39.185-31.4672s39.1856,9.8955,39.1856,31.4672v12.0723c0,5.1455-2.9683,8.1143-8.1143,8.1143h-13.0615c-5.1455,0-8.1143-2.9688-8.1143-8.1143V1223.2c0-5.3437-3.3642-9.3017-9.8955-9.3017s-9.895,3.958-9.895,9.3017v82.3291c0,5.3433,3.3643,9.3018,9.895,9.3018s9.8955-3.9585,9.8955-9.3018v-23.5507h-1.7812c-5.1455,0-8.1143-2.9688-8.1143-8.1143v-5.937c0-5.146,2.9688-8.1143,8.1143-8.1143Z"
    }))));
  },
  GladneyLogo: function GladneyLogo() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      "aria-label": "The Gladney Center for Adoption",
      viewBox: "0 0 388 370"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n                    .ee39c918-6b57-4dd7-a222-e2ec1914522c{fill:#6aada4;}\n                ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "be01f28d-2643-453b-a15e-deb9ac72dcc8",
      "data-name": "Layer 2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "a6de72a4-f864-43f2-bce2-d6fd8e1e9e32",
      "data-name": "Layer 1"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      className: "ee39c918-6b57-4dd7-a222-e2ec1914522c",
      d: "M299.9,232.8v-1.1a52.1,52.1,0,0,0-.3-5.5v-1.1c-.2-2.1-.5-4-.8-5.7s-.8-3.6-1.4-5.6l-.3-1.1a46,46,0,0,0-1.9-5.2l-.3-.8c-.7-1.7-1.3-3.1-2-4.5l-.3-.6-.2-.5-1.4-2.5-1.7-2.6-.6-1c-1.1-1.6-2.2-3.1-3.4-4.6l-.7-.9c-1.6-1.8-2.9-3.3-4.2-4.6l-48.2-47.8a11.4,11.4,0,0,0-15.8,0l-8.3,8.4,56.1,55.7c1.1,1.2,2.3,2.5,3.6,4.1l.6.9.3.4a28.4,28.4,0,0,1,2.2,3.4l.2.2.5,1a35.5,35.5,0,0,1,2.1,4.4l.4,1c.5,1.3.9,2.7,1.2,3.6l.2.6.3,1.6a20.5,20.5,0,0,1,.5,2.4v.7c0,.1.1.2.1.4v1a44.9,44.9,0,0,1-1.9,19v.4a52.6,52.6,0,0,1-3.9,8.4l-.7,1a41.6,41.6,0,0,1-5.9,7.5,43,43,0,0,1-8.2,6.4l-1,.5-.4.2a43.6,43.6,0,0,1-8.3,3.7,11.3,11.3,0,0,0-7.9,10.7,46.7,46.7,0,0,0,2.1,13.8,61.7,61.7,0,0,0,6.2-1.1l.8-.2,1.5-.3a6.5,6.5,0,0,0,1.6-.3,65.9,65.9,0,0,0,8.2-2.9l1.4-.5,1.3-.5a66.4,66.4,0,0,0,19-13.3,59.3,59.3,0,0,0,6.3-7.3l.8-1.2.7-1.1a48.8,48.8,0,0,0,3.5-5.6c.5-.9.9-1.8,1.3-2.7l.3-.5c.9-1.9,1.6-3.7,2.3-5.4a33.8,33.8,0,0,0,1.1-3.4l.5-1.2c.1-.4.3-.8.4-1.2l.9-3.6c0-.3.1-.6.1-.9l.5-2.8c.1-.3.1-.5.2-.8s.3-2,.4-3.1.1-2.1.1-3.2v-1.8A2.2,2.2,0,0,1,299.9,232.8ZM328.7,54.2A194.4,194.4,0,0,0,.3,183,194.8,194.8,0,0,0,107.1,367.8a15.5,15.5,0,0,0,8.9,1.5,85.4,85.4,0,0,0,70.5-66.4l.3-.9a2.3,2.3,0,0,0,.1-.7,11.3,11.3,0,0,0,.3-1.8l.2-1.6a5.2,5.2,0,0,0,.2-1.1l.2-1.1a16.2,16.2,0,0,0,.2-1.8v-.4c0-.5.1-.9.1-1.4a6.6,6.6,0,0,0,.1-1.4V289c0-.9.1-1.8.1-2.6v-3.5a83.6,83.6,0,0,0-2-16.5,70.5,70.5,0,0,0-2.5-9.2l-.3-.9c-.3-1-.7-2-1.1-3a24.4,24.4,0,0,0-1-2.4l-.5-1.2a87.3,87.3,0,0,0-15.4-23.3l-3.6-3.5a3.6,3.6,0,0,1-1-1.1l-37-36.9-2.8-3.1-.8-1-1.6-2.3-.5-.7-.4-.6c-.4-.7-.9-1.4-1.3-2.2l-.7-1.4-1.1-2.3-.5-1.3a13.4,13.4,0,0,1-.9-2.6l-.2-.4a1.9,1.9,0,0,1-.2-.8,24.9,24.9,0,0,1-1-3.9c0-.2-.1-.5-.1-.8V161a52.1,52.1,0,0,1-.6-6.7,41.1,41.1,0,0,1,1-9.4,44.9,44.9,0,0,1,7.8-17.3,43.7,43.7,0,0,1,35-17.5,30,30,0,0,1,5.1.4L175,95.6l4.3-3.9a66.5,66.5,0,0,0-37.6-3.3,57.4,57.4,0,0,0-15.3,5.1c-25.7,12.6-40.5,38.9-37.7,67A21.3,21.3,0,0,0,89,163l.2,1.2.6,3.6v.6c.3,1.3.7,2.8,1.1,4.3l.3,1c.5,1.5,1,3.1,1.6,4.6l.7,1.6c.5,1.3,1.2,2.7,1.9,4.1l.6,1.3h.1l.6,1.2.6.9a26.1,26.1,0,0,0,1.7,2.8l.8,1.2c1,1.4,1.9,2.7,2.8,3.8l1.1,1.4c1.5,1.7,2.8,3.2,4.1,4.5L147,240.3a2.7,2.7,0,0,1,.8.7l1.1,1.1.8,1a59.8,59.8,0,0,1,10.6,16.4c.5,1.1.9,2.2,1.3,3.3l.2.3c.4,1.2.9,2.5,1.2,3.7l.3,1.1.2.6a15.5,15.5,0,0,1,.5,2.3,61.4,61.4,0,0,1-1.5,33.2q-.7,2.4-1.5,4.2c-.6,1.5-1.3,2.9-1.9,4.2A65.8,65.8,0,0,1,147.3,329a62.9,62.9,0,0,1-32.2,17.1h-.3a4.5,4.5,0,0,1-3-.4A172.8,172.8,0,0,1,21.7,194.2c0-95.1,77.4-172.5,172.5-172.5S366.7,99.1,366.7,194.2a172.8,172.8,0,0,1-89.3,151.1l-.7.4a3.1,3.1,0,0,1-1.2.4,5.3,5.3,0,0,1-1.5.1A62.9,62.9,0,0,1,241.6,329a61.1,61.1,0,0,1-11.8-16.6,42.7,42.7,0,0,1-2-4.2c-.5-1.2-.9-2.5-1.5-4.2a63.9,63.9,0,0,1-3.1-19.3,64.9,64.9,0,0,1,1.6-13.8c.2-1,.5-2,.7-3v-.3c.1-.3.1-.6.2-.8s.9-2.6,1.4-3.9a29.5,29.5,0,0,1,1.7-4.1,59.3,59.3,0,0,1,12.7-18.4l.4-.6,17.6-17.6a20.6,20.6,0,0,0-1.6-3.7l-.2-.3a29.4,29.4,0,0,0-1.7-2.6l-.6-.8a18.6,18.6,0,0,0-2.2-2.5l-8.1-8.2-19.9,20a81,81,0,0,0-8,9.4,85.2,85.2,0,0,0-9.7,16.4l-1.5,3.7c-.5,1.2-1,2.5-1.4,3.8-1,3-1.8,6-2.5,8.9a91.8,91.8,0,0,0-1.9,16.6v3.6a8.6,8.6,0,0,0,.1,1.5v2.5c0,.8.1,1.3.1,1.8v1.5l.3,1.8.3,2.1c.1.5.1.9.2,1.4a13.3,13.3,0,0,0,.4,2.4c0,.2.1.4.1.6v.2a6.4,6.4,0,0,0,.2.7,83.6,83.6,0,0,0,22.6,42.2,84.6,84.6,0,0,0,48.3,24.2,12.7,12.7,0,0,0,7.4-1.2c66.5-33.2,107.9-99.9,107.9-174A192.6,192.6,0,0,0,328.7,54.2ZM233.4,87.1a66.1,66.1,0,0,0-30.1,7.2l-3.5,1.9-.7.4-2.7,1.6a68.4,68.4,0,0,0-10.3,8.5l-1.5,1.5h-.2l-46.2,46.1a11.3,11.3,0,0,0,0,15.8l8.4,8.4,55.8-55.7a44.6,44.6,0,0,1,14.4-9.5,40.4,40.4,0,0,1,4.5-1.6l4.9-1.1a45.6,45.6,0,0,1,7.2-.6A43.2,43.2,0,0,1,264.3,123a43.7,43.7,0,0,1,12.5,36l14.9,14.9,3.9,4.2a67.6,67.6,0,0,0-15-71.4A66.4,66.4,0,0,0,233.4,87.1ZM96.7,212.2a55,55,0,0,1-3.8-4.2,67.4,67.4,0,0,0,15,71.4,66.4,66.4,0,0,0,40,19.1,46.7,46.7,0,0,0,2.1-13.8,11.3,11.3,0,0,0-7.9-10.7,43.7,43.7,0,0,1-18-10.8,44.6,44.6,0,0,1-12.5-36.1Z"
    }))));
  },
  QuestionBlock: function QuestionBlock() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      viewBox: "0 0 116.9795 91.3506"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "rose-fill",
      d: "M116.98,50.1006V81.59a3.3348,3.3348,0,0,1-3.33,3.33h-5.31l-5.6406,6.4307L97.05,84.92h-34.9A3.34,3.34,0,0,1,58.82,81.59V50.1006a3.34,3.34,0,0,1,3.3291-3.33h51.5A3.3349,3.3349,0,0,1,116.98,50.1006Zm-11.18,14.71a4.3,4.3,0,1,0-4.3,4.3A4.3087,4.3087,0,0,0,105.8,64.8106Zm-13.6,0a4.3,4.3,0,1,0-4.3008,4.3A4.3032,4.3032,0,0,0,92.2,64.8106Zm-13.5908,0a4.3,4.3,0,1,0-4.3008,4.3A4.3089,4.3089,0,0,0,78.6094,64.8106Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "white-fill",
      d: "M101.5,60.5a4.3052,4.3052,0,1,1-4.3,4.3106A4.3087,4.3087,0,0,1,101.5,60.5Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "white-fill",
      d: "M87.8994,60.5a4.3052,4.3052,0,1,1-4.3,4.3106A4.3032,4.3032,0,0,1,87.8994,60.5Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "white-fill",
      d: "M74.3086,60.5A4.3052,4.3052,0,1,1,70.01,64.8106,4.3089,4.3089,0,0,1,74.3086,60.5Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "teal-fill",
      d: "M83.6,40.5606a40.95,40.95,0,0,1-.47,6.21H62.1494a3.34,3.34,0,0,0-3.3291,3.33V77.86a41.1132,41.1132,0,0,1-39.5117-4.07L0,81.13,7.64,61.34A40.14,40.14,0,0,1,1.87,40.5606a40.8659,40.8659,0,0,1,81.73,0ZM48.22,50.13C47.64,41.55,58.3086,39.11,58.3086,28.4405c0-8.4307-6.4883-15.42-17.0088-15.2-8.94.21-16.21,5.62-16,16.35h10.81c0-3.38,2.3808-4.83,4.9-4.8994,2.3789,0,5.05,1.3,4.9,3.97-.5,8.28-11.6016,10.16-10.4512,21.47Zm.65,11.28c0-4.03-2.96-6.63-6.9912-6.63-4.0391,0-7.209,2.6-7.209,6.63,0,3.96,3.17,6.49,7.209,6.49C45.91,67.9,48.87,65.37,48.87,61.41Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "navy-fill",
      d: "M41.8789,54.78c4.0313,0,6.9912,2.6,6.9912,6.63,0,3.96-2.96,6.49-6.9912,6.49-4.0391,0-7.209-2.53-7.209-6.49C34.67,57.38,37.84,54.78,41.8789,54.78Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "navy-fill",
      d: "M58.3086,28.4405C58.3086,39.11,47.64,41.55,48.22,50.13H35.459C34.3086,38.82,45.41,36.9405,45.91,28.66c.1494-2.67-2.5215-3.97-4.9-3.97-2.52.0693-4.9,1.52-4.9,4.8994H25.3c-.21-10.73,7.06-16.14,16-16.35C51.82,13.0205,58.3086,20.01,58.3086,28.4405Z"
    }));
  },
  VideoBlock: function VideoBlock() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      viewBox: "0 0 108.3204 80.2998"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      class: "rose-fill",
      cx: "81",
      cy: "72.1602",
      r: "3.75"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
      class: "white-fill",
      points: "78.33 31.65 37.591 55.17 37.591 8.13 78.33 31.65"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "rose-fill",
      d: "M108.32,0V64.18H0V0ZM37.5909,55.17,78.33,31.65,37.5909,8.13Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "navy-fill",
      d: "M84.75,72.16A3.75,3.75,0,1,0,81,75.91,3.7447,3.7447,0,0,0,84.75,72.16ZM108.32,64.18V80.3H0V64.18Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      class: "white-fill",
      x: "8.1006",
      y: "68.75",
      width: "3",
      height: "6.8106"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      class: "white-fill",
      x: "13",
      y: "68.75",
      width: "3",
      height: "6.8106"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      class: "white-fill",
      x: "84.75",
      y: "70.6602",
      width: "14.5",
      height: "3"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      class: "white-fill",
      x: "21.5",
      y: "70.6602",
      width: "55.7305",
      height: "3"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "white-fill",
      d: "M81,77.41a5.25,5.25,0,1,1,5.25-5.25A5.2558,5.2558,0,0,1,81,77.41Zm0-7.5a2.25,2.25,0,1,0,2.25,2.25A2.2525,2.2525,0,0,0,81,69.91Z"
    }));
  },
  HandsIcon: function HandsIcon() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      viewBox: "0 0 79.9141 113.2901"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
      class: "rose-fill",
      points: "52.374 72.09 53.564 72.09 78.394 72.09 79.914 72.09 79.914 113.29 52.374 113.29 52.374 72.09"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
      class: "navy-fill",
      points: "49.029 56.16 49.029 113.29 25.201 113.29 25.201 102.32 24.216 102.32 24.226 98.02 24.216 56.16 49.029 56.16"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
      class: "teal-fill",
      points: "1.279 101.82 26.1 101.82 27.05 101.82 27.05 113.29 0 113.29 0 101.82 1.279 101.82"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "periwinkle-fill",
      d: "M48.5293,15.77a2.93,2.93,0,1,0-5.8594,0V27.62h-1l-.0107-.5V7.56a2.93,2.93,0,1,0-5.8594,0V27.62h-1l-.01-.5V2.93a2.9253,2.9253,0,1,0-5.8506,0V27.62h-1l-.01-.5V7.39a2.93,2.93,0,0,0-5.86,0V39.4024l-4.51-6.4756V23.58a2.93,2.93,0,0,0-5.86,0v13.5a2.9493,2.9493,0,0,0,.9805,2.1728L15.91,43.27,26.71,56.16H48.14s.39-18.4932.39-20.5615Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "maize-fill",
      d: "M37.08,82.26V68.44a2.9313,2.9313,0,1,0-5.86,0v9.5625l-4.51,6.6436V51.85a2.9744,2.9744,0,0,0-2.9307-3.01,2.7144,2.7144,0,0,0-1.2256.2871c-.0937.0381-.1445.0664-.1933.0908l-.1045.0674c-.0547.0361-.11.0722-.1651.1162-.0849.0664-.167.13-.248.2021-.0537.0537-.126.126-.1983.208A2.9915,2.9915,0,0,0,20.85,51.85V72.56h-1l-.01-.5V47.28A2.9747,2.9747,0,0,0,16.9092,44.27a.3552.3552,0,0,1-.084.01.6878.6878,0,0,1-.1357.0108h-.0987a2.9817,2.9817,0,0,0-2.6015,2.99V72.56h-1l-.01-.5V52.02a2.9308,2.9308,0,1,0-5.8594,0V72.56h-1l-.0107-.5V60.43a2.9743,2.9743,0,0,0-2.93-3.01A2.9743,2.9743,0,0,0,.25,60.43V91a3.033,3.033,0,0,0,1.3115,2.5078l.2178.1485v8.164H25.6006l.0088-3.9746L36.1,84.4942A3.0228,3.0228,0,0,0,37.08,82.26Z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      class: "teal-fill",
      d: "M79.4141,61.54V31.7a2.93,2.93,0,1,0-5.86,0V43.55h-1l-.01-.5V23.49a2.93,2.93,0,1,0-5.8594,0V43.55h-1l-.0108-.5V18.86a2.9248,2.9248,0,1,0-5.85,0V43.55h-1l-.01-.5V23.32a2.93,2.93,0,1,0-5.86,0V55.333l-4.51-6.4756V39.51a2.9092,2.9092,0,0,0-2.6894-2.9121l-.2393.0019-.05-.02a2.9348,2.9348,0,0,0-2.8818,2.93v13.5a2.92,2.92,0,0,0,.9775,2.1709L54.043,68.2129l.02,3.877h23.832V64.125l.2188-.1484A2.9552,2.9552,0,0,0,79.4141,61.54Z"
    }));
  },
  RightArrow: function RightArrow() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      id: "b609ef51-f1a4-48d6-8c3f-5b2d43347e3e",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 110 16"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".wht {fill:none;stroke:#fff;stroke-miterlimit:10;}")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
      class: "wht",
      x1: "110",
      y1: "8",
      x2: "0",
      y2: "8"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
      class: "wht",
      points: "100 0 110 8 100 16"
    })));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "PQhJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/svg.js
var svg = __webpack_require__("6dtT");

// CONCATENATED MODULE: ./components/header.js





/* harmony default export */ var header = (function () {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge"
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.typekit.net/zhc3hzf.css"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css",
    integrity: "sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",
    crossOrigin: "anonymous"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/apple-touch-icon.png"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/static/favicon-32x32.png"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/static/favicon-16x16.png"
  }), external_react_default.a.createElement("link", {
    rel: "manifest",
    href: "/site.webmanifest"
  })), external_react_default.a.createElement("header", {
    role: "banner",
    className: "adpt-header"
  }, external_react_default.a.createElement("div", {
    className: "adpt-mobile-menu"
  }, external_react_default.a.createElement("div", {
    className: "adpt-mobile-menu-icon"
  }, external_react_default.a.createElement("div", {
    className: "adpt-mobile-menu-icon-lines"
  }))), external_react_default.a.createElement("div", {
    className: "adpt-nav-logo"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(svg["a" /* default */].AdptLogo, null)))), external_react_default.a.createElement("div", {
    className: "adpt-nav-dt"
  }, external_react_default.a.createElement("nav", {
    role: "navigation",
    className: "adpt-menu"
  }, external_react_default.a.createElement("div", {
    className: "menu-header-nav-container"
  }, external_react_default.a.createElement("ul", {
    id: "menu-header-nav",
    className: "menu"
  }, external_react_default.a.createElement("li", {
    className: "about menu-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/about"
  }, external_react_default.a.createElement("a", null, "About"))), external_react_default.a.createElement("li", {
    className: "educators menu-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/educators"
  }, external_react_default.a.createElement("a", null, "Educators"))), external_react_default.a.createElement("li", {
    className: "students menu-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/students"
  }, external_react_default.a.createElement("a", null, "Students"))), external_react_default.a.createElement("li", {
    className: "askapro menu-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/ask-a-pro"
  }, external_react_default.a.createElement("a", null, "Ask A Pro"))), external_react_default.a.createElement("li", {
    className: "contact menu-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/contact"
  }, external_react_default.a.createElement("a", null, "Contact"))))))), external_react_default.a.createElement("div", {
    className: "adpt-header-apps"
  }, external_react_default.a.createElement("span", null, "Get the app!"), external_react_default.a.createElement("div", {
    className: "adpt-app-link"
  }, external_react_default.a.createElement("a", {
    href: "#"
  }, external_react_default.a.createElement("i", {
    className: "fab fa-apple"
  }))), external_react_default.a.createElement("div", {
    className: "adpt-app-link"
  }, external_react_default.a.createElement("a", {
    href: "#"
  }, external_react_default.a.createElement("i", {
    className: "fab fa-android"
  }))), external_react_default.a.createElement("div", {
    className: "adpt-app-link"
  }, external_react_default.a.createElement("a", {
    href: "#"
  }, external_react_default.a.createElement("i", {
    className: "fab fa-windows"
  }))))));
});
// CONCATENATED MODULE: ./components/footer.js






var footer_Footer = function Footer() {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("footer", {
    role: "contentinfo",
    className: "adpt-footer"
  }, external_react_default.a.createElement("adpt-inner", null, external_react_default.a.createElement("div", {
    className: "adpt-footer-block block-1"
  }, external_react_default.a.createElement("div", {
    className: "adpt-footer-block-inner"
  }, external_react_default.a.createElement("div", {
    className: "adpt-footer-heading"
  }), external_react_default.a.createElement("div", {
    className: "adpt-footer-info"
  }, external_react_default.a.createElement("span", {
    className: "footer-info-inner"
  }, "hello@adoption-education.com"), external_react_default.a.createElement("span", {
    className: "footer-info-inner"
  }, "817-922-6000"), external_react_default.a.createElement("span", {
    className: "footer-info-inner"
  }, "6300 John Ryan Dr., Fort Worth, TX 76132")))), external_react_default.a.createElement("div", {
    className: "adpt-footer-block block-2"
  }, external_react_default.a.createElement("div", {
    className: "adpt-footer-block-inner"
  }, external_react_default.a.createElement("div", {
    className: "adpt-footer-heading"
  }, external_react_default.a.createElement("h4", null, "Curriculum Portal")), external_react_default.a.createElement("div", {
    className: "input-block"
  }, external_react_default.a.createElement("input", {
    type: "text",
    placeholder: "Username",
    name: "adpt-user"
  }), external_react_default.a.createElement("input", {
    type: "text",
    placeholder: "Password",
    name: "adpt-pwd"
  })), external_react_default.a.createElement("button", null, "Login"))), external_react_default.a.createElement("div", {
    className: "adpt-footer-block block-3"
  }, external_react_default.a.createElement("div", {
    className: "adpt-footer-block-inner"
  }, external_react_default.a.createElement("div", {
    className: "adpt-footer-heading"
  }, external_react_default.a.createElement("h4", null, "Pregnant?")), external_react_default.a.createElement("div", {
    className: "adpt-footer-info"
  }, external_react_default.a.createElement("span", {
    className: "footer-info-inner"
  }, "Chat with a Pregnancy Options counselor now:"), external_react_default.a.createElement("span", {
    className: "footer-info-inner"
  }, external_react_default.a.createElement("a", {
    className: "btn",
    href: "#"
  }, external_react_default.a.createElement("i", {
    className: "fas fa-globe"
  }), "Website"), "\xA0\xA0", external_react_default.a.createElement("a", {
    className: "btn",
    href: "#"
  }, external_react_default.a.createElement("i", {
    className: "fas fa-phone"
  }), "Call Now"))))), external_react_default.a.createElement("div", {
    className: "adpt-footer-block block-4"
  }, external_react_default.a.createElement("div", {
    className: "adpt-footer-block-inner"
  }, external_react_default.a.createElement("div", {
    className: "adpt-footer-heading"
  }, external_react_default.a.createElement("h4", null, "AdoptED is presented by")), external_react_default.a.createElement("div", {
    className: "gcfa-logo"
  }, external_react_default.a.createElement(svg["a" /* default */].GladneyLogo, null)))))), external_react_default.a.createElement("adpt-post-footer", null));
};

/* harmony default export */ var footer = (footer_Footer);
// EXTERNAL MODULE: ./sass/adopted.sass
var adopted = __webpack_require__("15Pj");

// CONCATENATED MODULE: ./components/page.js






var page_Page = function Page(props) {
  return external_react_default.a.createElement("main", {
    className: props.className
  }, external_react_default.a.createElement(header, null), props.children, external_react_default.a.createElement(footer, null));
};

/* harmony default export */ var page = __webpack_exports__["a"] = (page_Page);

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/page.js + 2 modules
var page = __webpack_require__("PQhJ");

// EXTERNAL MODULE: ./components/svg.js
var svg = __webpack_require__("6dtT");

// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__("pNaP");

// CONCATENATED MODULE: ./utilities/firebase.js

var config = {
  apiKey: "AIzaSyCoKiL8H0_ztRhZTBk4fXfmOSt_ANuseZg",
  authDomain: "adopted-web.firebaseapp.com",
  databaseURL: "https://adopted-web.firebaseio.com",
  projectId: "adopted-web",
  storageBucket: "adopted-web.appspot.com",
  messagingSenderId: "820798129006",
  appId: "1:820798129006:web:b439478e6234f7c0"
};
/* harmony default export */ var firebase = (!external_firebase_["apps"].length ? external_firebase_["initializeApp"](config) : external_firebase_["app"]());
// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_Front; });












 //console.log(process.env.NODE_ENV)

var pages_Front =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Front, _Component);

  function Front(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Front);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Front).call(this, props));
    _this.state = {
      init: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Front, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.itemsRef = firebase.firestore().doc('/pages/front').onSnapshot(function (snap) {
        _this2.setState(_objectSpread({
          init: true
        }, snap.data()));
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.itemsRef();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.init) return null;
      var content = this.state.content;
      return external_react_default.a.createElement(page["a" /* default */], {
        className: "adpt-front-page"
      }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, this.state.title || 'AdoptED')), external_react_default.a.createElement("adpt-stage", {
        class: "adpt-stage"
      }, external_react_default.a.createElement("div", {
        className: "adpt-stage-inner"
      }, external_react_default.a.createElement("div", {
        className: "adpt-stage-column"
      }, external_react_default.a.createElement("h1", null, content.stage.headline || 'headline')), external_react_default.a.createElement("div", {
        className: "adpt-stage-column"
      }, external_react_default.a.createElement("figure", {
        className: "adpt-block-anim"
      }, external_react_default.a.createElement(svg["a" /* default */].GabbyAnim, null))))), external_react_default.a.createElement("section", {
        className: "adpt-fold"
      }, external_react_default.a.createElement("adpt-inner", null, external_react_default.a.createElement("div", {
        className: "adpt-fold-graybox"
      }, external_react_default.a.createElement("p", null, content.fold.text), external_react_default.a.createElement("a", {
        className: "btn",
        href: content.fold.link
      }, "Learn More")))), external_react_default.a.createElement("section", {
        className: "adpt-panel-block"
      }, external_react_default.a.createElement("div", {
        className: "adpt-panel-block-inner"
      }, content.block1.map(function (block) {
        return external_react_default.a.createElement("article", {
          className: "adpt-panel"
        }, external_react_default.a.createElement(link_default.a, {
          href: block.link
        }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("figure", {
          className: "wp-block-image"
        }, external_react_default.a.createElement("img", {
          className: "w-constrained",
          src: block.image,
          alt: block.text
        })), external_react_default.a.createElement("div", {
          className: "adpt-panel-overlay"
        }, external_react_default.a.createElement("div", {
          className: "adpt-panel-topright"
        }, external_react_default.a.createElement(svg["a" /* default */].RightArrow, null), external_react_default.a.createElement("span", {
          className: "adpt-panel-vert"
        }, "Learn More")), external_react_default.a.createElement("div", {
          className: "adpt-panel-info"
        }, external_react_default.a.createElement("h4", null, block.title), external_react_default.a.createElement("p", null, block.text))))));
      }))), external_react_default.a.createElement("section", {
        className: "adpt-ctas"
      }, external_react_default.a.createElement("div", {
        className: "adpt-ctas-inner"
      }, content.ctas.map(function (cta) {
        var Icon = svg["a" /* default */][cta.icon];
        return external_react_default.a.createElement("div", {
          className: "adpt-cta"
        }, external_react_default.a.createElement("div", {
          className: "adpt-icon"
        }, external_react_default.a.createElement(Icon, null)), external_react_default.a.createElement("div", {
          className: "adpt-cta-text"
        }, external_react_default.a.createElement("h5", null, cta.title), external_react_default.a.createElement("p", null, cta.text)), external_react_default.a.createElement("div", {
          className: "adpt-cta-more"
        }, external_react_default.a.createElement("a", {
          className: "btn",
          href: "#"
        }, "More")));
      }))), external_react_default.a.createElement("section", {
        className: "adpt-panel-block"
      }, external_react_default.a.createElement("div", {
        className: "adpt-panel-block-inner"
      }, content.block2.map(function (block) {
        return external_react_default.a.createElement("article", {
          className: "adpt-panel"
        }, external_react_default.a.createElement(link_default.a, {
          href: block.link
        }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("figure", {
          className: "wp-block-image"
        }, external_react_default.a.createElement("img", {
          className: "w-constrained",
          src: block.image,
          alt: block.text
        })), external_react_default.a.createElement("div", {
          className: "adpt-panel-overlay"
        }, external_react_default.a.createElement("div", {
          className: "adpt-panel-topright"
        }, external_react_default.a.createElement(svg["a" /* default */].RightArrow, null), external_react_default.a.createElement("span", {
          className: "adpt-panel-vert"
        }, "Learn More")), external_react_default.a.createElement("div", {
          className: "adpt-panel-info"
        }, external_react_default.a.createElement("h4", null, block.title), external_react_default.a.createElement("p", null, block.text))))));
      }))));
    }
  }]);

  return Front;
}(external_react_["Component"]);



/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });