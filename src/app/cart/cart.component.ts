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
    });
  }

  increaseQty(cartProduct) {

    let cartId = this.cartService.getOrCreateCartId();

    let newCartItem = {
      cartId: cartId,
      productId: cartProduct.product.id,
      quantity: cartProduct.quantity + 1
    };

    this.cartService.addOrUpdate(newCartItem).subscribe(data => {
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
    let index = this.cart.cartProduct.findIndex(item => item.id == newCartItem.id);
    this.cart.cartProduct[index] = newCartItem;
  }

  removeItem(cartProduct) {

    let cartId = this.cartService.getOrCreateCartId();

    let deleteCartProduct = {
      cartId: cartId,
      productId: cartProduct.product.id
    };

    this.cartService.deleteCartItem(deleteCartProduct).subscribe(data => {
    
      this.cart.cartProduct = this.cart.cartProduct.filter(item => item.id !== data['id']);
    });
  }
}
