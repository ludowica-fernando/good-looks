import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models/cart';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  apiUrl = "/api/checkout";

  constructor(
    private http: HttpClient,
    private sessionService: SessionStorageService
  ) { }


  checkout() {
    let cartId = this.sessionService.getCartId();
    console.log(cartId);
    return this.http.get<Cart>(this.apiUrl + `/${cartId}`);
  }
}
