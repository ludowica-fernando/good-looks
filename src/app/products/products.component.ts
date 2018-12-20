import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit { 

  productList = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(results => {
      this.productList = results;
    });

  }

}
