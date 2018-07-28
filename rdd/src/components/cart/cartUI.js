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
    <div><img src="${item.photosmall}" alt="" class="food"></div>
        <div class=""> ${item.title}</div>
         <div>${item.currency}${item.totalCost}</div>
         <div class="product-quantity">
            <form id="myform" method="POST" action="#">
                <div class="product-quantity">
                    <div class="cart-plus-minus">
                        <input class="cart-plus-minus-box" type="text" name="qtybutton" value="0">
                    <button class="dec-qty qty-btn">-</button>
                    <button id=${item.id} class="inc-qty qty-btn">+</button></div>
                </div>
            </form>
         </div>
            <div>X</div>
        
    </div>
    `;
    parentElement.insertAdjacentHTML('beforeend', markup);
  
}
    
renderTotal(cartData,parentElement) {
    const markup = `
   <div class="summary">
    <div class="summary__wrap"> 
    <div class="summary__amount summary__item"><span>Cart Total</span><span>${cartData.cartTotal} </span></div>
    <div class="summary__tax summary__item"><span>Tax</span><span>${cartData.cartTax}</span></div>
    <div class="summary__total summary__item"><span>Grand Total</span><span>${cartData.grandTotal}</span></div>
    <div ><span></span><span><form id="myform" method="get" action="/payment.html"><button class="food__btn">Proceed to Payment</button></form></span></div>
    </div>
    </div>`;
    parentElement.insertAdjacentHTML('beforeend', markup);
}

renderSummary(){

    
    
    const itemSummary = this.cartData.Items.reduce((itemMarkup,item) => 
    {
        itemMarkup+= this.renderSummaryItem(item);
        return itemMarkup;
    },"");
console.log(itemSummary);
    const markup = `
    <div class="order-details">
    <form action="#">
        <ul>
            <li><p class="strong">product</p><p class="strong">total</p></li>
             ${itemSummary}
            <li><p class="strong">cart subtotal</p><p class="strong">${this.cartData.cartTotal}</p></li>
            <li><p class="strong">Tax</p><p>
                <p${this.cartData.cartTax}</p><br>
            </p></li>
            <li><p class="strong">order total</p><p class="grandTotal">${this.cartData.grandTotal}</p></li>
            <li><button>place order</button></li>
        </ul>
    </form>
</div>
    `;
    this.parentElement.insertAdjacentHTML('beforeend', markup);
  
}
renderSummaryItem(item){
    
    const markup =`
     <li><p>${item.count}x ${item.title} </p><p>${item.totalCost}</p></li>
     `
    return markup;
}


}