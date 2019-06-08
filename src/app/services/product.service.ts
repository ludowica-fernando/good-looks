import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "/api/products";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  get(id) {
    return this.http.get<Product>(this.apiUrl + `/${id}`);
  }

  addOrUpdate(product) {
    return this.http.post(this.apiUrl, product);
  }

  delete(id) {
    return this.http.delete(this.apiUrl + `/${id}`);
  }

}
