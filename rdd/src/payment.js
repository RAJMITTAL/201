import "./style.scss";
//import MenuData from "./components/list/dataModel";
//import * as menuView from "./components/list/itemgrid";
import { Cart, CartItem } from "./components/cart/cart";
import { CacheManager } from "./components/cacheManager/cacheManager";
import  {CartUI} from "./components/cart/cartUI";
import  {UserDetails} from "./components/user/userDetails";
import  {Payment} from "./components/payment/payment";
const pageElements = {
  cartSummary: document.querySelector(".cart-summary")
};

const cacheManager = new CacheManager();
const cartData = cacheManager.getItem("cart"); // move key to constant

const cartUI = new CartUI(cartData,pageElements.cartSummary);

cartUI.renderSummary();

var userDetails = new UserDetails();
userDetails.renderUserData(pageElements.cartSummary);


  // The page is fully loaded
  let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      const paymentModule = new Payment();
paymentModule.Integrate();
    }
  }, 100);


