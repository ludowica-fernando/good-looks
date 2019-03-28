import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any = {};
  cartProductCount: number = 0;
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(data => {
      this.cart = data;

      this.setValues();
    });

    this.initListeners();
  }

  initListeners() {
    this.cartService.getChannel().bind('itemAdded', data => {
      this.cart.cartProducts.push(data);

      this.setValues();
    });

    this.cartService.getChannel().bind('itemUpdated', data => {
      let index = this.cart.cartProducts.findIndex(item => item.id == data.id);
      this.cart.cartProducts[index] = data;

      this.setValues();
    });

    this.cartService.getChannel().bind('itemRemoved', data => {
      this.cart.cartProducts = this.cart.cartProducts.filter(item => item.id !== data.id);
      // this.shoppingCart.shoppingCartProducts = this.shoppingCart.shoppingCartProducts.filter(item => {
      //   console.log(item.id !== data.id);
      // });

      this.setValues();
    });

    this.cartService.getChannel().bind('cartDeleted', data => {
      this.cart.cartProducts = [];

      this.setValues();
    });
  }

  setValues() {
    this.getProductCount();
    this.getTotalPrice();
  }

  private getProductCount() {
    this.cartProductCount = 0;
    if (this.cart) {
      let cartProducts = this.cart['cartProducts'];
      for (let cartItem of cartProducts) {
        this.cartProductCount += cartItem.quantity;
      }
    }
  }

  private getTotalPrice() {
    this.totalPrice = 0;

    if (this.cart) {
      let cartProducts = this.cart['cartProducts'];
      for (let cartItem of cartProducts) {
        this.totalPrice += cartItem.product.price * cartItem.quantity;
      }
    }
  }

  increaseCartItem(cartItem) {

    let cartId = this.cartService.getOrCreateCartId();

    let newCartItem = {
      shoppingCartId: cartId,
      productId: cartItem.product.id,
      quantity: cartItem.quantity + 1
    };

    this.cartService.addOrUpdate(newCartItem).subscribe();
  }

  decreaseCartItem(cartItem) {

    let cartId = this.cartService.getOrCreateCartId();
    let newCartItem = {
      shoppingCartId: cartId,
      productId: cartItem.product.id,
      quantity: cartItem.quantity - 1
    };

    this.cartService.addOrUpdate(newCartItem).subscribe();
  }

  clearCart() {
    this.cartService.clearCart().subscribe();
  }


}
