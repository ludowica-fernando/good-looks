import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "http://localhost:8080/categories";

  constructor(private http: HttpClient) { }

  get(id) {
    return this.http.get(this.apiUrl + `/${id}`);
  }

  getAll(){
    return this.http.get<[]>(this.apiUrl);
  }
}
