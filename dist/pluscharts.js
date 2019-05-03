var pluscharts = typeof pluscharts === "object" ? pluscharts : {}; pluscharts["draw"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/axes.js":
/*!************************!*\
  !*** ./src/js/axes.js ***!
  \************************/
/*! exports provided: generateAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateAxis", function() { return generateAxis; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities.js");

var generateAxis = (config, innerHeight, chartGroup, translateChartGroup, yScale, xScale) => {
  if (config.type === "bar") {
    // Discrete axis
    var y_axis = d3.axisLeft().scale(yScale).ticks(config.dataset.data.length).tickFormat(function (d, i) {
      return d;
    }).tickSizeOuter(0);
  } else {
    var y_axis = d3.axisLeft().scale(yScale);
  }

  if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(config.options.axes.y.ticks)) {
    y_axis.ticks(config.options.axes.y.ticks);
  }

  if (config.type === "column") {
    // Discrete axis
    var x_axis = d3.axisBottom().scale(xScale).ticks(config.dataset.data.length).tickFormat(function (d, i) {
      return d;
    }).tickSizeOuter(0);
  } else {
    var x_axis = d3.axisBottom().scale(xScale);
  }

  if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(config.options.axes.x.ticks)) {
    x_axis.ticks(config.options.axes.x.ticks);
  }

  if (config.options.axes.y.display) {
    var yAxisElement = chartGroup.append("g").call(y_axis);
    yAxisElement.attr("transform", "translate(0, 0)").attr("text-anchor", "end").attr("class", "pc-y-axis");
  }

  if (config.options.axes.x.display) {
    var xAxisElement = chartGroup.append("g").call(x_axis);
    xAxisElement.attr("transform", "translate(0, " + innerHeight + ")").attr("text-anchor", "middle").attr("class", "pc-x-axis");
  }

  chartGroup.attr("transform", "translate(" + translateChartGroup.x + ", " + translateChartGroup.y + ")");
};

/***/ }),

/***/ "./src/js/bar.js":
/*!***********************!*\
  !*** ./src/js/bar.js ***!
  \***********************/
/*! exports provided: drawBarChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawBarChart", function() { return drawBarChart; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities.js");
/* harmony import */ var _axes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axes */ "./src/js/axes.js");
/* harmony import */ var _legends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legends */ "./src/js/legends.js");
/* harmony import */ var _mouseover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mouseover */ "./src/js/mouseover.js");




/* Bar chart */

var drawBarChart = config => {
  var chartWidth, chartHeight;
  var marginForAxis = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 30
  };
  var translateChartGroup = {
    x: 0,
    y: 0
  };
  var options = config.options;
  var data = config.dataset.data;
  var bg = config.dataset.backgroundColor;
  var borderColor = config.dataset.borderColor;
  var borderWidth = config.dataset.borderWidth;
  var bindedElement = config.drawOn;
  var barPadding = options.barPadding;
  var label = [];
  var legendLabel = config.dataset.legendLabel;
  var legendWidth = options.legends.width;
  var legendHeight = options.legends.height;

  if (options.size.width === "container") {
    chartWidth = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["getComputedWidth"])(bindedElement);
  } else {
    chartWidth = options.size.width;
  }

  if (options.size.height === "container") {
    chartHeight = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["getComputedHeight"])(bindedElement);
  } else {
    chartHeight = options.size.height;
  }

  var innerHeight = chartHeight;
  var innerWidth = chartWidth;
  innerWidth = innerWidth - marginForAxis.left - marginForAxis.right;
  innerHeight = innerHeight - marginForAxis.top - marginForAxis.bottom;
  var svg = d3.select(bindedElement).append('svg').attr("class", "pc-chart-wrapper").attr("height", chartHeight).attr("width", chartWidth);
  var chartGroup = svg.append("g");
  var dataGroup = chartGroup.append("g");

  if (options.legends.display) {
    var legendMargin = 20;
    innerHeight = innerHeight - legendHeight - legendMargin;
    Object(_legends__WEBPACK_IMPORTED_MODULE_2__["generateLegends"])(legendHeight, legendWidth, bg, legendLabel, svg, chartHeight, chartWidth);
  } // Copy label from the data array to a separate array


  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      label[key] = data[key].label;
    }
  }

  var yScale = d3.scaleBand().domain(label).rangeRound([innerHeight, 0]).padding(barPadding);
  var xScale = d3.scaleLinear().domain([config.options.axes.x.min, config.options.axes.x.max]).range([0, innerWidth]);
  translateChartGroup.x = translateChartGroup.x + marginForAxis.left;
  translateChartGroup.y = translateChartGroup.y + marginForAxis.bottom;
  Object(_axes__WEBPACK_IMPORTED_MODULE_1__["generateAxis"])(config, innerHeight, chartGroup, translateChartGroup, yScale, xScale);
  var g = dataGroup.selectAll("rect").data(data).enter().append('g');
  var rect = g.append('rect').attr("x", 0).attr("y", function (d, i) {
    return yScale(d.label);
  }).attr("width", function (d) {
    return Math.abs(xScale(d.value));
  }).attr("height", yScale.bandwidth()).attr("fill", function (d, i) {
    if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(bg)) {
      return bg;
    }
  }).attr("stroke", function (d, i) {
    if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(borderColor)) {
      return borderColor;
    }
  }).attr("stroke-width", function (d, i) {
    if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(borderWidth)) {
      return borderWidth;
    }
  }).attr("class", "pc-bar-rect");
  Object(_mouseover__WEBPACK_IMPORTED_MODULE_3__["mouseOver"])(rect, config);

  if (options.text.display) {
    var text = g.append("text").text(function (d) {
      return d.value;
    }).attr("y", function (d, i) {
      return yScale(d.label);
    }).attr("x", function (d) {
      return xScale(d.value) + 10;
    }).attr("dominant-baseline", "text-before-edge").attr("fill", options.text.color);
  }
};

/***/ }),

/***/ "./src/js/chart.js":
/*!*************************!*\
  !*** ./src/js/chart.js ***!
  \*************************/
/*! exports provided: draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/js/config.js");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar */ "./src/js/bar.js");
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./column */ "./src/js/column.js");
/* harmony import */ var _line_area_spline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line-area-spline */ "./src/js/line-area-spline.js");
/* harmony import */ var _pie_donut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pie-donut */ "./src/js/pie-donut.js");





var draw = config => {
  switch (config.type) {
    case "bar":
      {
        Object(_config__WEBPACK_IMPORTED_MODULE_0__["completeConfig"])(_config__WEBPACK_IMPORTED_MODULE_0__["defaultBarConfig"], config);
        return Object(_bar__WEBPACK_IMPORTED_MODULE_1__["drawBarChart"])(config);
      }

    case "column":
      {
        Object(_config__WEBPACK_IMPORTED_MODULE_0__["completeConfig"])(_config__WEBPACK_IMPORTED_MODULE_0__["defaultColumnConfig"], config);
        return Object(_column__WEBPACK_IMPORTED_MODULE_2__["drawColumnChart"])(config);
      }

    case "line":
      {
        Object(_config__WEBPACK_IMPORTED_MODULE_0__["completeConfig"])(_config__WEBPACK_IMPORTED_MODULE_0__["defaultLineConfig"], config);
        return Object(_line_area_spline__WEBPACK_IMPORTED_MODULE_3__["drawLineOrAreaChart"])(config);
      }

    case "area":
      {
        Object(_config__WEBPACK_IMPORTED_MODULE_0__["completeConfig"])(_config__WEBPACK_IMPORTED_MODULE_0__["defaultAreaConfig"], config);
        return Object(_line_area_spline__WEBPACK_IMPORTED_MODULE_3__["drawLineOrAreaChart"])(config);
      }

    case "spline":
      {
        Object(_config__WEBPACK_IMPORTED_MODULE_0__["completeConfig"])(_config__WEBPACK_IMPORTED_MODULE_0__["defaultSplineConfig"], config);
        return Object(_line_area_spline__WEBPACK_IMPORTED_MODULE_3__["drawLineOrAreaChart"])(config);
      }

    case "spline-area":
      {
        Object(_config__WEBPACK_IMPORTED_MODULE_0__["completeConfig"])(_config__WEBPACK_IMPORTED_MODULE_0__["defaultSplineAreaConfig"], config);
        return Object(_line_area_spline__WEBPACK_IMPORTED_MODULE_3__["drawLineOrAreaChart"])(config);
      }

    case "pie":
      {
        Object(_config__WEBPACK_IMPORTED_MODULE_0__["completeConfig"])(_config__WEBPACK_IMPORTED_MODULE_0__["defaultPieConfig"], config);
        return Object(_pie_donut__WEBPACK_IMPORTED_MODULE_4__["drawPieDonutChart"])(config);
      }

    case "donut":
      {
        Object(_config__WEBPACK_IMPORTED_MODULE_0__["completeConfig"])(_config__WEBPACK_IMPORTED_MODULE_0__["defaultDonutConfig"], config);
        return Object(_pie_donut__WEBPACK_IMPORTED_MODULE_4__["drawPieDonutChart"])(config);
      }
  }
};

/***/ }),

/***/ "./src/js/column.js":
/*!**************************!*\
  !*** ./src/js/column.js ***!
  \**************************/
/*! exports provided: drawColumnChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawColumnChart", function() { return drawColumnChart; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities.js");
/* harmony import */ var _axes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axes */ "./src/js/axes.js");
/* harmony import */ var _legends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legends */ "./src/js/legends.js");
/* harmony import */ var _mouseover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mouseover */ "./src/js/mouseover.js");




/* Bar chart */

var drawColumnChart = config => {
  var chartWidth, chartHeight;
  var marginForAxis = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 30
  };
  var translateChartGroup = {
    x: 0,
    y: 0
  };
  var options = config.options;
  var data = config.dataset.data;
  var bg = config.dataset.backgroundColor;
  var borderColor = config.dataset.borderColor;
  var borderWidth = config.dataset.borderWidth;
  var bindedElement = config.drawOn;
  var barPadding = options.barPadding;
  var label = [];
  var legendLabel = config.dataset.legendLabel;
  var legendWidth = options.legends.width;
  var legendHeight = options.legends.height;

  if (options.size.width === "container") {
    chartWidth = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["getComputedWidth"])(bindedElement);
  } else {
    chartWidth = options.size.width;
  }

  if (options.size.height === "container") {
    chartHeight = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["getComputedHeight"])(bindedElement);
  } else {
    chartHeight = options.size.height;
  }

  var innerHeight = chartHeight;
  var innerWidth = chartWidth;
  innerWidth = innerWidth - marginForAxis.left - marginForAxis.right;
  innerHeight = innerHeight - marginForAxis.top - marginForAxis.bottom;
  var svg = d3.select(bindedElement).append('svg').attr("class", "pc-chart-wrapper").attr("height", chartHeight).attr("width", chartWidth);
  var chartGroup = svg.append("g");
  var dataGroup = chartGroup.append("g");

  if (options.legends.display) {
    var legendMargin = 20;
    innerHeight = innerHeight - legendHeight - legendMargin;
    Object(_legends__WEBPACK_IMPORTED_MODULE_2__["generateLegends"])(legendHeight, legendWidth, bg, legendLabel, svg, chartHeight, chartWidth);
  } // Copy label from the data array to a separate array


  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      label[key] = data[key].label;
    }
  }

  var xScale = d3.scaleBand().domain(label).rangeRound([0, innerWidth]).padding(barPadding);
  var yScale = d3.scaleLinear().domain([config.options.axes.y.min, config.options.axes.y.max]).range([innerHeight, 0]);
  translateChartGroup.x = translateChartGroup.x + marginForAxis.left;
  translateChartGroup.y = translateChartGroup.y + marginForAxis.bottom;
  Object(_axes__WEBPACK_IMPORTED_MODULE_1__["generateAxis"])(config, innerHeight, chartGroup, translateChartGroup, yScale, xScale);
  var g = dataGroup.selectAll("rect").data(data).enter().append('g');
  var rect = g.append('rect').attr("y", function (d, i) {
    return yScale(d.value);
  }).attr("x", function (d, i) {
    return xScale(d.label);
  }).attr("height", function (d) {
    return innerHeight - yScale(d.value);
  }).attr("width", xScale.bandwidth()).attr("fill", function (d, i) {
    if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(bg)) {
      return bg;
    }
  }).attr("stroke", function (d, i) {
    if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(borderColor)) {
      return borderColor;
    }
  }).attr("stroke-width", function (d, i) {
    if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(borderWidth)) {
      return borderWidth;
    }
  }).attr("class", "pc-column-rect");
  Object(_mouseover__WEBPACK_IMPORTED_MODULE_3__["mouseOver"])(rect, config);

  if (options.text.display) {
    var text = g.append("text").text(function (d) {
      return d.value;
    }).attr("x", function (d, i) {
      return xScale(d.label);
    }).attr("y", function (d) {
      return yScale(d.value) - 20;
    }).attr("dominant-baseline", "text-before-edge").attr("fill", options.text.color);
  }
};

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! exports provided: defaultBarConfig, defaultColumnConfig, defaultLineConfig, defaultAreaConfig, defaultSplineConfig, defaultSplineAreaConfig, defaultPieConfig, defaultDonutConfig, completeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBarConfig", function() { return defaultBarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultColumnConfig", function() { return defaultColumnConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLineConfig", function() { return defaultLineConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultAreaConfig", function() { return defaultAreaConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSplineConfig", function() { return defaultSplineConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSplineAreaConfig", function() { return defaultSplineAreaConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPieConfig", function() { return defaultPieConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDonutConfig", function() { return defaultDonutConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeConfig", function() { return completeConfig; });
var defaultBarConfig = {
  drawOn: undefined,
  type: "bar",
  dataset: {
    data: undefined,
    backgroundColor: "#7d85df",
    //can be array or single color
    borderColor: "#2430b6",
    borderWidth: 2,
    label: undefined,
    legend: undefined
  },
  options: {
    barPadding: 5,
    barHeight: 15,
    text: {
      display: true,
      color: "#6c478c"
    },
    axes: {
      x: {
        display: true,
        scale: 2,
        min: 0,
        max: 100
      },
      y: {
        display: true,
        scale: 3,
        min: 0,
        max: 100
      }
    },
    legends: {
      display: true,
      width: 20,
      height: 20
    }
  }
};
var defaultColumnConfig = {
  drawOn: undefined,
  type: "column",
  dataset: {
    data: undefined,
    backgroundColor: "#7d85df",
    //can be array or single color
    borderColor: "#2430b6",
    borderWidth: 2,
    label: undefined,
    legend: undefined
  },
  options: {
    barPadding: 5,
    barWidth: 15,
    text: {
      display: true,
      color: "#6c478c"
    },
    axes: {
      x: {
        display: true,
        scale: 3,
        min: 0,
        max: 100
      },
      y: {
        display: true,
        scale: 3,
        min: 0,
        max: 100
      }
    },
    legends: {
      display: true,
      width: 20,
      height: 20
    }
  }
};
var defaultLineConfig = {
  drawOn: undefined,
  type: "line",
  dataset: {
    data: undefined,
    lineWidth: 2,
    legendLabel: undefined
  },
  options: {
    text: {
      display: true,
      color: "#6c478c"
    },
    points: {
      display: true,
      radius: 3
    },
    axes: {
      x: {
        display: true,
        scale: 1,
        min: 0,
        max: 160
      },
      y: {
        display: true,
        scale: 3,
        min: 0,
        max: 100
      }
    },
    legends: {
      display: false,
      width: 20,
      height: 20
    }
  }
};
var defaultAreaConfig = {
  drawOn: undefined,
  type: "area",
  dataset: {
    data: undefined,
    lineColor: "#e46161",
    lineWidth: 2,
    fillColor: "#d8aabe",
    legendLabel: undefined
  },
  options: {
    text: {
      display: true,
      color: "#6c478c"
    },
    points: {
      display: true,
      radius: 3
    },
    axes: {
      x: {
        display: true,
        scale: 3,
        min: 0,
        max: 100
      },
      y: {
        display: true,
        scale: 3,
        min: 0,
        max: 100
      }
    },
    legends: {
      display: true,
      width: 20,
      height: 20
    }
  }
};
var defaultSplineConfig = {
  drawOn: undefined,
  type: "spline",
  dataset: {
    data: undefined,
    lineColor: "#006dd5",
    lineWidth: 2,
    legendLabel: undefined
  },
  options: {
    text: {
      display: true,
      color: "#6c478c"
    },
    points: {
      display: true,
      radius: 3
    },
    axes: {
      x: {
        display: true,
        scale: 3,
        min: 0,
        max: 100
      },
      y: {
        display: true,
        scale: 3,
        min: 0,
        max: 100
      }
    },
    legends: {
      display: true,
      width: 20,
      height: 20
    }
  }
};
var defaultSplineAreaConfig = {
  drawOn: undefined,
  type: "spline-area",
  dataset: {
    data: undefined,
    lineColor: "#e46161",
    lineWidth: 2,
    fillColor: "#d8aabe",
    legendLabel: undefined
  },
  options: {
    text: {
      display: true,
      color: "#6c478c"
    },
    points: {
      display: true,
      radius: 3
    },
    axes: {
      x: {
        display: true,
        scale: 3,
        min: 0,
        max: 100
      },
      y: {
        display: true,
        scale: 3,
        min: 0,
        max: 100
      }
    },
    legends: {
      display: true,
      width: 20,
      height: 20
    }
  }
};
var defaultPieConfig = {
  drawOn: undefined,
  type: "pie",
  dataset: {
    data: undefined,
    backgroundColor: ["#6182ce", "#d18a96", "#81c0a7"],
    borderColor: "#ffffff",
    borderWidth: 2,
    label: undefined
  },
  options: {
    text: {
      display: true,
      color: "#fdfdfd"
    },
    legends: {
      display: true,
      width: 20,
      height: 20
    }
  }
};
var defaultDonutConfig = {
  drawOn: undefined,
  type: "donut",
  dataset: {
    data: undefined,
    backgroundColor: ["#324e8f", "#9c4a64", "#20b98e"],
    borderColor: "#ffffff",
    borderWidth: 2,
    label: undefined
  },
  options: {
    width: 60,
    text: {
      display: true,
      color: "#f6f6f6"
    },
    legends: {
      display: true,
      width: 20,
      height: 20
    }
  }
};
var completeConfig = (defaultConfig, config) => {
  for (var key in defaultConfig) {
    if (findById(config, key)) {
      if (typeof defaultConfig[key] === 'object') {
        completeConfig(defaultConfig[key], config[key]);
      }
    } else {
      config[key] = defaultConfig[key];
    }
  }
};

function findById(obj, id) {
  var result = false;

  for (var key in obj) {
    if (id in obj) {
      result = true;
      break;
    } else {
      if (typeof obj[key] === 'object') {
        return findById(obj[key], id);
      }
    }
  }

  return result;
}

/***/ }),

/***/ "./src/js/hover-color.js":
/*!*******************************!*\
  !*** ./src/js/hover-color.js ***!
  \*******************************/
/*! exports provided: changeColorOnMouseOver, resetColorOnMouseout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeColorOnMouseOver", function() { return changeColorOnMouseOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetColorOnMouseout", function() { return resetColorOnMouseout; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities.js");

var changeColorOnMouseOver = (hoverBg, i, element) => {
  if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(hoverBg)) {
    d3.select(element).attr("fill", function () {
      if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isArray"])(hoverBg)) {
        return hoverBg[i];
      } else {
        return hoverBg;
      }
    });
  } else {
    d3.select(element).attr("fill-opacity", .7);
  }
};
var resetColorOnMouseout = (hoverBg, bg, element, i) => {
  if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(hoverBg)) {
    d3.select(element).attr("fill", function () {
      if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isArray"])(bg)) {
        return bg[i];
      } else {
        return bg;
      }
    });
  } else {
    d3.select(element).attr("fill-opacity", 1);
  }
};

/***/ }),

/***/ "./src/js/hover-expand.js":
/*!********************************!*\
  !*** ./src/js/hover-expand.js ***!
  \********************************/
/*! exports provided: expandCircle, resetCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandCircle", function() { return expandCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCircle", function() { return resetCircle; });
var expandCircle = element => {
  var originalRadius = +d3.select(element).attr("r");
  var hoverRadius = originalRadius + 2;
  d3.select(element).attr("r", hoverRadius);
};
var resetCircle = element => {
  var hoverRadius = +d3.select(element).attr("r");
  var originalRadius = hoverRadius - 2;
  d3.select(element).attr("r", originalRadius);
};

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart */ "./src/js/chart.js");

/* harmony default export */ __webpack_exports__["default"] = (_chart__WEBPACK_IMPORTED_MODULE_0__["draw"]);

/***/ }),

/***/ "./src/js/legends.js":
/*!***************************!*\
  !*** ./src/js/legends.js ***!
  \***************************/
/*! exports provided: generateLegends */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateLegends", function() { return generateLegends; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities.js");

var generateLegends = (legendHeight, legendWidth, bg, legendLabel, svg, chartHeight, chartWidth) => {
  var legendGroup = svg.append('g').attr("class", "pc-legend-group");
  var legendSpacing = 4;
  var legendPadding = 20;

  if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isArray"])(legendLabel)) {
    var legendElement = legendGroup.selectAll("g").data(legendLabel).enter().append('g');
  } else {
    var legendElement = legendGroup.append('g');
  }

  legendElement.append('rect').attr('width', legendWidth).attr('height', legendHeight).style('fill', function (d, i) {
    if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isArray"])(bg)) {
      return bg[i];
    } else {
      return bg;
    }
  });
  legendElement.append('text').attr('x', legendWidth + legendSpacing).attr('y', legendHeight - legendSpacing).text(function (d, i) {
    if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isArray"])(legendLabel)) {
      return legendLabel[i];
    } else {
      return legendLabel;
    }
  }).attr("class", "pc-legend-text");
  var previousLegendPosition = 0;
  legendElement.attr('transform', function (d, i) {
    if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isArray"])(legendLabel)) {
      var currentLegendPosition = previousLegendPosition;
      previousLegendPosition = previousLegendPosition + this.getBBox().width + legendPadding;
      return 'translate(' + currentLegendPosition + ',0)';
    } else {
      return 'translate(0,0)';
    }
  });
  var legendGroupHeight = legendGroup.node().getBBox().height;
  var legendGroupPositionX = (chartWidth - legendGroup.node().getBBox().width) / 2;
  legendGroup.attr('transform', function () {
    return 'translate(' + legendGroupPositionX + ',' + (chartHeight - legendGroupHeight) + ')';
  });
};

/***/ }),

/***/ "./src/js/line-area-spline.js":
/*!************************************!*\
  !*** ./src/js/line-area-spline.js ***!
  \************************************/
/*! exports provided: drawLineOrAreaChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawLineOrAreaChart", function() { return drawLineOrAreaChart; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities.js");
/* harmony import */ var _axes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axes */ "./src/js/axes.js");
/* harmony import */ var _legends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legends */ "./src/js/legends.js");
/* harmony import */ var _mouseover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mouseover */ "./src/js/mouseover.js");




/* Line chart */

var drawLineOrAreaChart = config => {
  var chartWidth, chartHeight;
  var marginForAxis = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 30
  };
  var translateChartGroup = {
    x: 0,
    y: 0
  };
  var bindedElement = config.drawOn;
  var options = config.options;
  var data = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["sortAscendingByValue"])(config.dataset.data, config.dataset.data.label);
  var lineColor = config.dataset.lineColor;
  var lineWidth = config.dataset.lineWidth;
  var fillColor = config.dataset.fillColor;
  var legendLabel = config.dataset.legendLabel;
  var legendWidth = options.legends.width;
  var legendHeight = options.legends.height;

  if (options.size.width === "container") {
    chartWidth = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["getComputedWidth"])(bindedElement);
  } else {
    chartWidth = options.size.width;
  }

  if (options.size.height === "container") {
    chartHeight = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["getComputedHeight"])(bindedElement);
  } else {
    chartHeight = options.size.height;
  }

  var innerHeight = chartHeight;
  var innerWidth = chartWidth;
  innerWidth = innerWidth - marginForAxis.left - marginForAxis.right;
  innerHeight = innerHeight - marginForAxis.top - marginForAxis.bottom;
  var svg = d3.select(bindedElement).append('svg').attr("class", "pc-chart-wrapper").attr("height", chartHeight).attr("width", chartWidth);
  var chartGroup = svg.append("g");
  var dataGroup = chartGroup.append("g");

  if (options.legends.display) {
    var legendMargin = 20;
    innerHeight = innerHeight - legendHeight - legendMargin;

    if (config.type === "area") {
      Object(_legends__WEBPACK_IMPORTED_MODULE_2__["generateLegends"])(legendHeight, legendWidth, fillColor, legendLabel, svg, chartHeight, chartWidth);
    } else {
      Object(_legends__WEBPACK_IMPORTED_MODULE_2__["generateLegends"])(legendHeight, legendWidth, lineColor, legendLabel, svg, chartHeight, chartWidth);
    }
  }

  var yScale = d3.scaleLinear().domain([options.axes.y.min, options.axes.y.max]).range([innerHeight, 0]);
  var xScale = d3.scaleLinear().domain([config.options.axes.x.min, config.options.axes.x.max]).range([0, innerWidth]);
  translateChartGroup.x = translateChartGroup.x + marginForAxis.left;
  translateChartGroup.y = translateChartGroup.y + marginForAxis.bottom;
  Object(_axes__WEBPACK_IMPORTED_MODULE_1__["generateAxis"])(config, innerHeight, chartGroup, translateChartGroup, yScale, xScale);

  if (config.type === "area") {
    var area = d3.area().x(function (d) {
      return xScale(d.label);
    }).y1(function (d) {
      return yScale(d.value);
    }).y0(yScale(0)).curve(d3.curveLinear);
    var path = dataGroup.append("path").datum(data).attr("fill", fillColor).attr("stroke", lineColor).attr("stroke-width", lineWidth).attr("d", area);
  } else if (config.type === "line") {
    var line = d3.line().x(function (d) {
      return xScale(d.label);
    }).y(function (d) {
      return yScale(d.value);
    }).curve(d3.curveLinear);
    var path = dataGroup.append("path").attr("d", line(data)).attr("fill", "none").attr("stroke", lineColor).attr("stroke-width", lineWidth);
  } else if (config.type === "spline") {
    var line = d3.line().x(function (d) {
      return xScale(d.label);
    }).y(function (d) {
      return yScale(d.value);
    }).curve(d3.curveMonotoneX);
    var path = dataGroup.append("path").attr("d", line(data)).attr("fill", "none").attr("stroke", lineColor).attr("stroke-width", lineWidth);
  } else {
    var area = d3.area().x(function (d) {
      return xScale(d.label);
    }).y1(function (d) {
      return yScale(d.value);
    }).y0(yScale(0)).curve(d3.curveMonotoneX);
    var path = dataGroup.append("path").datum(data).attr("fill", fillColor).attr("stroke", lineColor).attr("stroke-width", lineWidth).attr("d", area);
  }

  if (options.text.display) {
    var g = dataGroup.append('g').attr('class', "pc-text");
    var text = g.selectAll("text").data(data).enter().append("text").text(function (d) {
      return d.value;
    }).attr("y", function (d) {
      return yScale(d.value);
    }).attr("x", function (d) {
      return xScale(d.label);
    }).attr("dominant-baseline", "text-before-edge").attr("fill", options.text.color);
  }

  if (options.points.display) {
    var g = dataGroup.append("g");
    var points = g.selectAll("circle").data(data).enter().append("circle").text(function (d) {
      return d.value;
    }).attr("class", "pc-point-circle").attr("r", options.points.radius).attr("cy", function (d) {
      return yScale(d.value);
    }).attr("cx", function (d) {
      return xScale(d.label);
    }).attr("dominant-baseline", "text-before-edge").attr("fill", "#ffffff").attr("stroke", options.points.color).attr("stroke", function () {
      if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(options.points.color)) {
        return options.points.color;
      } else {
        return lineColor;
      }
    }).attr("stroke-width", 2);
    Object(_mouseover__WEBPACK_IMPORTED_MODULE_3__["mouseOver"])(points, config, svg);
  }
};

/***/ }),

/***/ "./src/js/mouseover.js":
/*!*****************************!*\
  !*** ./src/js/mouseover.js ***!
  \*****************************/
/*! exports provided: mouseOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseOver", function() { return mouseOver; });
/* harmony import */ var _hover_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hover-color */ "./src/js/hover-color.js");
/* harmony import */ var _hover_expand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hover-expand */ "./src/js/hover-expand.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip */ "./src/js/tooltip.js");



var mouseOver = (element, config) => {
  var bg = config.dataset.backgroundColor;
  var hoverBg = config.dataset.hoverBackgroundColor;
  var data = config.dataset.data;
  var bindedElement = d3.select(config.drawOn);
  element.on("mouseover", function (d, i) {
    Object(_hover_color__WEBPACK_IMPORTED_MODULE_0__["changeColorOnMouseOver"])(hoverBg, i, this);
    Object(_tooltip__WEBPACK_IMPORTED_MODULE_2__["initTooltip"])(bindedElement, data, i);

    if (d3.select(this).classed("pc-point-circle")) {
      Object(_hover_expand__WEBPACK_IMPORTED_MODULE_1__["expandCircle"])(this);
    }
  }).on("mousemove", function (d, i) {
    Object(_tooltip__WEBPACK_IMPORTED_MODULE_2__["moveTooltip"])(bindedElement);
  }).on("mouseout", function (d, i) {
    Object(_hover_color__WEBPACK_IMPORTED_MODULE_0__["resetColorOnMouseout"])(hoverBg, bg, this, i);
    Object(_tooltip__WEBPACK_IMPORTED_MODULE_2__["removeTooltip"])();

    if (d3.select(this).classed("pc-point-circle")) {
      Object(_hover_expand__WEBPACK_IMPORTED_MODULE_1__["resetCircle"])(this);
    }
  });
};

/***/ }),

/***/ "./src/js/pie-donut.js":
/*!*****************************!*\
  !*** ./src/js/pie-donut.js ***!
  \*****************************/
/*! exports provided: drawPieDonutChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPieDonutChart", function() { return drawPieDonutChart; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities.js");
/* harmony import */ var _legends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legends */ "./src/js/legends.js");
/* harmony import */ var _mouseover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mouseover */ "./src/js/mouseover.js");



/* Pie and donut chart */

var drawPieDonutChart = config => {
  var chartWidth, chartHeight;
  var bindedElement = config.drawOn;
  var data = config.dataset.data;
  var bg = config.dataset.backgroundColor;
  var borderColor = config.dataset.borderColor;
  var borderWidth = config.dataset.borderWidth;
  var options = config.options;
  var legendWidth = options.legends.width;
  var legendHeight = options.legends.height;
  var label = []; // Copy label from the data array to a separate array

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      label[key] = data[key].label;
    }
  }

  if (options.size.width === "container") {
    chartWidth = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["getComputedWidth"])(bindedElement);
  } else {
    chartWidth = options.size.width;
  }

  if (options.size.height === "container") {
    chartHeight = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["getComputedHeight"])(bindedElement);
  } else {
    chartHeight = options.size.height;
  }

  chartWidth = Math.min(chartHeight, chartWidth);
  chartHeight = Math.min(chartHeight, chartWidth);
  var innerHeight = chartHeight;
  var innerWidth = chartWidth;
  var svg = d3.select(bindedElement).append('svg').attr("height", chartHeight).attr("width", chartWidth);

  if (options.legends.display) {
    var legendMargin = 20;
    innerHeight = innerHeight - legendHeight - legendMargin;
    Object(_legends__WEBPACK_IMPORTED_MODULE_1__["generateLegends"])(legendHeight, legendWidth, bg, label, svg, chartHeight, chartWidth);
  }

  var radius = Math.min(innerWidth, innerHeight) / 2 - borderWidth;
  var innerRadius = 0;
  var wrapperGroup = svg.append("g").attr("transform", "translate(" + (chartWidth - Math.min(innerWidth, innerHeight)) / 2 + ", 0)");
  var g = wrapperGroup.append("g").attr("transform", "translate(" + (radius + borderWidth) + "," + (radius + borderWidth) + ")");

  if (config.type === "donut") {
    var outerWidth = config.options.width;
    innerRadius = radius - outerWidth;
  }

  var path = d3.arc().outerRadius(radius).innerRadius(innerRadius);
  var pie = d3.pie().sort(null).value(function (d) {
    return d.value;
  });
  var arc = g.selectAll(".pc-arc").data(pie(data)).enter().append("g").attr("class", "pc-arc");
  arc.append("path").attr("d", path).attr("class", "pc-arc-path").attr("fill", function (d, i) {
    if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(bg)) {
      if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isArray"])(bg)) {
        return bg[i];
      } else {
        return bg;
      }
    }
  }).attr("stroke", function (d, i) {
    if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(borderColor)) {
      if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isArray"])(borderColor)) {
        return borderColor[i];
      } else {
        return borderColor;
      }
    }
  }).attr("stroke-width", function () {
    if (Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(borderWidth)) {
      return borderWidth;
    }
  });
  Object(_mouseover__WEBPACK_IMPORTED_MODULE_2__["mouseOver"])(arc.select("path"), config);

  if (options.text.display) {
    var textPath = d3.arc().outerRadius(radius - 30 - borderWidth).innerRadius(radius - 30 - borderWidth);
    arc.append("text").attr("transform", function (d) {
      return "translate(" + textPath.centroid(d.value) + ")";
    }).attr("fill", options.text.color).attr("text-anchor", "middle").text(function (d) {
      return d.value;
    });
  }
};

/***/ }),

/***/ "./src/js/tooltip.js":
/*!***************************!*\
  !*** ./src/js/tooltip.js ***!
  \***************************/
/*! exports provided: initTooltip, moveTooltip, removeTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTooltip", function() { return initTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveTooltip", function() { return moveTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTooltip", function() { return removeTooltip; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities.js");

var initTooltip = (bindedElement, data, i) => {
  var div = bindedElement.append("g").attr("class", "pc-tooltip").html(function () {
    var tooltipContent = "" + data[i].label + "," + data[i].value;
    return tooltipContent;
  });
  positionTooltip(bindedElement);
};
var moveTooltip = bindedElement => {
  positionTooltip(bindedElement);
};
var removeTooltip = () => {
  d3.selectAll(".pc-tooltip").remove();
};

var positionTooltip = bindedElement => {
  bindedElement.style("position", "relative");
  var bindedElementWidth = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["getComputedWidth"])(bindedElement.node());
  var bindedElementHeight = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["getComputedHeight"])(bindedElement.node());
  var mousePositionX = d3.mouse(bindedElement.node())[0];
  var mousePositionY = d3.mouse(bindedElement.node())[1];
  var tooltipRight = "auto",
      tooltipLeft = "auto",
      tooltipTop = "auto",
      tooltipBottom = "auto";
  var tooltipHeight = d3.selectAll(".pc-tooltip").node().offsetHeight;
  var tooltipWidth = d3.selectAll(".pc-tooltip").node().offsetWidth;

  if (mousePositionX + tooltipWidth > bindedElementWidth) {
    tooltipRight = bindedElementWidth - mousePositionX + 10 + "px";
  } else {
    tooltipLeft = mousePositionX + 10 + "px";
  }

  if (mousePositionY + tooltipHeight > bindedElementHeight) {
    tooltipBottom = bindedElementHeight - mousePositionY + 10 + "px";
  } else {
    tooltipTop = mousePositionY + 10 + "px";
  }

  d3.selectAll(".pc-tooltip").style("left", tooltipLeft).style("right", tooltipRight).style("top", tooltipTop).style("bottom", tooltipBottom);
};

/***/ }),

/***/ "./src/js/utilities.js":
/*!*****************************!*\
  !*** ./src/js/utilities.js ***!
  \*****************************/
/*! exports provided: largest, isArray, isJson, isUndefined, isDefined, sortAscendingByValue, getComputedWidth, getComputedHeight, getParentElementByClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "largest", function() { return largest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJson", function() { return isJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortAscendingByValue", function() { return sortAscendingByValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedWidth", function() { return getComputedWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedHeight", function() { return getComputedHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentElementByClass", function() { return getParentElementByClass; });
var largest = x => {
  return d3.max(x);
};
var isArray = x => {
  return Array.isArray(x);
};
var isJson = str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
};
var isUndefined = x => {
  return typeof x === 'undefined';
};
var isDefined = x => {
  return typeof x !== 'undefined';
};
var sortAscendingByValue = (arr, value) => {
  arr.sort(function (a, b) {
    return a.x - b.x;
  });
  return arr;
};
var getComputedWidth = element => {
  var elementNode = d3.select(element).node();
  return elementNode.offsetWidth - parseFloat(getComputedStyle(elementNode).paddingLeft) - parseFloat(getComputedStyle(elementNode).paddingRight);
};
var getComputedHeight = element => {
  var elementNode = d3.select(element).node();
  return elementNode.offsetHeight - parseFloat(getComputedStyle(elementNode).paddingTop) - parseFloat(getComputedStyle(elementNode).paddingBottom);
};
var getParentElementByClass = (childElement, parentClass) => {
  var child = d3.select(childElement);
  var parent = child.select(function () {
    var element = this;

    while (!d3.select(element).classed(parentClass)) {
      element = element.parentElement;
    }

    return element;
  });
  return parent;
};

/***/ })

/******/ })["default"];
//# sourceMappingURL=pluscharts.js.map