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


__webpack_require__(/*! ./style.scss */ "./src/style.scss");

var _cart = __webpack_require__(/*! ./components/cart/cart */ "./src/components/cart/cart.js");

var _cacheManager = __webpack_require__(/*! ./components/cacheManager/cacheManager */ "./src/components/cacheManager/cacheManager.js");

var _cartUI = __webpack_require__(/*! ./components/cart/cartUI */ "./src/components/cart/cartUI.js");

var _HeaderUI = __webpack_require__(/*! ./components/header/HeaderUI */ "./src/components/header/HeaderUI.js");

//import MenuData from "./components/list/dataModel";
//import * as menuView from "./components/list/itemgrid";
var pageElements = {
  cartConainter: document.querySelector(".cart-container")
};

var header = new _HeaderUI.HeaderUI();
header.render(pageElements.cartConainter);

var cacheManager = new _cacheManager.CacheManager();
var cartData = cacheManager.getItem("cart"); // move key to constant

var cartUI = new _cartUI.CartUI(cartData, pageElements.cartConainter);
cartUI.renderCart();

/***/ }),

/***/ "./src/components/cacheManager/cacheManager.js":
/*!*****************************************************!*\
  !*** ./src/components/cacheManager/cacheManager.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CacheManager = exports.CacheManager = function () {
    function CacheManager() {
        _classCallCheck(this, CacheManager);

        this.cacheStore = window.sessionStorage;
    }

    _createClass(CacheManager, [{
        key: "setItem",
        value: function setItem(key, value) {
            this.cacheStore.setItem(key, JSON.stringify(value));
        }
    }, {
        key: "getItem",
        value: function getItem(key) {
            return JSON.parse(this.cacheStore.getItem(key));
        }
    }, {
        key: "deleteItem",
        value: function deleteItem(key) {
            this.cacheStore.deleteItem(key);
        }
    }, {
        key: "clearAll",
        value: function clearAll() {
            this.cacheStore.clear();
        }
    }]);

    return CacheManager;
}();

/***/ }),

/***/ "./src/components/cart/cart.js":
/*!*************************************!*\
  !*** ./src/components/cart/cart.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CartItem = exports.Cart = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(/*! ./config */ "./src/components/cart/config.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cart = exports.Cart = function () {
    function Cart() {
        _classCallCheck(this, Cart);

        this.Items = [];
        this.cartTotal = 0;
        this.cartTax = 0;
    }

    _createClass(Cart, [{
        key: "update",
        value: function update(item) {
            var oldItem = this.Items.findIndex(function (cItem) {
                return cItem.id === item.id;
            });
            console.log(oldItem);
            if (oldItem != -1) {
                console.log("found");
                this.Items[oldItem].count = item.count;
                return;
            }
            console.log('in new');
            this.Items.push(item);
        }
    }, {
        key: "reconcile",
        value: function reconcile(data) {
            var _this = this;

            this.Items.forEach(function (item) {
                var index = data.findIndex(function (dataItem) {
                    return dataItem.id == item.id;
                });

                item.title = data[index].title;
                item.unitCost = data[index].price;
                item.image = data[index].photoSmall;
                item.totalCost = item.count * item.unitCost;
                item.tax = item.totalCost * (item.foodType === "f" ? _config.foodTax : _config.beverageTax);

                _this.cartTotal += item.totalCost;
                _this.cartTax += item.tax;
                _this.grandTotal = _this.cartTotal + _this.cartTax;
            });
        }
    }]);

    return Cart;
}();

var CartItem = exports.CartItem = function CartItem(id, count) {
    _classCallCheck(this, CartItem);

    this.id = id;
    this.count = count;

    this.image = "";
    this.unitCost = "";
    this.totalCost = "";
    this.title = "";
    this.tax = "";
};

/***/ }),

/***/ "./src/components/cart/cartUI.js":
/*!***************************************!*\
  !*** ./src/components/cart/cartUI.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import { elements } from "./elements";
//import { Cart } from "./cart";

var CartUI = exports.CartUI = function () {
    function CartUI(cartData, parentElement) {
        _classCallCheck(this, CartUI);

        this.cartData = cartData;
        this.parentElement = parentElement;
    }

    _createClass(CartUI, [{
        key: 'renderCart',
        value: function renderCart() {
            var _this = this;

            this.cartData.Items.forEach(function (element) {
                _this.renderItem(element, _this.parentElement);
            });

            this.renderTotal(this.cartData, this.parentElement);
        }
    }, {
        key: 'renderItem',
        value: function renderItem(item, parentElement) {
            console.log(item);
            var markup = '\n    <div class="cart-item" data-itemid=' + item.id + '>\n    <div><img src="' + item.photosmall + '" alt="" class="food"></div>\n        <div class=""> ' + item.title + '</div>\n         <div>' + item.currency + item.totalCost + '</div>\n         <div class="product-quantity">\n            <form id="myform" method="POST" action="#">\n                <div class="product-quantity">\n                    <div class="cart-plus-minus">\n                        <input class="cart-plus-minus-box" type="text" name="qtybutton" value="0">\n                    <button class="dec-qty qty-btn">-</button>\n                    <button id=' + item.id + ' class="inc-qty qty-btn">+</button></div>\n                </div>\n            </form>\n         </div>\n            <div>X</div>\n        \n    </div>\n    ';
            parentElement.insertAdjacentHTML('beforeend', markup);
        }
    }, {
        key: 'renderTotal',
        value: function renderTotal(cartData, parentElement) {
            var markup = '\n   <div class="summary">\n    <div class="summary__wrap"> \n    <div class="summary__amount summary__item"><span>Cart Total</span><span>' + cartData.cartTotal + ' </span></div>\n    <div class="summary__tax summary__item"><span>Tax</span><span>' + cartData.cartTax + '</span></div>\n    <div class="summary__total summary__item"><span>Grand Total</span><span>' + cartData.grandTotal + '</span></div>\n    <div ><span></span><span><form id="myform" method="get" action="/payment.html"><button class="food__btn">Proceed to Payment</button></form></span></div>\n    </div>\n    </div>';
            parentElement.insertAdjacentHTML('beforeend', markup);
        }
    }, {
        key: 'renderSummary',
        value: function renderSummary() {
            var _this2 = this;

            var itemSummary = this.cartData.Items.reduce(function (itemMarkup, item) {
                itemMarkup += _this2.renderSummaryItem(item);
                return itemMarkup;
            }, "");
            console.log(itemSummary);
            var markup = '\n    <div class="order-details">\n    <form action="#">\n        <ul>\n            <li><p class="strong">product</p><p class="strong">total</p></li>\n             ' + itemSummary + '\n            <li><p class="strong">cart subtotal</p><p class="strong">' + this.cartData.cartTotal + '</p></li>\n            <li><p class="strong">Tax</p><p>\n                <p' + this.cartData.cartTax + '</p><br>\n            </p></li>\n            <li><p class="strong">order total</p><p class="grandTotal">' + this.cartData.grandTotal + '</p></li>\n            <li><button>place order</button></li>\n        </ul>\n    </form>\n</div>\n    ';
            this.parentElement.insertAdjacentHTML('beforeend', markup);
        }
    }, {
        key: 'renderSummaryItem',
        value: function renderSummaryItem(item) {

            var markup = '\n     <li><p>' + item.count + 'x ' + item.title + ' </p><p>' + item.totalCost + '</p></li>\n     ';
            return markup;
        }
    }]);

    return CartUI;
}();

/***/ }),

/***/ "./src/components/cart/config.js":
/*!***************************************!*\
  !*** ./src/components/cart/config.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var beverageTax = exports.beverageTax = 0.12;
var foodTax = exports.foodTax = 0.05;

/***/ }),

/***/ "./src/components/header/HeaderUI.js":
/*!*******************************************!*\
  !*** ./src/components/header/HeaderUI.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderUI = exports.HeaderUI = function () {
    function HeaderUI() {
        _classCallCheck(this, HeaderUI);
    }

    _createClass(HeaderUI, [{
        key: 'render',
        value: function render(parentElement) {
            var markup = '\n<header class="header">\n<a href="/" >\n        <img src ="/img/rddlogo.svg" alt="RDD logo" class="logo"/>\n</a>\n\n<div class="navigation">\n            <nav class="navigation__nav">\n                <ul class="navigation__list">\n                    <li class="navigation__item"><a href="/" class="navigation__link">Home</a></li>\n                    <li class="navigation__item"><a href="#footer" class="navigation__link">Contact us</a></li>\n                    </ul>\n            </nav>\n            </div>\n\n                                \n            <div class="shopping__cart">\n                <a class="shopping__cart__cart navigation__link" href="#">Cart</a>\n                <div class="shop__qun">\n                    <span>03</span>\n                </div>\n            </div>\n\n</header>\n';

            parentElement.insertAdjacentHTML('afterbegin', markup);
        }
    }, {
        key: 'renderNav',
        value: function renderNav(parentElement) {}
    }]);

    return HeaderUI;
}();

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhcnRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhY2hlTWFuYWdlci9jYWNoZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnQvY2FydFVJLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnQvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJVSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2NzcyJdLCJuYW1lcyI6WyJwYWdlRWxlbWVudHMiLCJjYXJ0Q29uYWludGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwiSGVhZGVyVUkiLCJyZW5kZXIiLCJjYWNoZU1hbmFnZXIiLCJDYWNoZU1hbmFnZXIiLCJjYXJ0RGF0YSIsImdldEl0ZW0iLCJjYXJ0VUkiLCJDYXJ0VUkiLCJyZW5kZXJDYXJ0IiwiY2FjaGVTdG9yZSIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwia2V5IiwidmFsdWUiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiZGVsZXRlSXRlbSIsImNsZWFyIiwiQ2FydCIsIkl0ZW1zIiwiY2FydFRvdGFsIiwiY2FydFRheCIsIml0ZW0iLCJvbGRJdGVtIiwiZmluZEluZGV4IiwiY0l0ZW0iLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJjb3VudCIsInB1c2giLCJkYXRhIiwiZm9yRWFjaCIsImluZGV4IiwiZGF0YUl0ZW0iLCJ0aXRsZSIsInVuaXRDb3N0IiwicHJpY2UiLCJpbWFnZSIsInBob3RvU21hbGwiLCJ0b3RhbENvc3QiLCJ0YXgiLCJmb29kVHlwZSIsImZvb2RUYXgiLCJiZXZlcmFnZVRheCIsImdyYW5kVG90YWwiLCJDYXJ0SXRlbSIsInBhcmVudEVsZW1lbnQiLCJyZW5kZXJJdGVtIiwiZWxlbWVudCIsInJlbmRlclRvdGFsIiwibWFya3VwIiwicGhvdG9zbWFsbCIsImN1cnJlbmN5IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaXRlbVN1bW1hcnkiLCJyZWR1Y2UiLCJpdGVtTWFya3VwIiwicmVuZGVyU3VtbWFyeUl0ZW0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFMQTtBQUNBO0FBTUEsSUFBTUEsZUFBZTtBQUNuQkMsaUJBQWVDLFNBQVNDLGFBQVQsQ0FBdUIsaUJBQXZCO0FBREksQ0FBckI7O0FBSUEsSUFBSUMsU0FBUyxJQUFJQyxrQkFBSixFQUFiO0FBQ0FELE9BQU9FLE1BQVAsQ0FBY04sYUFBYUMsYUFBM0I7O0FBRUEsSUFBTU0sZUFBZSxJQUFJQywwQkFBSixFQUFyQjtBQUNB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TCxDQUFjaUIsS0FBZCxDQUFvQnFDLE1BQXBCLENBQTJCLFVBQUNDLFVBQUQsRUFBWW5DLElBQVosRUFDL0M7QUFDSW1DLDhCQUFhLE9BQUtDLGlCQUFMLENBQXVCcEMsSUFBdkIsQ0FBYjtBQUNBLHVCQUFPbUMsVUFBUDtBQUNILGFBSm1CLEVBSWxCLEVBSmtCLENBQXBCO0FBS0o5QixvQkFBUUMsR0FBUixDQUFZMkIsV0FBWjtBQUNJLGdCQUFNSixrTEFLS0ksV0FMTCwrRUFNNkQsS0FBS3JELFFBQUwsQ0FBY2tCLFNBTjNFLG1GQVFVLEtBQUtsQixRQUFMLENBQWNtQixPQVJ4QixnSEFVK0QsS0FBS25CLFFBQUwsQ0FBYzJDLFVBVjdFLDJHQUFOO0FBZ0JBLGlCQUFLRSxhQUFMLENBQW1CTyxrQkFBbkIsQ0FBc0MsV0FBdEMsRUFBbURILE1BQW5EO0FBRUg7OzswQ0FDaUI3QixJLEVBQUs7O0FBRW5CLGdCQUFNNkIsNEJBQ0k3QixLQUFLTyxLQURULFVBQ21CUCxLQUFLYSxLQUR4QixnQkFDd0NiLEtBQUtrQixTQUQ3QyxxQkFBTjtBQUdBLG1CQUFPVyxNQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGTSxJQUFNUCxvQ0FBYyxJQUFwQjtBQUNBLElBQU1ELDRCQUFVLElBQWhCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNETTdDLFEsV0FBQUEsUTs7Ozs7OzsrQkFHTmlELGEsRUFBZTtBQUN0QixnQkFBTUksdXpCQUFOOztBQTJCQUosMEJBQWNPLGtCQUFkLENBQWlDLFlBQWpDLEVBQStDSCxNQUEvQztBQUVDOzs7a0NBRVNKLGEsRUFBYyxDQUd2Qjs7Ozs7Ozs7Ozs7Ozs7O0FDdENELHVDIiwiZmlsZSI6ImpzL2NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jYXJ0UGFnZS5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG4vL2ltcG9ydCBNZW51RGF0YSBmcm9tIFwiLi9jb21wb25lbnRzL2xpc3QvZGF0YU1vZGVsXCI7XHJcbi8vaW1wb3J0ICogYXMgbWVudVZpZXcgZnJvbSBcIi4vY29tcG9uZW50cy9saXN0L2l0ZW1ncmlkXCI7XHJcbmltcG9ydCB7IENhcnQsIENhcnRJdGVtIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJ0L2NhcnRcIjtcclxuaW1wb3J0IHsgQ2FjaGVNYW5hZ2VyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYWNoZU1hbmFnZXIvY2FjaGVNYW5hZ2VyXCI7XHJcbmltcG9ydCAge0NhcnRVSX0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJ0L2NhcnRVSVwiO1xyXG5pbXBvcnQge0hlYWRlclVJfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJVSVwiO1xyXG5cclxuY29uc3QgcGFnZUVsZW1lbnRzID0ge1xyXG4gIGNhcnRDb25haW50ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FydC1jb250YWluZXJcIilcclxufTtcclxuXHJcbnZhciBoZWFkZXIgPSBuZXcgSGVhZGVyVUkoKTtcclxuaGVhZGVyLnJlbmRlcihwYWdlRWxlbWVudHMuY2FydENvbmFpbnRlcik7XHJcblxyXG5jb25zdCBjYWNoZU1hbmFnZXIgPSBuZXcgQ2FjaGVNYW5hZ2VyKCk7XHJcbmNvbnN0IGNhcnREYXRhID0gY2FjaGVNYW5hZ2VyLmdldEl0ZW0oXCJjYXJ0XCIpOyAvLyBtb3ZlIGtleSB0byBjb25zdGFudFxyXG5cclxuY29uc3QgY2FydFVJID0gbmV3IENhcnRVSShjYXJ0RGF0YSxwYWdlRWxlbWVudHMuY2FydENvbmFpbnRlcik7XHJcbmNhcnRVSS5yZW5kZXJDYXJ0KCk7IiwiZXhwb3J0IGNsYXNzIENhY2hlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5jYWNoZVN0b3JlID0gd2luZG93LnNlc3Npb25TdG9yYWdlO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgc2V0SXRlbShrZXkgLHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yZS5zZXRJdGVtKGtleSxKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShrZXkpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmNhY2hlU3RvcmUuZ2V0SXRlbShrZXkpKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUl0ZW0oa2V5KSB7XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JlLmRlbGV0ZUl0ZW0oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckFsbCgpIHtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmUuY2xlYXIoKTtcclxuICAgIH1cclxuICB9IiwiaW1wb3J0IHtiZXZlcmFnZVRheCwgZm9vZFRheH0gZnJvbSBcIi4vY29uZmlnXCJcclxuZXhwb3J0IGNsYXNzIENhcnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuSXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLmNhcnRUb3RhbD0wO1xyXG4gICAgICAgIHRoaXMuY2FydFRheD0wO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShpdGVtKSB7XHJcbiAgICAgICAgdmFyIG9sZEl0ZW0gPSB0aGlzLkl0ZW1zLmZpbmRJbmRleChjSXRlbSA9PiBjSXRlbS5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBjb25zb2xlLmxvZyhvbGRJdGVtKTtcclxuICAgICAgICBpZiAob2xkSXRlbSAhPSAtMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZvdW5kXCIpXHJcbiAgICAgICAgICAgIHRoaXMuSXRlbXNbb2xkSXRlbV0uY291bnQgPSBpdGVtLmNvdW50O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBuZXcnKVxyXG4gICAgICAgIHRoaXMuSXRlbXMucHVzaChpdGVtKVxyXG4gICAgfVxyXG4gICAgcmVjb25jaWxlKGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgIGNvbnN0IGluZGV4ID0gZGF0YS5maW5kSW5kZXgoZGF0YUl0ZW0gPT4gZGF0YUl0ZW0uaWQgPT0gaXRlbS5pZCk7XHJcblxyXG4gICAgICAgICAgICBpdGVtLnRpdGxlID0gZGF0YVtpbmRleF0udGl0bGU7XHJcbiAgICAgICAgICAgIGl0ZW0udW5pdENvc3QgPSBkYXRhW2luZGV4XS5wcmljZTtcclxuICAgICAgICAgICAgaXRlbS5pbWFnZSAgPSBkYXRhW2luZGV4XS5waG90b1NtYWxsXHJcbiAgICAgICAgICAgIGl0ZW0udG90YWxDb3N0ID0gaXRlbS5jb3VudCAqIGl0ZW0udW5pdENvc3Q7XHJcbiAgICAgICAgICAgIGl0ZW0udGF4ID0gaXRlbS50b3RhbENvc3QgKiAoaXRlbS5mb29kVHlwZSA9PT1cImZcIj9mb29kVGF4OmJldmVyYWdlVGF4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FydFRvdGFsKz1pdGVtLnRvdGFsQ29zdDtcclxuICAgICAgICAgICAgdGhpcy5jYXJ0VGF4Kz0gaXRlbS50YXg7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhbmRUb3RhbCA9IHRoaXMuY2FydFRvdGFsICsgdGhpcy5jYXJ0VGF4O1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIENhcnRJdGVtIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgY291bnQpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xyXG5cclxuICAgICAgICB0aGlzLmltYWdlID0gXCJcIjtcclxuICAgICAgICB0aGlzLnVuaXRDb3N0PVwiXCI7XHJcbiAgICAgICAgdGhpcy50b3RhbENvc3Q9XCJcIjtcclxuICAgICAgICB0aGlzLnRpdGxlID1cIlwiO1xyXG4gICAgICAgIHRoaXMudGF4PVwiXCI7XHJcbiAgICB9XHJcblxyXG59IiwiLy9pbXBvcnQgeyBlbGVtZW50cyB9IGZyb20gXCIuL2VsZW1lbnRzXCI7XHJcbi8vaW1wb3J0IHsgQ2FydCB9IGZyb20gXCIuL2NhcnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJ0VUkge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcnREYXRhLCBwYXJlbnRFbGVtZW50KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2FydERhdGEgPSBjYXJ0RGF0YTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuXHJcbnJlbmRlckNhcnQoKSB7XHJcbiB0aGlzLmNhcnREYXRhLkl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbnRoaXMucmVuZGVySXRlbShlbGVtZW50LHRoaXMucGFyZW50RWxlbWVudCk7ICBcclxuIH0pO1xyXG5cclxudGhpcy5yZW5kZXJUb3RhbCh0aGlzLmNhcnREYXRhLCB0aGlzLnBhcmVudEVsZW1lbnQpO1xyXG59XHJcblxyXG5yZW5kZXJJdGVtKGl0ZW0scGFyZW50RWxlbWVudCl7XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgIGNvbnN0IG1hcmt1cCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1cIiBkYXRhLWl0ZW1pZD0ke2l0ZW0uaWR9PlxyXG4gICAgPGRpdj48aW1nIHNyYz1cIiR7aXRlbS5waG90b3NtYWxsfVwiIGFsdD1cIlwiIGNsYXNzPVwiZm9vZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJcIj4gJHtpdGVtLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICA8ZGl2PiR7aXRlbS5jdXJyZW5jeX0ke2l0ZW0udG90YWxDb3N0fTwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1xdWFudGl0eVwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBpZD1cIm15Zm9ybVwiIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1xdWFudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXBsdXMtbWludXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiY2FydC1wbHVzLW1pbnVzLWJveFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInF0eWJ1dHRvblwiIHZhbHVlPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWMtcXR5IHF0eS1idG5cIj4tPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0ke2l0ZW0uaWR9IGNsYXNzPVwiaW5jLXF0eSBxdHktYnRuXCI+KzwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+WDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgcGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1hcmt1cCk7XHJcbiAgXHJcbn1cclxuICAgIFxyXG5yZW5kZXJUb3RhbChjYXJ0RGF0YSxwYXJlbnRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBtYXJrdXAgPSBgXHJcbiAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeV9fd3JhcFwiPiBcclxuICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5X19hbW91bnQgc3VtbWFyeV9faXRlbVwiPjxzcGFuPkNhcnQgVG90YWw8L3NwYW4+PHNwYW4+JHtjYXJ0RGF0YS5jYXJ0VG90YWx9IDwvc3Bhbj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5X190YXggc3VtbWFyeV9faXRlbVwiPjxzcGFuPlRheDwvc3Bhbj48c3Bhbj4ke2NhcnREYXRhLmNhcnRUYXh9PC9zcGFuPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInN1bW1hcnlfX3RvdGFsIHN1bW1hcnlfX2l0ZW1cIj48c3Bhbj5HcmFuZCBUb3RhbDwvc3Bhbj48c3Bhbj4ke2NhcnREYXRhLmdyYW5kVG90YWx9PC9zcGFuPjwvZGl2PlxyXG4gICAgPGRpdiA+PHNwYW4+PC9zcGFuPjxzcGFuPjxmb3JtIGlkPVwibXlmb3JtXCIgbWV0aG9kPVwiZ2V0XCIgYWN0aW9uPVwiL3BheW1lbnQuaHRtbFwiPjxidXR0b24gY2xhc3M9XCJmb29kX19idG5cIj5Qcm9jZWVkIHRvIFBheW1lbnQ8L2J1dHRvbj48L2Zvcm0+PC9zcGFuPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG4gICAgcGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1hcmt1cCk7XHJcbn1cclxuXHJcbnJlbmRlclN1bW1hcnkoKXtcclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgaXRlbVN1bW1hcnkgPSB0aGlzLmNhcnREYXRhLkl0ZW1zLnJlZHVjZSgoaXRlbU1hcmt1cCxpdGVtKSA9PiBcclxuICAgIHtcclxuICAgICAgICBpdGVtTWFya3VwKz0gdGhpcy5yZW5kZXJTdW1tYXJ5SXRlbShpdGVtKTtcclxuICAgICAgICByZXR1cm4gaXRlbU1hcmt1cDtcclxuICAgIH0sXCJcIik7XHJcbmNvbnNvbGUubG9nKGl0ZW1TdW1tYXJ5KTtcclxuICAgIGNvbnN0IG1hcmt1cCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJvcmRlci1kZXRhaWxzXCI+XHJcbiAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+PHAgY2xhc3M9XCJzdHJvbmdcIj5wcm9kdWN0PC9wPjxwIGNsYXNzPVwic3Ryb25nXCI+dG90YWw8L3A+PC9saT5cclxuICAgICAgICAgICAgICR7aXRlbVN1bW1hcnl9XHJcbiAgICAgICAgICAgIDxsaT48cCBjbGFzcz1cInN0cm9uZ1wiPmNhcnQgc3VidG90YWw8L3A+PHAgY2xhc3M9XCJzdHJvbmdcIj4ke3RoaXMuY2FydERhdGEuY2FydFRvdGFsfTwvcD48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHAgY2xhc3M9XCJzdHJvbmdcIj5UYXg8L3A+PHA+XHJcbiAgICAgICAgICAgICAgICA8cCR7dGhpcy5jYXJ0RGF0YS5jYXJ0VGF4fTwvcD48YnI+XHJcbiAgICAgICAgICAgIDwvcD48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHAgY2xhc3M9XCJzdHJvbmdcIj5vcmRlciB0b3RhbDwvcD48cCBjbGFzcz1cImdyYW5kVG90YWxcIj4ke3RoaXMuY2FydERhdGEuZ3JhbmRUb3RhbH08L3A+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxidXR0b24+cGxhY2Ugb3JkZXI8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Zvcm0+XHJcbjwvZGl2PlxyXG4gICAgYDtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1hcmt1cCk7XHJcbiAgXHJcbn1cclxucmVuZGVyU3VtbWFyeUl0ZW0oaXRlbSl7XHJcbiAgICBcclxuICAgIGNvbnN0IG1hcmt1cCA9YFxyXG4gICAgIDxsaT48cD4ke2l0ZW0uY291bnR9eCAke2l0ZW0udGl0bGV9IDwvcD48cD4ke2l0ZW0udG90YWxDb3N0fTwvcD48L2xpPlxyXG4gICAgIGBcclxuICAgIHJldHVybiBtYXJrdXA7XHJcbn1cclxuXHJcblxyXG59IiwiZXhwb3J0IGNvbnN0IGJldmVyYWdlVGF4ID0gMC4xMjtcclxuZXhwb3J0IGNvbnN0IGZvb2RUYXggPSAwLjA1OyIsImV4cG9ydCBjbGFzcyBIZWFkZXJVSSB7XHJcblxyXG5cclxucmVuZGVyKHBhcmVudEVsZW1lbnQpIHtcclxuY29uc3QgbWFya3VwID0gYFxyXG48aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XHJcbjxhIGhyZWY9XCIvXCIgPlxyXG4gICAgICAgIDxpbWcgc3JjID1cIi9pbWcvcmRkbG9nby5zdmdcIiBhbHQ9XCJSREQgbG9nb1wiIGNsYXNzPVwibG9nb1wiLz5cclxuPC9hPlxyXG5cclxuPGRpdiBjbGFzcz1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmlnYXRpb25fX25hdlwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2aWdhdGlvbl9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmlnYXRpb25fX2l0ZW1cIj48YSBocmVmPVwiL1wiIGNsYXNzPVwibmF2aWdhdGlvbl9fbGlua1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXZpZ2F0aW9uX19pdGVtXCI+PGEgaHJlZj1cIiNmb290ZXJcIiBjbGFzcz1cIm5hdmlnYXRpb25fX2xpbmtcIj5Db250YWN0IHVzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3BwaW5nX19jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInNob3BwaW5nX19jYXJ0X19jYXJ0IG5hdmlnYXRpb25fX2xpbmtcIiBocmVmPVwiI1wiPkNhcnQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcF9fcXVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+MDM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG48L2hlYWRlcj5cclxuYFxyXG5cclxuXHJcbnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbWFya3VwKTtcclxuXHJcbn1cclxuXHJcbnJlbmRlck5hdihwYXJlbnRFbGVtZW50KXtcclxuXHJcblxyXG59XHJcblxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==