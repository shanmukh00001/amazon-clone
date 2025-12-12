export let cart=JSON.parse(localStorage.getItem('cart'));

if(!cart){
cart=[{//these are the sample values for the development
  productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity:2,
},{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1
}];
}


function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));//takes two string whatever we want to save and the data we want to save as strig
}

export function addTOcart(productId){
  let matchingItem;
  cart.forEach((cartitem)=>{
    if(productId===cartitem.productId){
      matchingItem=cartitem;
    }
  });
  if(matchingItem){
    matchingItem.quantity+=1;
  }
  else {
    cart.push({
    productId: productId,
    quantity:1
  });
  }
  saveToStorage();
}


export function removeFromCart(productId){
  for(let i=0;i<cart.length;i++){
      if(productId===cart[i].productId){
        cart.splice(i,1);
      }
    }
  saveToStorage();
}

