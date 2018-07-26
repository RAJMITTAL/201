import { elements } from "./elements";

export const renderItem = (item,parentElemement) => {
    console.log(item);
    const markup = `
    <div class="item" data-itemid=${item.id}>
        <img src="${item.photoLarge}" alt="" class="food">
        <div class="itemContent">
            <h2>${item.title}</h2>
            <p class="description">${item.description}</p>
           <span>${item.currency}</span> <p class="price">${item.price}</p>
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
        </div>
    </div>
    `;
    parentElemement.insertAdjacentHTML('beforeend', markup);
  
}
    
   
