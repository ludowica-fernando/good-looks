import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartProduct } from '../models/cart-product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any = {};

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(data => {
      this.cart = data;
      // console.log(data)
    });
  }

  increaseQty(cartProducts) {

    let cartId = this.cartService.getOrCreateCartId();

    let newCartItem = {
      cartId: cartId,
      productId: cartProducts.product.id,
      quantity: cartProducts.quantity + 1
    };

    // console.log(newCartItem);

    this.cartService.addOrUpdate(newCartItem).subscribe(data => {
      // console.log(data);
      this.updateList(data);
    });
  }

  decreaseQty(cartProduct) {

    let cartId = this.cartService.getOrCreateCartId();

    let newCartItem = {
      cartId: cartId,
      productId: cartProduct.product.id,
      quantity: cartProduct.quantity - 1
    };

    this.cartService.addOrUpdate(newCartItem).subscribe(data => {
      this.updateList(data);
    });
  }

  updateList(newCartItem) {
    let index = this.cart.cartProducts.findIndex(item => item.id == newCartItem.id);
    this.cart.cartProducts[index] = newCartItem;
  }

  removeItem(cartProduct) {

    let cartId = this.cartService.getOrCreateCartId();

    let deleteCartProduct = {
      cartId: cartId,
      productId: cartProduct.product.id
    };

    this.cartService.deleteCartItem(deleteCartProduct).subscribe(data => {
    
      this.cart.cartProducts = this.cart.cartProducts.filter(item => item.id !== data['id']);
    });
  }
}
