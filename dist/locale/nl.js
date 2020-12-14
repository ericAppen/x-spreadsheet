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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/locale/nl.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/locale/nl.js":
/*!**************************!*\
  !*** ./src/locale/nl.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst message = {\n  toolbar: {\n    undo: 'Ongedaan maken',\n    redo: 'Opnieuw uitvoeren',\n    paintformat: 'Opmaak kopiëren/plakken',\n    clearformat: 'Opmaak wissen',\n    format: 'Opmaak',\n    font: 'Lettertype',\n    fontSize: 'Tekengrootte',\n    fontBold: 'Vet',\n    fontItalic: 'Cursief',\n    underline: 'Onderstrepen',\n    strike: 'Doorstrepen',\n    textColor: 'Tekstkleur',\n    fillColor: 'Opvulkleur',\n    border: 'Randen',\n    merge: 'Cellen samenvoegen',\n    align: 'Horizontale uitlijning',\n    valign: 'Verticale uitlijning',\n    textwrap: 'Terugloop',\n    freeze: 'Cel bevriezen',\n    formula: 'Functies',\n    more: 'Meer'\n  },\n  contextmenu: {\n    copy: 'Kopiëren',\n    cut: 'Knippen',\n    paste: 'Plakken',\n    pasteValue: 'Alleen waarden plakken',\n    pasteFormat: 'Alleen opmaak plakken',\n    insertRow: 'Rij invoegen',\n    insertColumn: 'Kolom invoegen',\n    deleteRow: 'Rij verwijderen',\n    deleteColumn: 'Kolom verwijderen',\n    deleteCell: 'Cel verwijderen',\n    deleteCellText: 'Celtekst verwijderen'\n  },\n  format: {\n    normal: 'Standaard',\n    text: 'Tekst',\n    number: 'Nummer',\n    percent: 'Percentage',\n    rmb: 'RMB',\n    usd: 'USD',\n    date: 'Datum',\n    time: 'Tijdstip',\n    datetime: 'Datum tijd',\n    duration: 'Duratie'\n  },\n  formula: {\n    sum: 'Som',\n    average: 'Gemiddelde',\n    max: 'Max',\n    min: 'Min',\n    concat: 'Concat'\n  }\n};\nif (window && window.x_spreadsheet) {\n  window.x_spreadsheet.$messages = window.x_spreadsheet.$messages || {};\n  window.x_spreadsheet.$messages['nl'] = message;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (message);\n\n\n//# sourceURL=webpack:///./src/locale/nl.js?");

/***/ })

/******/ });