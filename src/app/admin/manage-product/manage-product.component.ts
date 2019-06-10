import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  product: Product = new Product();
  id: string;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id).subscribe(data => {
        this.product = data;
        console.log(data);
      });
    }
  }


  onSubmit() {
    console.log(this.product);
    this.productService.addOrUpdate(this.product).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['admin/manage-products']);
      }
    );
  }

  delete() {
    if (confirm("Are you sure to Delete Product?")) {
      this.productService.delete(this.id).subscribe(data => {
        if (data) {
          this.router.navigate(['admin/manage-products']);
        }
      });
    }
  }
}