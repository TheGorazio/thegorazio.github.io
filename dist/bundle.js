/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./css/main.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "[type='range'] {\n  -webkit-appearance: none;\n  margin: 12px 0;\n  width: 100%; }\n  [type='range']:focus {\n    outline: 0; }\n    [type='range']:focus::-webkit-slider-runnable-track {\n      background: #fbfbfc; }\n    [type='range']:focus::-ms-fill-lower {\n      background: #eceff1; }\n    [type='range']:focus::-ms-fill-upper {\n      background: #fbfbfc; }\n  [type='range']::-webkit-slider-runnable-track {\n    cursor: pointer;\n    height: 8px;\n    transition: all .2s ease;\n    width: 100%;\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(13, 13, 13, 0.2);\n    background: #eceff1;\n    border: 2px solid #cfd8dc;\n    border-radius: 5px; }\n  [type='range']::-webkit-slider-thumb {\n    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2), 0 0 4px rgba(13, 13, 13, 0.2);\n    background: #607d8b;\n    border: 2px solid #eceff1;\n    border-radius: 12px;\n    cursor: pointer;\n    height: 24px;\n    width: 24px;\n    -webkit-appearance: none;\n    margin-top: -10px; }\n  [type='range']::-moz-range-track {\n    cursor: pointer;\n    height: 8px;\n    transition: all .2s ease;\n    width: 100%;\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(13, 13, 13, 0.2);\n    background: #eceff1;\n    border: 2px solid #cfd8dc;\n    border-radius: 5px; }\n  [type='range']::-moz-range-thumb {\n    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2), 0 0 4px rgba(13, 13, 13, 0.2);\n    background: #607d8b;\n    border: 2px solid #eceff1;\n    border-radius: 12px;\n    cursor: pointer;\n    height: 24px;\n    width: 24px; }\n  [type='range']::-ms-track {\n    cursor: pointer;\n    height: 8px;\n    transition: all .2s ease;\n    width: 100%;\n    background: transparent;\n    border-color: transparent;\n    border-width: 12px 0;\n    color: transparent; }\n  [type='range']::-ms-fill-lower {\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(13, 13, 13, 0.2);\n    background: #dde3e6;\n    border: 2px solid #cfd8dc;\n    border-radius: 10px; }\n  [type='range']::-ms-fill-upper {\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(13, 13, 13, 0.2);\n    background: #eceff1;\n    border: 2px solid #cfd8dc;\n    border-radius: 10px; }\n  [type='range']::-ms-thumb {\n    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2), 0 0 4px rgba(13, 13, 13, 0.2);\n    background: #607d8b;\n    border: 2px solid #eceff1;\n    border-radius: 12px;\n    cursor: pointer;\n    height: 24px;\n    width: 24px;\n    margin-top: 0; }\n\n* {\n  padding: 0;\n  margin: 0;\n  font-family: 'Droid Sans', sans-serif; }\n\nh1,\nh2,\nh3 {\n  color: #000000; }\n\np {\n  color: #7a7677;\n  font-size: 1em; }\n\na:link,\na:active,\na:visited {\n  color: #2c97d4; }\n\na:hover {\n  color: #2d97d4; }\n\nheader {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: center; }\n  header .header_top {\n    background-color: #2d97d4;\n    width: 100%;\n    height: 100px;\n    z-index: 1; }\n    header .header_top * {\n      color: #ffffff; }\n    header .header_top .logo {\n      float: left;\n      position: relative; }\n      header .header_top .logo.hide {\n        display: none; }\n      header .header_top .logo .logo__el {\n        text-transform: uppercase;\n        font-weight: bold;\n        display: none;\n        margin: 20px; }\n        header .header_top .logo .logo__el.active {\n          display: block; }\n        header .header_top .logo .logo__el i {\n          background-color: #ffffff;\n          color: #2c97d4;\n          margin: 10px; }\n    header .header_top .menu {\n      float: right;\n      position: relative;\n      height: 80px;\n      overflow: hidden;\n      background-color: #2d97d4;\n      transform-origin: all;\n      transition-duration: .6s;\n      transition-timing-function: ease-in-out; }\n      header .header_top .menu.show {\n        height: 330px;\n        transition-duration: 0; }\n        header .header_top .menu.show .menu__el {\n          width: 150px; }\n        header .header_top .menu.show .trigger {\n          text-align: center; }\n        @media (max-width: 900px) {\n          header .header_top .menu.show {\n            width: 100vw;\n            height: 100vh;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center; }\n            header .header_top .menu.show .menu__el {\n              flex: 1; } }\n      header .header_top .menu.hide .menu__el:not(:first-child) {\n        opacity: 0; }\n      header .header_top .menu .menu__el {\n        text-transform: uppercase;\n        font-weight: bold;\n        width: 60px;\n        opacity: 1;\n        transform-origin: all;\n        transition-duration: .2s;\n        transition-timing-function: ease-in-out;\n        margin: 20px;\n        list-style: none; }\n        header .header_top .menu .menu__el.trigger {\n          height: 60px;\n          cursor: pointer; }\n          header .header_top .menu .menu__el.trigger:hover {\n            animation: hamburger 1s forwards ease-out; }\n        header .header_top .menu .menu__el i {\n          background-color: #ffffff;\n          color: #2c97d4;\n          margin: 10px; }\n  header .lang-select {\n    position: fixed;\n    top: 16%;\n    left: 0; }\n    @media (min-width: 1000px) {\n      header .lang-select {\n        left: 10px; } }\n    header .lang-select div {\n      cursor: pointer;\n      width: 40px; }\n      @media (min-width: 1000px) {\n        header .lang-select div {\n          width: 80px; }\n          header .lang-select div img {\n            width: 80px; } }\n      header .lang-select div.selected img {\n        border: 1px solid gold;\n        border-radius: 50%; }\n      header .lang-select div img {\n        width: 42px; }\n  header .header_avatar {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n    border: 5px solid #2d97d4;\n    background-image: url(" + __webpack_require__("./assets/avatar.jpg") + ");\n    background-color: #ffffff;\n    background-size: cover;\n    transform: translateY(-60px);\n    z-index: 5;\n    overflow: hidden; }\n    header .header_avatar.hide {\n      z-index: 0; }\n    header .header_avatar img {\n      height: 150px;\n      width: 120px;\n      border-radius: 50%; }\n  header .header_bot {\n    text-align: center;\n    transform: translateY(-40px); }\n\n.main {\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n  .main .main__col:first-child {\n    flex: 1; }\n  .main .main__el {\n    background-color: #f7f7f7;\n    border-bottom: 1px solid lightgray;\n    padding: 25px;\n    margin: 25px;\n    position: relative; }\n    .main .main__el h3 {\n      margin-bottom: 15px; }\n    .main .main__el .el__icon {\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      border-radius: 50%; }\n    .main .main__el li {\n      list-style: none;\n      margin-top: 15px; }\n      .main .main__el li i {\n        margin-right: 15px; }\n    .main .main__el ul.el__contacts li {\n      display: flex;\n      align-items: center; }\n    .main .main__el ul.el__skills li {\n      display: flex;\n      align-items: center; }\n      .main .main__el ul.el__skills li .skill__icon {\n        width: 10%;\n        margin-right: 15px; }\n      .main .main__el ul.el__skills li .skill__info {\n        width: 90%; }\n        .main .main__el ul.el__skills li .skill__info input[type=\"range\"] {\n          width: 90%; }\n    .main .main__el ul.el__languages {\n      display: flex;\n      justify-content: space-around; }\n      .main .main__el ul.el__languages li {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        flex: 1;\n        margin-right: 15px;\n        margin-left: 15px; }\n        .main .main__el ul.el__languages li .flag {\n          flex: 1;\n          background-size: cover; }\n          .main .main__el ul.el__languages li .flag img {\n            height: 100px; }\n        .main .main__el ul.el__languages li .language .language__name {\n          width: 100%;\n          margin-top: 10px;\n          margin-bottom: 10px;\n          text-align: center; }\n        .main .main__el ul.el__languages li .language .language__level {\n          align-items: center;\n          width: 100%;\n          display: flex;\n          justify-content: space-around; }\n          .main .main__el ul.el__languages li .language .language__level i {\n            flex: 1; }\n            .main .main__el ul.el__languages li .language .language__level i.golden {\n              color: gold; }\n    .main .main__el ul.el__exp li h4 {\n      margin-bottom: 10px;\n      font-size: 1em; }\n    .main .main__el ul.el__exp li p {\n      font-size: .9em; }\n    .main .main__el ul.el__education li ul.courses li {\n      list-style: lower-greek;\n      margin-left: 35px; }\n  .main .main__cols {\n    flex: 3;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n    .main .main__cols .main__col {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between; }\n      .main .main__cols .main__col:last-child {\n        justify-content: flex-start; }\n\ni.fa:not(.fa-star) {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  font-size: 20px;\n  text-align: center;\n  border-radius: 50%;\n  background-color: #2d97d4;\n  color: #ffffff; }\n\n@media (max-width: 900px) {\n  p {\n    font-size: .8em; }\n  .main {\n    width: 90%; }\n    .main .main__el {\n      flex: 1; }\n      .main .main__el ul.el__skills li {\n        display: flex;\n        align-items: center; }\n        .main .main__el ul.el__skills li .skill__icon {\n          width: 10%;\n          margin-right: 35px; }\n        .main .main__el ul.el__skills li .skill__info {\n          width: 80%; }\n          .main .main__el ul.el__skills li .skill__info input[type=\"range\"] {\n            width: 90%; }\n      .main .main__el ul.el__languages {\n        flex-direction: column; }\n    .main .main__cols {\n      flex-direction: column; } }\n\n@media (min-width: 400px) {\n  .main .main__cols .main__col {\n    flex: 1; }\n    .main .main__cols .main__col:last-child {\n      flex: 2; } }\n\n@media (min-width: 1000px) {\n  .main .main__cols .main__col {\n    flex: 3; }\n    .main .main__cols .main__col:last-child {\n      flex: 2; } }\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ "../node_modules/style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__russian_js__ = __webpack_require__("./russian.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__english_js__ = __webpack_require__("./english.js");
__webpack_require__("./css/main.sass");

Array.from(document.querySelectorAll("input[type=range]")).map(function (el) {
    el.disabled = true;
});

var hamburgerTrigger = document.querySelector('.trigger'),
    hamburgerMenu = document.querySelector('.menu');
/* vue app */




var app = new Vue({
    el: '#app',
    data: {
        language: 'English',
        content: __WEBPACK_IMPORTED_MODULE_1__english_js__["a" /* English */],
        menuOn: false,
        isPhone: window.innerWidth < 600
    },
    methods: {
        changeLanguageToEnglish: function changeLanguageToEnglish() {
            if (this.language !== 'English') {
                this.language = 'English';
                this.content = __WEBPACK_IMPORTED_MODULE_1__english_js__["a" /* English */];
            }
        },
        changeLanguageToRussian: function changeLanguageToRussian() {
            if (this.language !== 'Russian') {
                this.language = 'Russian';
                this.content = __WEBPACK_IMPORTED_MODULE_0__russian_js__["a" /* Russian */];
            }
        },
        showMenu: function showMenu() {
            this.menuOn = !this.menuOn;
            if (this.isPhone) {
                document.querySelector('.header_avatar').classList.toggle('hide');
                document.querySelector('.logo').classList.toggle('hide');
            }
        },
        resize: function resize() {
            this.isPhone = window.innerWidth < 600;
        }
    }
});

/***/ }),

/***/ "./assets/avatar.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "13f3d90edd8227bae97eda15d450fb75.jpg";

/***/ }),

/***/ "./css/main.sass":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./css/main.sass");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/lib/loader.js!./main.sass", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/lib/loader.js!./main.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./english.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return English; });
var English = {
    header: ['Home', 'Portfolio', 'Letter'],
    menu: ['Home', 'Portfolio', 'Letter'],
    name: ['Gleb Scherbakov', 'Junior web developer'],
    greeting: ['Hello, i am Gleb', 'I am MIEM HSE student. Interested in web development frontend in particular'],
    contacts: ['Contact me', 'Moscow', 'City', 'thegorazio.github.io', 'thegorazio@gmail.com'],
    skills: ['My skills', 'JavaScript libraries', 'Markup', 'Backend', 'Web-Design', 'Additional tools'],
    languages: ['Languages', 'Russian', 'English'],
    experience: ['Work experience', 'Selflab cms', 'Develop CMS system based on node.js (backend) + react.js (frontend) for studio', 'Graduate work', 'My graduate work is creating studing virtual lab based on Internet of Things conception. Real devices in the university connected to the cloud IoT service, and sends data to it. My backend receive that data, analyze it and send to client, who works with certain task.', 'Developed template', 'Some template from the internet developed by my from PSD.', 'Drumkit', 'Drumkit powered by js', 'Clock', 'Minimalistic js clock', 'SmartUrn project for Microsoft Imagine Cup', 'The project based on IoT concept via Microsoft Azure cloud. Ref to login gleb/gleb'],
    education: ['Education', 'School', 'Middle School #36, Vladimir, 2002 - 2013', 'Student', 'University', 'MIEM HSE, Moscow, 2013 - 2017', 'Information technology and computer systems, bachelor', 'Passed courses'],
    repository: 'repository'
};

/***/ }),

/***/ "./russian.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Russian; });
var Russian = {
    header: ['Главная', 'Портфолио', 'Письмо'],
    menu: ['Главная', 'Портфолио', 'Письмо'],
    name: ['Глеб Щербаков', 'Начинающий веб разработчик'],
    greeting: ['Привет, меня зовут Глеб', "Я студент МИЭМ НИУ ВШЭ. Увлекаюсь веб - разработкой, в частности frontend'ом."],
    contacts: ['Мои контакты', 'Москва', 'Город', 'thegorazio.github.io', 'thegorazio@gmail.com'],
    skills: ['Мои навыки', 'Библиотеки JavaScript', 'Верстка', 'Бэкенд', 'Веб-Дизайн', 'Дополнительны средства разработки'],
    languages: ['Языки', 'Русский', 'Английский'],
    experience: ['Опыт разработки', 'Система управление контентом для Selflab', 'Разработал CMS для фотостудии бэкенд написан на Node.js, фронтенд на React', 'Дипломная работа', 'Моя дипломная работа заключается в создании виртуального лабораторного стенда на основе концепции Интернета Вещей. Реальные устройства в лабораториях университета подклбчены к обычному сервису Интернета Вещей, этот сервис отправляет данные на созданные мною сервер, который в последствии отправляет данные клиентами, выполняющим ту или иную лабораторную работу', 'Сверстанные шаблоны', 'Сверстанные шаблоны из интернета для поднятия своих навыков.', 'Барабаны', 'JS Барабаны', 'Часы', 'JS Часы', 'Проект "Умная Урна" для Microsoft Imagine Cup', 'Проект основа на концепции Интернета Вещей при помощи облака Microsoft Azure. Данные для тестового входа: gleb/gleb'],
    education: ['Образование', 'Школа', 'Средняя школа №36, Владимир, 2002 - 2013', 'Учащийся', 'Университет', 'МИЭМ НИУ ВШЭ, Москва, 2013 - 2017', 'Информационные технологии и вычислительная техника, бакалавр', 'Пройденные курсы'],
    repository: 'репозиторий'
};

/***/ })

/******/ });