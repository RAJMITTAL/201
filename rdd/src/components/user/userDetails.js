//import { elements } from "./elements";
//import { Cart } from "./cart";

export class UserDetails {

renderUserData(parentElement){
   
    const markup = `

    <div class="main-container">
    <form id="payment-form" method="post" action="#">
      <div class="form-container">
          <div>
              <label class="control-label required" for="name">Name
              </label>
              <input type="text" name="name" id="name">
          </div>
          <div>
              <label class="control-label required" for="email">Email
              </label>
              <input type="email" name="email" id="email" required>
          </div>
          <div>

              <label class="control-label required" for="mobile">Mobile
              </label>
              <div>
                  <input type="tel" name="mobile" id="mobile">
              </div>
          </div>
      </div>

      <div class="personal-details"></div>

      <div class="address">
          <div>
              <label class="control-label required" for="addressLine1">Flat No. / House No.
              </label>
              <input type="text" name="addressLine1" id="addressLine1">
          </div>
          <div>
              <label class="control-label required" for="addressLin2">Apartment / Locality name.
              </label>
              <input type="text" name="addressLine2" id="addressLine2">
          </div>
      </div>
      <div class="payment">
          <input type="radio" name="cod" id="cod" class="cod" value="COD">
          <label class="" for="cod"> Cash on Delivery (COD)
          </label>
          <div class="bt-drop-in-wrapper">
                   <div id="bt-dropin"></div>
               </div>
               <input id="nonce" name="payment_method_nonce" type="hidden" />
          <button class="button">Place order now</button>
      </div>
      </form>
  </div>
   `

   parentElement.insertAdjacentHTML('beforeend', markup);
}
}