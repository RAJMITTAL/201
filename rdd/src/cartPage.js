import "./style.scss";
//import MenuData from "./components/list/dataModel";
//import * as menuView from "./components/list/itemgrid";
import { Cart, CartItem } from "./components/cart/cart";
import { CacheManager } from "./components/cacheManager/cacheManager";
import  {CartUI} from "./components/cart/cartUI";
import {HeaderUI} from "./components/header/HeaderUI";

const pageElements = {
  cartConainter: document.querySelector(".cart-container")
};

var header = new HeaderUI();
header.render(pageElements.cartConainter);

const cacheManager = new CacheManager();
const cartData = cacheManager.getItem("cart"); // move key to constant

const cartUI = new CartUI(cartData,pageElements.cartConainter);
cartUI.renderCart();