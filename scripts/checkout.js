import {renderOrederSummary} from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import "../data/cart-class.js";
//import '../data/backend-practice.js'
import { loadProducts } from "../data/products.js";

async function loadPage(){//why async is strongest is can use await 
  console.log('load page');

}

loadPage().then(()=>{
  console.log('next step');
});
new Promise((resolve)=>{
  loadProducts(()=>{
    resolve();
  });
}).then(()=>{
  renderOrederSummary();
renderPaymentSummary();
});

/*
loadProducts(()=>{
renderOrederSummary();
renderPaymentSummary();
});
*/

