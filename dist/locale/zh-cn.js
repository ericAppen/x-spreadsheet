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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/locale/zh-cn.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/locale/zh-cn.js":
/*!*****************************!*\
  !*** ./src/locale/zh-cn.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst message = {\n  toolbar: {\n    undo: '撤销',\n    redo: '恢复',\n    print: '打印',\n    paintformat: '格式刷',\n    clearformat: '清除格式',\n    format: '数据格式',\n    fontName: '字体',\n    fontSize: '字号',\n    fontBold: '加粗',\n    fontItalic: '倾斜',\n    underline: '下划线',\n    strike: '删除线',\n    color: '字体颜色',\n    bgcolor: '填充颜色',\n    border: '边框',\n    merge: '合并单元格',\n    align: '水平对齐',\n    valign: '垂直对齐',\n    textwrap: '自动换行',\n    freeze: '冻结',\n    autofilter: '自动筛选',\n    formula: '函数',\n    more: '更多'\n  },\n  contextmenu: {\n    copy: '复制',\n    cut: '剪切',\n    paste: '粘贴',\n    pasteValue: '粘贴数据',\n    pasteFormat: '粘贴格式',\n    hide: '隐藏',\n    insertRow: '插入行',\n    insertColumn: '插入列',\n    deleteSheet: '删除',\n    deleteRow: '删除行',\n    deleteColumn: '删除列',\n    deleteCell: '删除',\n    deleteCellText: '删除数据',\n    validation: '数据验证',\n    cellprintable: '可打印',\n    cellnonprintable: '不可打印',\n    celleditable: '可编辑',\n    cellnoneditable: '不可编辑'\n  },\n  print: {\n    size: '纸张大小',\n    orientation: '方向',\n    orientations: ['横向', '纵向']\n  },\n  format: {\n    normal: '正常',\n    text: '文本',\n    number: '数值',\n    percent: '百分比',\n    rmb: '人民币',\n    usd: '美元',\n    eur: '欧元',\n    date: '短日期',\n    time: '时间',\n    datetime: '长日期',\n    duration: '持续时间'\n  },\n  formula: {\n    sum: '求和',\n    average: '求平均值',\n    max: '求最大值',\n    min: '求最小值',\n    concat: '字符拼接',\n    _if: '条件判断',\n    and: '和',\n    or: '或'\n  },\n  validation: {\n    required: '此值必填',\n    notMatch: '此值不匹配验证规则',\n    between: '此值应在 {} 和 {} 之间',\n    notBetween: '此值不应在 {} 和 {} 之间',\n    notIn: '此值不在列表中',\n    equal: '此值应该等于 {}',\n    notEqual: '此值不应该等于 {}',\n    lessThan: '此值应该小于 {}',\n    lessThanEqual: '此值应该小于等于 {}',\n    greaterThan: '此值应该大于 {}',\n    greaterThanEqual: '此值应该大于等于 {}'\n  },\n  error: {\n    pasteForMergedCell: '无法对合并的单元格执行此操作'\n  },\n  calendar: {\n    weeks: ['日', '一', '二', '三', '四', '五', '六'],\n    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']\n  },\n  button: {\n    next: '下一步',\n    cancel: '取消',\n    remove: '删除',\n    save: '保存',\n    ok: '确认'\n  },\n  sort: {\n    desc: '降序',\n    asc: '升序'\n  },\n  filter: {\n    empty: '空白'\n  },\n  dataValidation: {\n    mode: '模式',\n    range: '单元区间',\n    criteria: '条件',\n    modeType: {\n      cell: '单元格',\n      column: '列模式',\n      row: '行模式'\n    },\n    type: {\n      list: '列表',\n      number: '数字',\n      date: '日期',\n      phone: '手机号',\n      email: '电子邮件'\n    },\n    operator: {\n      be: '在区间',\n      nbe: '不在区间',\n      lt: '小于',\n      lte: '小于等于',\n      gt: '大于',\n      gte: '大于等于',\n      eq: '等于',\n      neq: '不等于'\n    }\n  }\n};\nif (window && window.x_spreadsheet) {\n  window.x_spreadsheet.$messages = window.x_spreadsheet.$messages || {};\n  window.x_spreadsheet.$messages['zh-cn'] = message;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (message);\n\n\n//# sourceURL=webpack:///./src/locale/zh-cn.js?");

/***/ })

/******/ });