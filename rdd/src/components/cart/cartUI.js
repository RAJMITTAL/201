//import { elements } from "./elements";
//import { Cart } from "./cart";

export class CartUI {

    constructor(cartData, parentElement)
    {
        this.cartData = cartData;
        this.parentElement = parentElement;
    }


renderCart() {
 this.cartData.Items.forEach(element => {
this.renderItem(element,this.parentElement);  
 });

this.renderTotal(this.cartData, this.parentElement);
}

renderItem(item,parentElement){
    console.log(item);
    const markup = `
    <div class="cart-item" data-itemid=${item.id}>
        <img src="${item.photosmall}" alt="" class="food">
        <div class="itemContent">
            <h2>${item.title}</h2>
            <span>{item.currency}</span> <p class="price">${item.totalCost}</p>
        </div>
        <div class="product-quantity">
            <form id="myform" method="POST" action="#">
                <div class="product-quantity">
                    <div class="cart-plus-minus">
                        <input class="cart-plus-minus-box" type="text" name="qtybutton" value="0">
                    <button class="dec-qty qty-btn">-</button>
                    <button id=${item.id} class="inc-qty qty-btn">+</button></div>
                </div>
            </form>
            <div>X</div>
        </div>
    </div>
    `;
    parentElement.insertAdjacentHTML('beforeend', markup);
  
}
    
renderTotal(cartData,parentElement) {
    const markup = `
    <div class="summary"> 
    <div class="cart-amount">${cartData.cartTotal} </div>
    <div class="cart-tax">${cartData.cartTax} </div>
    <div class="cart-total">${cartData.grandTotal}</div>
    </div>`;
    parentElement.insertAdjacentHTML('beforeend', markup);
}

   
}