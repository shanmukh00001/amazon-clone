//as we have a list we are using the array as a ;ist 
//an object to hold the product data 


//upto here step 1 we used the save the data 

//step 2 generate the html
// products.forEach((product) =>{they both are the same
// }); .
import {cart, addTOcart} from "../data/cart.js";
import { products } from "../data/products.js";
import {formatCurrency} from './utils/money.js'
//const cart=[];
let productsHTML="";
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  productsHTML+=
  `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
          ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">$
            ${(product.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button 
          button-primary js-add-to-cart"
          data-product-id="${product.id}">
          
            Add to Cart
          </button>
        </div>`
}

function updatecartquantity(){
let cartquantity=0;
  cart.forEach((cartitem)=>{
    cartquantity+=cartitem.quantity;
  });
  document.querySelector('.js-cart-quantity').innerHTML=cartquantity;
}

document.querySelector('.js-products-grid').
innerHTML=productsHTML;


const buttons = document.querySelectorAll('.js-add-to-cart');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
  const productId=buttons[i].dataset.productId;//kebab case to ccamel case
    addTOcart(productId);
    updatecartquantity();
  
    
  });
}
//added a data product attribute 
//  from the kotlin ---->  data- product-name --acessing->dataset.productName

