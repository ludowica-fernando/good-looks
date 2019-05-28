import { SessionStorageService } from './../services/session-storage.service';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList = [];
  filterList = [];
  categorySelected;

  constructor(
    private productService: ProductService,
    private sessionService: SessionStorageService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productService.getAll().subscribe(results => {
      this.productList = results;
      this.categoryFilter();
    });
  }

  addToCart(product) {

    let cartItem = {
      cartId: this.sessionService.getCartId(),
      productId: product.id,
      quantity: 1
    };

    // console.log(cartItem);

    this.cartService.addOrUpdate(cartItem).subscribe(data=>{
      // console.log(data);
    });
  }

  categoryFilter() {
    this.route.queryParamMap.subscribe(params => {
      // this.categorySelected = parseInt(params.get('category'));
      this.categorySelected = params.get('category');
      console.log(this.categorySelected)

      this.filterList = (this.categorySelected) ?
        this.productList.filter(product => product.category === this.categorySelected) :
        this.productList;
    });
  }

}
