import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: { name: string }[];
  filteredProductList: any[];
  prodListSubscription: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.prodListSubscription = this.productService.getAll().subscribe(data => {
      this.filteredProductList = this.productList = data;
    });
  }

  ngOnDestroy() {
    this.prodListSubscription.unsubscribe();
  }

  filter(query: string) {
    this.filteredProductList = (query) ?
      this.productList.filter(product => product.name.toLowerCase().includes(query.toLowerCase())) :
      this.productList;
  }
}
