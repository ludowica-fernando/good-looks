import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "http://localhost:8080/products";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[]>(this.apiUrl);
  }

  get(id){
    return this.http.get(this.apiUrl + `/${id}`);
  }

}
