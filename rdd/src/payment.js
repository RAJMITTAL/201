import "./style.scss";
import { Cart, CartItem } from "./components/cart/cart";
import { CacheManager } from "./components/cacheManager/cacheManager";
import  {CartUI} from "./components/cart/cartUI";
import  {UserDetails} from "./components/user/userDetails";
import  {Payment} from "./components/payment/payment";
import {HeaderUI} from "./components/header/HeaderUI";
const pageElements = {
  cartSummary: document.querySelector(".cart-summary"),
  mainContainer: document.querySelector(".payment-container"),
  formContainer: document.querySelector(".user-forms"),
  
};

var header = new HeaderUI();
header.render(pageElements.mainContainer);

const cacheManager = new CacheManager();
const cartData = cacheManager.getItem("cart"); // move key to constant

const cartUI = new CartUI(cartData,pageElements.cartSummary);

cartUI.renderSummary();

var userDetails = new UserDetails();
userDetails.renderUserData(pageElements.formContainer);


  // The page is fully loaded
  let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      const paymentModule = new Payment();
paymentModule.Integrate();
    }
  }, 100);


