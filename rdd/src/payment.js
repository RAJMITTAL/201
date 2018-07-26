import "./style.scss";
//import MenuData from "./components/list/dataModel";
//import * as menuView from "./components/list/itemgrid";
import { Cart, CartItem } from "./components/cart/cart";
import { CacheManager } from "./components/cacheManager/cacheManager";
import  {CartUI} from "./components/cart/cartUI";

const pageElements = {
  cartConainter: document.querySelector(".cart-container")
};

const cacheManager = new CacheManager();
const cartData = cacheManager.getItem("cart"); // move key to constant

const cartUI = new CartUI(cartData,pageElements.cartConainter);
cartUI.renderCart();