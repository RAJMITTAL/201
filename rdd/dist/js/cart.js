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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cartPage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cartPage.js":
/*!*************************!*\
  !*** ./src/cartPage.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\nvar _cart = __webpack_require__(/*! ./components/cart/cart */ \"./src/components/cart/cart.js\");\n\nvar _cacheManager = __webpack_require__(/*! ./components/cacheManager/cacheManager */ \"./src/components/cacheManager/cacheManager.js\");\n\nvar _cartUI = __webpack_require__(/*! ./components/cart/cartUI */ \"./src/components/cart/cartUI.js\");\n\nvar pageElements = {\n  cartConainter: document.querySelector(\".cart-container\")\n};\n//import MenuData from \"./components/list/dataModel\";\n//import * as menuView from \"./components/list/itemgrid\";\n\n\nvar cacheManager = new _cacheManager.CacheManager();\nvar cartData = cacheManager.getItem(\"cart\"); // move key to constant\n\nvar cartUI = new _cartUI.CartUI(cartData, page.cartConainter);\ncartUI.renderCart();\n\n//# sourceURL=webpack:///./src/cartPage.js?");

/***/ }),

/***/ "./src/components/cacheManager/cacheManager.js":
/*!*****************************************************!*\
  !*** ./src/components/cacheManager/cacheManager.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar CacheManager = exports.CacheManager = function () {\n    function CacheManager() {\n        _classCallCheck(this, CacheManager);\n\n        this.cacheStore = window.sessionStorage;\n    }\n\n    _createClass(CacheManager, [{\n        key: \"setItem\",\n        value: function setItem(key, value) {\n            this.cacheStore.setItem(key, JSON.stringify(value));\n        }\n    }, {\n        key: \"getItem\",\n        value: function getItem(key) {\n            return JSON.parse(this.cacheStore.getItem(key));\n        }\n    }, {\n        key: \"deleteItem\",\n        value: function deleteItem(key) {\n            this.cacheStore.deleteItem(key);\n        }\n    }, {\n        key: \"clearAll\",\n        value: function clearAll() {\n            this.cacheStore.clear();\n        }\n    }]);\n\n    return CacheManager;\n}();\n\n//# sourceURL=webpack:///./src/components/cacheManager/cacheManager.js?");

/***/ }),

/***/ "./src/components/cart/cart.js":
/*!*************************************!*\
  !*** ./src/components/cart/cart.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.CartItem = exports.Cart = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _config = __webpack_require__(/*! ./config */ \"./src/components/cart/config.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Cart = exports.Cart = function () {\n    function Cart() {\n        _classCallCheck(this, Cart);\n\n        this.Items = [];\n        this.cartTotal = 0;\n        this.cartTax = 0;\n    }\n\n    _createClass(Cart, [{\n        key: \"update\",\n        value: function update(item) {\n            var oldItem = this.Items.findIndex(function (cItem) {\n                return cItem.id === item.id;\n            });\n            console.log(oldItem);\n            if (oldItem != -1) {\n                console.log(\"found\");\n                this.Items[oldItem].count = item.count;\n                return;\n            }\n            console.log('in new');\n            this.Items.push(item);\n        }\n    }, {\n        key: \"reconcile\",\n        value: function reconcile(data) {\n            var _this = this;\n\n            this.Items.forEach(function (item) {\n                var index = data.findIndex(function (dataItem) {\n                    return dataItem.id == item.id;\n                });\n\n                item.title = data[index].title;\n                item.unitCost = data[index].price;\n                item.image = data[index].photoSmall;\n                item.totalCost = item.count * item.unitCost;\n                item.tax = item.totalCost * (item.foodType === \"f\" ? _config.foodTax : _config.beverageTax);\n\n                _this.cartTotal += item.totalCost;\n                _this.cartTax += item.tax;\n                _this.grandTotal = _this.cartTotal + _this.cartTax;\n            });\n        }\n    }]);\n\n    return Cart;\n}();\n\nvar CartItem = exports.CartItem = function CartItem(id, count) {\n    _classCallCheck(this, CartItem);\n\n    this.id = id;\n    this.count = count;\n\n    this.image = \"\";\n    this.unitCost = \"\";\n    this.totalCost = \"\";\n    this.title = \"\";\n    this.tax = \"\";\n};\n\n//# sourceURL=webpack:///./src/components/cart/cart.js?");

/***/ }),

/***/ "./src/components/cart/cartUI.js":
/*!***************************************!*\
  !*** ./src/components/cart/cartUI.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n//import { elements } from \"./elements\";\n//import { Cart } from \"./cart\";\n\nvar CartUI = exports.CartUI = function () {\n    function CartUI(cartData, parentElemement) {\n        _classCallCheck(this, CartUI);\n\n        this.cartData = cartData;\n    }\n\n    _createClass(CartUI, [{\n        key: 'renderCart',\n        value: function renderCart() {\n            var _this = this;\n\n            this.cartData.forEach(function (element) {\n                _this.renderItem(element, parentElemement);\n            });\n\n            this.renderTotal(this.cartData, parentElemement);\n        }\n    }, {\n        key: 'renderItem',\n        value: function renderItem(item, parentElemement) {\n            console.log(item);\n            var markup = '\\n    <div class=\"cart-item\" data-itemid=' + item.id + '>\\n        <img src=\"' + item.photosmall + '\" alt=\"\" class=\"food\">\\n        <div class=\"itemContent\">\\n            <h2>' + item.title + '</h2>\\n            <span>{item.currency}</span> <p class=\"price\">' + item.totalCost + '</p>\\n        </div>\\n        <div class=\"product-quantity\">\\n            <form id=\"myform\" method=\"POST\" action=\"#\">\\n                <div class=\"product-quantity\">\\n                    <div class=\"cart-plus-minus\">\\n                        <input class=\"cart-plus-minus-box\" type=\"text\" name=\"qtybutton\" value=\"0\">\\n                    <button class=\"dec-qty qty-btn\">-</button>\\n                    <button id=' + item.id + ' class=\"inc-qty qty-btn\">+</button></div>\\n                </div>\\n            </form>\\n            <div>X</div>\\n        </div>\\n    </div>\\n    ';\n            parentElemement.insertAdjacentHTML('beforeend', markup);\n        }\n    }, {\n        key: 'renderTotal',\n        value: function renderTotal(cartData, parentElemement) {\n            var markup = '\\n    <div class=\"summary\"> \\n    <div \"cart-amount\">' + cartData.cartTotal + ' </div>\\n    <div \"cart-tax\">' + cartData.cartTotal + ' </div>\\n    <div \"cart-total\">' + cartData.grandTotal + '</div>\\n    </div>';\n        }\n    }]);\n\n    return CartUI;\n}();\n\n//# sourceURL=webpack:///./src/components/cart/cartUI.js?");

/***/ }),

/***/ "./src/components/cart/config.js":
/*!***************************************!*\
  !*** ./src/components/cart/config.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar beverageTax = exports.beverageTax = 0.12;\nvar foodTax = exports.foodTax = 0.05;\n\n//# sourceURL=webpack:///./src/components/cart/config.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });