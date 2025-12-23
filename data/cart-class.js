class Cart{
  cartItems=undefined;
  localStorageKey=undefined;

constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.loadFromStorage();
  }


  loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));

      if (!this.cartItems) {
        this.cartItems = [{
          productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity:2,
          deliveryOptionId:'1'
        }, {
          productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity:1,
          deliveryOptionId:'2'
        }];
      }
    }

    saveToStorage() {
      localStorage.setItem(
        this.localStorageKey,
        JSON.stringify(this.cartItems)
      );
    }


    addToCart(productId) {
      let matchingItem;
      this.cartItems.forEach(cartitem => {
        if (productId === cartitem.productId) {
          matchingItem = cartitem;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        this.cartItems.push({
          productId,
          quantity: 1,
          deliveryOptionId: '1'
        });
      }

      this.saveToStorage();
    }

    removeFromCart(productId) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (productId === this.cartItems[i].productId) {
          this.cartItems.splice(i, 1);
          break;
        }
      }
      this.saveToStorage();
    }



    updateDeliveryOption(productId, deliveryOptionId) {
      let matchingItem;
      this.cartItems.forEach(cartitem => {
        if (productId === cartitem.productId) {
          matchingItem = cartitem;
        }
      });

      if (!matchingItem) return;

      matchingItem.deliveryOptionId = deliveryOptionId;
      this.saveToStorage();
    }
  
}



const cart = new Cart();
const businessCart = new Cart();




//console.log(cart);
//console.log(businessCart);
//console.log(businessCart instanceof Cart);


/*
uses of classes 
 constructor lets us run setup code inside the class 




*/ 

