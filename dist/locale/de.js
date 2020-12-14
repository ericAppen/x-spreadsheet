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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/locale/de.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/locale/de.js":
/*!**************************!*\
  !*** ./src/locale/de.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst message = {\n  toolbar: {\n    undo: 'Rückgängig machen',\n    redo: 'Wiederherstellen',\n    paintformat: 'Format kopieren/einfügen',\n    clearformat: 'Format löschen',\n    format: 'Format',\n    font: 'Schriftart',\n    fontSize: 'Schriftgrad',\n    fontBold: 'Fett',\n    fontItalic: 'Kursiv',\n    underline: 'Betonen',\n    strike: 'Streichen',\n    textColor: 'Text Farbe',\n    fillColor: 'Füllung Farbe',\n    border: 'Umrandung',\n    merge: 'Zellen verbinden',\n    align: 'Waagrechte Ausrichtung',\n    valign: 'Vertikale uitlijning',\n    textwrap: 'Textumbruch',\n    freeze: 'Zelle sperren',\n    formula: 'Funktionen',\n    more: 'Mehr'\n  },\n  contextmenu: {\n    copy: 'Kopieren',\n    cut: 'Ausschneiden',\n    paste: 'Einfügen',\n    pasteValue: 'Nur Werte einfügen',\n    pasteFormat: 'Nur Format einfügen',\n    insertRow: 'Zeile einfügen',\n    insertColumn: 'Spalte einfügen',\n    deleteRow: 'Zeile löschen',\n    deleteColumn: 'Spalte löschen',\n    deleteCell: 'Zelle löschen',\n    deleteCellText: 'Zellentext löschen'\n  },\n  format: {\n    normal: 'Regulär',\n    text: 'Text',\n    number: 'Nummer',\n    percent: 'Prozent',\n    rmb: 'RMB',\n    usd: 'USD',\n    date: 'Datum',\n    time: 'Termin',\n    datetime: 'Datum Termin',\n    duration: 'Dauer'\n  },\n  formula: {\n    sum: 'Summe',\n    average: 'Durchschnittliche',\n    max: 'Max',\n    min: 'Min',\n    concat: 'Concat'\n  }\n};\nif (window && window.x_spreadsheet) {\n  window.x_spreadsheet.$messages = window.x_spreadsheet.$messages || {};\n  window.x_spreadsheet.$messages['de'] = message;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (message);\n\n\n//# sourceURL=webpack:///./src/locale/de.js?");

/***/ })

/******/ });