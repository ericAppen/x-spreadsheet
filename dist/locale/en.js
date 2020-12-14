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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/locale/en.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/locale/en.js":
/*!**************************!*\
  !*** ./src/locale/en.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst message = {\n  toolbar: {\n    undo: 'Undo',\n    redo: 'Redo',\n    print: 'Print',\n    paintformat: 'Paint format',\n    clearformat: 'Clear format',\n    format: 'Format',\n    fontName: 'Font',\n    fontSize: 'Font size',\n    fontBold: 'Font bold',\n    fontItalic: 'Font italic',\n    underline: 'Underline',\n    strike: 'Strike',\n    color: 'Text color',\n    bgcolor: 'Fill color',\n    border: 'Borders',\n    merge: 'Merge cells',\n    align: 'Horizontal align',\n    valign: 'Vertical align',\n    textwrap: 'Text wrapping',\n    freeze: 'Freeze cell',\n    autofilter: 'Filter',\n    formula: 'Functions',\n    more: 'More'\n  },\n  contextmenu: {\n    copy: 'Copy',\n    cut: 'Cut',\n    paste: 'Paste',\n    pasteValue: 'Paste values only',\n    pasteFormat: 'Paste format only',\n    hide: 'Hide',\n    insertRow: 'Insert row',\n    insertColumn: 'Insert column',\n    deleteSheet: 'Delete',\n    deleteRow: 'Delete row',\n    deleteColumn: 'Delete column',\n    deleteCell: 'Delete cell',\n    deleteCellText: 'Delete cell text',\n    validation: 'Data validations',\n    cellprintable: 'Enable export',\n    cellnonprintable: 'Disable export',\n    celleditable: 'Enable editing',\n    cellnoneditable: 'Disable editing'\n  },\n  print: {\n    size: 'Paper size',\n    orientation: 'Page orientation',\n    orientations: ['Landscape', 'Portrait']\n  },\n  format: {\n    normal: 'Normal',\n    text: 'Plain Text',\n    number: 'Number',\n    percent: 'Percent',\n    rmb: 'RMB',\n    usd: 'USD',\n    eur: 'EUR',\n    date: 'Date',\n    time: 'Time',\n    datetime: 'Date time',\n    duration: 'Duration'\n  },\n  formula: {\n    sum: 'Sum',\n    average: 'Average',\n    max: 'Max',\n    min: 'Min',\n    _if: 'IF',\n    and: 'AND',\n    or: 'OR',\n    concat: 'Concat'\n  },\n  validation: {\n    required: 'it must be required',\n    notMatch: 'it not match its validation rule',\n    between: 'it is between {} and {}',\n    notBetween: 'it is not between {} and {}',\n    notIn: 'it is not in list',\n    equal: 'it equal to {}',\n    notEqual: 'it not equal to {}',\n    lessThan: 'it less than {}',\n    lessThanEqual: 'it less than or equal to {}',\n    greaterThan: 'it greater than {}',\n    greaterThanEqual: 'it greater than or equal to {}'\n  },\n  error: {\n    pasteForMergedCell: 'Unable to do this for merged cells'\n  },\n  calendar: {\n    weeks: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],\n    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']\n  },\n  button: {\n    next: 'Next',\n    cancel: 'Cancel',\n    remove: 'Remove',\n    save: 'Save',\n    ok: 'OK'\n  },\n  sort: {\n    desc: 'Sort Z -> A',\n    asc: 'Sort A -> Z'\n  },\n  filter: {\n    empty: 'empty'\n  },\n  dataValidation: {\n    mode: 'Mode',\n    range: 'Cell Range',\n    criteria: 'Criteria',\n    modeType: {\n      cell: 'Cell',\n      column: 'Colun',\n      row: 'Row'\n    },\n    type: {\n      list: 'List',\n      number: 'Number',\n      date: 'Date',\n      phone: 'Phone',\n      email: 'Email'\n    },\n    operator: {\n      be: 'between',\n      nbe: 'not betwwen',\n      lt: 'less than',\n      lte: 'less than or equal to',\n      gt: 'greater than',\n      gte: 'greater than or equal to',\n      eq: 'equal to',\n      neq: 'not equal to'\n    }\n  }\n};\nif (window && window.x_spreadsheet) {\n  window.x_spreadsheet.$messages = window.x_spreadsheet.$messages || {};\n  window.x_spreadsheet.$messages['en'] = message;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (message);\n\n\n//# sourceURL=webpack:///./src/locale/en.js?");

/***/ })

/******/ });