import axios from 'axios';
export class Payment {

Integrate()
{
   let client_token = "";

  const prom =  axios.get('http://brainserver.azurewebsites.net/gettoken')
  .then(function(response) {
    // handle success
    client_token = response.data;
  })
  .catch(function (error) {
    return "error";
  })
   var form = document.querySelector('#payment-form');
   var b = Promise.all([prom]).then(values => {
   braintree.dropin.create({
       authorization: client_token,
       container: '#bt-dropin',
       paypal: {
           flow: 'vault'
       }
   }, function (createErr, instance) {
       form.addEventListener('submit', function (event) {
           event.preventDefault();

           instance.requestPaymentMethod(function (err, payload) {
               if (err) {
                   console.log('Error', err);
                   return;
               }

               // Add the nonce to the form and submit
               document.querySelector('#nonce').value = payload.nonce;
               const payment = axios.post('http://brainserver.azurewebsites.net/makepayment', {
                amount: document.querySelector('.grandTotal').innerHTML,
                payment_method_nounce: document.querySelector('#nonce').value
              })
              .then(function (response) {
                window.location="/orderSummary";
              })
              .catch(function (error) {
                console.log(error);
              });

           });
       });});
   });
}
}