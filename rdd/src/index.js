import "./style.scss";
import MenuData from "./components/list/dataModel";
import * as menuView from "./components/list/itemgrid";
import { Cart, CartItem } from "./components/cart/cart";
import { CacheManager } from "./components/cacheManager/cacheManager";
const pageElements = {
  items: document.querySelector(".item-container")
};

const menuDetails = new MenuData();
var a = menuDetails.getMenuItems();
var b = Promise.all([a]).then(values => {
  console.values;
  menuDetails.menuItems.forEach(element => {
    menuView.renderItem(element, pageElements.items);
  });
});

var myCart = new Cart();
const cacheManager = new CacheManager();
document
  .querySelector(".item-container")
  .addEventListener("click", function(event) {
    // alert(event.target.id+'pp');
    // alert('raju')
    if (event.target.matches(".qty-btn")) {
      const btn = event.target.parentElement.querySelector(
        ".cart-plus-minus-box"
      );
      let quantity = parseInt(btn.value);
      btn.value = quantity += 1;
      console.log(btn);
      var item = new CartItem(event.target.id, btn.value);
      //console.log(item);
      myCart.update(item);
     // console.log(myCart);
      cacheManager.setItem("cart", myCart);
      console.log("writing cache");
      console.log(cacheManager.getItem("cart"));
      myCart.reconcile(menuDetails.menuItems);
    }
    event.preventDefault();
    event.stopPropagation();
  });

// var carItem = new CartItem(1,1)

// myCart.update(carItem);

console.log("mycart");
