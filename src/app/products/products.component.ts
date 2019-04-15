import { SessionStorageService } from './../services/session-storage.service';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList = [];
  constructor(private productService: ProductService, private sessionService: SessionStorageService, private cartService: CartService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(results => {
      this.productList = results;
    });
  }

  addToCart(product) {

    let cartItem = {
      cartId: this.sessionService.getCartId(),
      productId: product.id,
      quantity: 1
    };

    this.cartService.addOrUpdate(cartItem).subscribe();
  }

}
