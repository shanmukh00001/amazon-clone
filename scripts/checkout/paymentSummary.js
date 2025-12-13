import {cart} from '../../data/cart.js';
import {products, getProduct} from '../../data/products.js';

export function renderPaymentSummary(){
//console.log('payment summary');
let productPriceCents=0;
cart.forEach((cartItem) => {
  const product=getProduct(cartItem.productId);
  //const product=getProduct(cartItem.id);
  console.log(product);
  productPriceCents+=product.priceCents*cartItem.quantity;

});
console.log(productPriceCents);
}
