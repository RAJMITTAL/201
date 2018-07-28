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

var pageElements = {
  cartConainter: document.querySelector(".cart-container")
};
//import MenuData from "./components/list/dataModel";
//import * as menuView from "./components/list/itemgrid";


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
            var markup = '\n    <div class="cart-item" data-itemid=' + item.id + '>\n        <img src="' + item.photosmall + '" alt="" class="food">\n        <div class="itemContent">\n            <h2>' + item.title + '</h2>\n            <span>{item.currency}</span> <p class="price">' + item.totalCost + '</p>\n        </div>\n        <div class="product-quantity">\n            <form id="myform" method="POST" action="#">\n                <div class="product-quantity">\n                    <div class="cart-plus-minus">\n                        <input class="cart-plus-minus-box" type="text" name="qtybutton" value="0">\n                    <button class="dec-qty qty-btn">-</button>\n                    <button id=' + item.id + ' class="inc-qty qty-btn">+</button></div>\n                </div>\n            </form>\n            <div>X</div>\n        </div>\n    </div>\n    ';
            parentElement.insertAdjacentHTML('beforeend', markup);
        }
    }, {
        key: 'renderTotal',
        value: function renderTotal(cartData, parentElement) {
            var markup = '\n    <div class="summary"> \n    <div class="cart-amount">' + cartData.cartTotal + ' </div>\n    <div class="cart-tax">' + cartData.cartTax + ' </div>\n    <div class="cart-total">' + cartData.grandTotal + '</div>\n    </div>';
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
            var markup = '\n    <div class="order-details">\n    <form action="#">\n        <ul>\n            <li><p class="strong">product</p><p class="strong">total</p></li>\n             ' + itemSummary + '\n            <li><p class="strong">cart subtotal</p><p class="strong">' + this.cartData.cartTotal + '</p></li>\n            <li><p class="strong">Tax</p><p>\n                <p' + this.cartData.cartTax + '</p><br>\n            </p></li>\n            <li><p class="strong">order total</p><p class="strong">' + this.cartData.grandTotal + '</p></li>\n            <li><button>place order</button></li>\n        </ul>\n    </form>\n</div>\n    ';
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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhcnRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhY2hlTWFuYWdlci9jYWNoZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnQvY2FydFVJLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnQvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbInBhZ2VFbGVtZW50cyIsImNhcnRDb25haW50ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYWNoZU1hbmFnZXIiLCJDYWNoZU1hbmFnZXIiLCJjYXJ0RGF0YSIsImdldEl0ZW0iLCJjYXJ0VUkiLCJDYXJ0VUkiLCJyZW5kZXJDYXJ0IiwiY2FjaGVTdG9yZSIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwia2V5IiwidmFsdWUiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiZGVsZXRlSXRlbSIsImNsZWFyIiwiQ2FydCIsIkl0ZW1zIiwiY2FydFRvdGFsIiwiY2FydFRheCIsIml0ZW0iLCJvbGRJdGVtIiwiZmluZEluZGV4IiwiY0l0ZW0iLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJjb3VudCIsInB1c2giLCJkYXRhIiwiZm9yRWFjaCIsImluZGV4IiwiZGF0YUl0ZW0iLCJ0aXRsZSIsInVuaXRDb3N0IiwicHJpY2UiLCJpbWFnZSIsInBob3RvU21hbGwiLCJ0b3RhbENvc3QiLCJ0YXgiLCJmb29kVHlwZSIsImZvb2RUYXgiLCJiZXZlcmFnZVRheCIsImdyYW5kVG90YWwiLCJDYXJ0SXRlbSIsInBhcmVudEVsZW1lbnQiLCJyZW5kZXJJdGVtIiwiZWxlbWVudCIsInJlbmRlclRvdGFsIiwibWFya3VwIiwicGhvdG9zbWFsbCIsImluc2VydEFkamFjZW50SFRNTCIsIml0ZW1TdW1tYXJ5IiwicmVkdWNlIiwiaXRlbU1hcmt1cCIsInJlbmRlclN1bW1hcnlJdGVtIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsZUFBZTtBQUNuQkMsaUJBQWVDLFNBQVNDLGFBQVQsQ0FBdUIsaUJBQXZCO0FBREksQ0FBckI7QUFOQTtBQUNBOzs7QUFTQSxJQUFNQyxlQUFlLElBQUlDLDBCQUFKLEVBQXJCO0FBQ0EsSUFBTUMsV0FBV0YsYUFBYUcsT0FBYixDQUFxQixNQUFyQixDQUFqQixDLENBQStDOztBQUUvQyxJQUFNQyxTQUFTLElBQUlDLGNBQUosQ0FBV0gsUUFBWCxFQUFvQk4sYUFBYUMsYUFBakMsQ0FBZjtBQUNBTyxPQUFPRSxVQUFQLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNmYUwsWSxX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QUFDSSxnQkFBTUgsa0xBS0tHLFdBTEwsK0VBTTZELEtBQUtwRCxRQUFMLENBQWNrQixTQU4zRSxtRkFRVSxLQUFLbEIsUUFBTCxDQUFjbUIsT0FSeEIsNEdBVTJELEtBQUtuQixRQUFMLENBQWMyQyxVQVZ6RSwyR0FBTjtBQWdCQSxpQkFBS0UsYUFBTCxDQUFtQk0sa0JBQW5CLENBQXNDLFdBQXRDLEVBQW1ERixNQUFuRDtBQUVIOzs7MENBQ2lCN0IsSSxFQUFLOztBQUVuQixnQkFBTTZCLDRCQUNJN0IsS0FBS08sS0FEVCxVQUNtQlAsS0FBS2EsS0FEeEIsZ0JBQ3dDYixLQUFLa0IsU0FEN0MscUJBQU47QUFHQSxtQkFBT1csTUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRk0sSUFBTVAsb0NBQWMsSUFBcEI7QUFDQSxJQUFNRCw0QkFBVSxJQUFoQixDOzs7Ozs7Ozs7OztBQ0RQLHVDIiwiZmlsZSI6ImpzL2NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jYXJ0UGFnZS5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG4vL2ltcG9ydCBNZW51RGF0YSBmcm9tIFwiLi9jb21wb25lbnRzL2xpc3QvZGF0YU1vZGVsXCI7XHJcbi8vaW1wb3J0ICogYXMgbWVudVZpZXcgZnJvbSBcIi4vY29tcG9uZW50cy9saXN0L2l0ZW1ncmlkXCI7XHJcbmltcG9ydCB7IENhcnQsIENhcnRJdGVtIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJ0L2NhcnRcIjtcclxuaW1wb3J0IHsgQ2FjaGVNYW5hZ2VyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYWNoZU1hbmFnZXIvY2FjaGVNYW5hZ2VyXCI7XHJcbmltcG9ydCAge0NhcnRVSX0gZnJvbSBcIi4vY29tcG9uZW50cy9jYXJ0L2NhcnRVSVwiO1xyXG5cclxuY29uc3QgcGFnZUVsZW1lbnRzID0ge1xyXG4gIGNhcnRDb25haW50ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FydC1jb250YWluZXJcIilcclxufTtcclxuXHJcbmNvbnN0IGNhY2hlTWFuYWdlciA9IG5ldyBDYWNoZU1hbmFnZXIoKTtcclxuY29uc3QgY2FydERhdGEgPSBjYWNoZU1hbmFnZXIuZ2V0SXRlbShcImNhcnRcIik7IC8vIG1vdmUga2V5IHRvIGNvbnN0YW50XHJcblxyXG5jb25zdCBjYXJ0VUkgPSBuZXcgQ2FydFVJKGNhcnREYXRhLHBhZ2VFbGVtZW50cy5jYXJ0Q29uYWludGVyKTtcclxuY2FydFVJLnJlbmRlckNhcnQoKTsiLCJleHBvcnQgY2xhc3MgQ2FjaGVNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmUgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2U7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBzZXRJdGVtKGtleSAsdmFsdWUpIHtcclxuICAgICAgdGhpcy5jYWNoZVN0b3JlLnNldEl0ZW0oa2V5LEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtKGtleSkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuY2FjaGVTdG9yZS5nZXRJdGVtKGtleSkpXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlSXRlbShrZXkpIHtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmUuZGVsZXRlSXRlbShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQWxsKCkge1xyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yZS5jbGVhcigpO1xyXG4gICAgfVxyXG4gIH0iLCJpbXBvcnQge2JldmVyYWdlVGF4LCBmb29kVGF4fSBmcm9tIFwiLi9jb25maWdcIlxyXG5leHBvcnQgY2xhc3MgQ2FydCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5JdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2FydFRvdGFsPTA7XHJcbiAgICAgICAgdGhpcy5jYXJ0VGF4PTA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGl0ZW0pIHtcclxuICAgICAgICB2YXIgb2xkSXRlbSA9IHRoaXMuSXRlbXMuZmluZEluZGV4KGNJdGVtID0+IGNJdGVtLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG9sZEl0ZW0pO1xyXG4gICAgICAgIGlmIChvbGRJdGVtICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm91bmRcIilcclxuICAgICAgICAgICAgdGhpcy5JdGVtc1tvbGRJdGVtXS5jb3VudCA9IGl0ZW0uY291bnQ7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luIG5ldycpXHJcbiAgICAgICAgdGhpcy5JdGVtcy5wdXNoKGl0ZW0pXHJcbiAgICB9XHJcbiAgICByZWNvbmNpbGUoZGF0YSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgY29uc3QgaW5kZXggPSBkYXRhLmZpbmRJbmRleChkYXRhSXRlbSA9PiBkYXRhSXRlbS5pZCA9PSBpdGVtLmlkKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0udGl0bGUgPSBkYXRhW2luZGV4XS50aXRsZTtcclxuICAgICAgICAgICAgaXRlbS51bml0Q29zdCA9IGRhdGFbaW5kZXhdLnByaWNlO1xyXG4gICAgICAgICAgICBpdGVtLmltYWdlICA9IGRhdGFbaW5kZXhdLnBob3RvU21hbGxcclxuICAgICAgICAgICAgaXRlbS50b3RhbENvc3QgPSBpdGVtLmNvdW50ICogaXRlbS51bml0Q29zdDtcclxuICAgICAgICAgICAgaXRlbS50YXggPSBpdGVtLnRvdGFsQ29zdCAqIChpdGVtLmZvb2RUeXBlID09PVwiZlwiP2Zvb2RUYXg6YmV2ZXJhZ2VUYXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYXJ0VG90YWwrPWl0ZW0udG90YWxDb3N0O1xyXG4gICAgICAgICAgICB0aGlzLmNhcnRUYXgrPSBpdGVtLnRheDtcclxuICAgICAgICAgICAgdGhpcy5ncmFuZFRvdGFsID0gdGhpcy5jYXJ0VG90YWwgKyB0aGlzLmNhcnRUYXg7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgQ2FydEl0ZW0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBjb3VudCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudW5pdENvc3Q9XCJcIjtcclxuICAgICAgICB0aGlzLnRvdGFsQ29zdD1cIlwiO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPVwiXCI7XHJcbiAgICAgICAgdGhpcy50YXg9XCJcIjtcclxuICAgIH1cclxuXHJcbn0iLCIvL2ltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcclxuLy9pbXBvcnQgeyBDYXJ0IH0gZnJvbSBcIi4vY2FydFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhcnRVSSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FydERhdGEsIHBhcmVudEVsZW1lbnQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jYXJ0RGF0YSA9IGNhcnREYXRhO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG5cclxucmVuZGVyQ2FydCgpIHtcclxuIHRoaXMuY2FydERhdGEuSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxudGhpcy5yZW5kZXJJdGVtKGVsZW1lbnQsdGhpcy5wYXJlbnRFbGVtZW50KTsgIFxyXG4gfSk7XHJcblxyXG50aGlzLnJlbmRlclRvdGFsKHRoaXMuY2FydERhdGEsIHRoaXMucGFyZW50RWxlbWVudCk7XHJcbn1cclxuXHJcbnJlbmRlckl0ZW0oaXRlbSxwYXJlbnRFbGVtZW50KXtcclxuICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgY29uc3QgbWFya3VwID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbVwiIGRhdGEtaXRlbWlkPSR7aXRlbS5pZH0+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke2l0ZW0ucGhvdG9zbWFsbH1cIiBhbHQ9XCJcIiBjbGFzcz1cImZvb2RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbUNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGgyPiR7aXRlbS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8c3Bhbj57aXRlbS5jdXJyZW5jeX08L3NwYW4+IDxwIGNsYXNzPVwicHJpY2VcIj4ke2l0ZW0udG90YWxDb3N0fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1xdWFudGl0eVwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBpZD1cIm15Zm9ybVwiIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1xdWFudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXBsdXMtbWludXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiY2FydC1wbHVzLW1pbnVzLWJveFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInF0eWJ1dHRvblwiIHZhbHVlPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWMtcXR5IHF0eS1idG5cIj4tPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0ke2l0ZW0uaWR9IGNsYXNzPVwiaW5jLXF0eSBxdHktYnRuXCI+KzwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPGRpdj5YPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICBwYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbWFya3VwKTtcclxuICBcclxufVxyXG4gICAgXHJcbnJlbmRlclRvdGFsKGNhcnREYXRhLHBhcmVudEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IG1hcmt1cCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5XCI+IFxyXG4gICAgPGRpdiBjbGFzcz1cImNhcnQtYW1vdW50XCI+JHtjYXJ0RGF0YS5jYXJ0VG90YWx9IDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcnQtdGF4XCI+JHtjYXJ0RGF0YS5jYXJ0VGF4fSA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXRvdGFsXCI+JHtjYXJ0RGF0YS5ncmFuZFRvdGFsfTwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICAgIHBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBtYXJrdXApO1xyXG59XHJcblxyXG5yZW5kZXJTdW1tYXJ5KCl7XHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGl0ZW1TdW1tYXJ5ID0gdGhpcy5jYXJ0RGF0YS5JdGVtcy5yZWR1Y2UoKGl0ZW1NYXJrdXAsaXRlbSkgPT4gXHJcbiAgICB7XHJcbiAgICAgICAgaXRlbU1hcmt1cCs9IHRoaXMucmVuZGVyU3VtbWFyeUl0ZW0oaXRlbSk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1NYXJrdXA7XHJcbiAgICB9LFwiXCIpO1xyXG5jb25zb2xlLmxvZyhpdGVtU3VtbWFyeSk7XHJcbiAgICBjb25zdCBtYXJrdXAgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwib3JkZXItZGV0YWlsc1wiPlxyXG4gICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPjxwIGNsYXNzPVwic3Ryb25nXCI+cHJvZHVjdDwvcD48cCBjbGFzcz1cInN0cm9uZ1wiPnRvdGFsPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAke2l0ZW1TdW1tYXJ5fVxyXG4gICAgICAgICAgICA8bGk+PHAgY2xhc3M9XCJzdHJvbmdcIj5jYXJ0IHN1YnRvdGFsPC9wPjxwIGNsYXNzPVwic3Ryb25nXCI+JHt0aGlzLmNhcnREYXRhLmNhcnRUb3RhbH08L3A+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxwIGNsYXNzPVwic3Ryb25nXCI+VGF4PC9wPjxwPlxyXG4gICAgICAgICAgICAgICAgPHAke3RoaXMuY2FydERhdGEuY2FydFRheH08L3A+PGJyPlxyXG4gICAgICAgICAgICA8L3A+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxwIGNsYXNzPVwic3Ryb25nXCI+b3JkZXIgdG90YWw8L3A+PHAgY2xhc3M9XCJzdHJvbmdcIj4ke3RoaXMuY2FydERhdGEuZ3JhbmRUb3RhbH08L3A+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxidXR0b24+cGxhY2Ugb3JkZXI8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Zvcm0+XHJcbjwvZGl2PlxyXG4gICAgYDtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1hcmt1cCk7XHJcbiAgXHJcbn1cclxucmVuZGVyU3VtbWFyeUl0ZW0oaXRlbSl7XHJcbiAgICBcclxuICAgIGNvbnN0IG1hcmt1cCA9YFxyXG4gICAgIDxsaT48cD4ke2l0ZW0uY291bnR9eCAke2l0ZW0udGl0bGV9IDwvcD48cD4ke2l0ZW0udG90YWxDb3N0fTwvcD48L2xpPlxyXG4gICAgIGBcclxuICAgIHJldHVybiBtYXJrdXA7XHJcbn1cclxuXHJcblxyXG59IiwiZXhwb3J0IGNvbnN0IGJldmVyYWdlVGF4ID0gMC4xMjtcclxuZXhwb3J0IGNvbnN0IGZvb2RUYXggPSAwLjA1OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=