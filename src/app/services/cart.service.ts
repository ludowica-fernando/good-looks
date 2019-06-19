import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageService } from './session-storage.service';
import { Cart } from '../models/cart';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    apiUrl = "/api/carts";

    constructor(
        private http: HttpClient,
        private sessionService: SessionStorageService
    ) { }

    addOrUpdate(param): Observable<{}> {
        return this.http.post(this.apiUrl, param);
    }

    deleteCartItem(cartItem) {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            body: cartItem
        };
        return this.http.delete(this.apiUrl, options);
    }

    clearCart(): Observable<{}> {
        let cartId = this.sessionService.getCartId();
        this.sessionService.saveCartId("");
        return this.http.delete(`${this.apiUrl}/${cartId}`);
    }

    getCart(): Observable<Cart> {
        let cartId = this.getOrCreateCartId();
        return this.http.get<Cart>(this.apiUrl + `/${cartId}`);
    }

    getOrCreateCartId() {
        let cartId = this.sessionService.getCartId();
        if (cartId) return cartId;

        this.fetch().subscribe(data => {
            // console.log(data);
            this.sessionService.saveCartId(data['id']);
            return this.sessionService.getCartId();
        });
    }

    fetch() {
        let userId = this.sessionService.getUserId();
        return this.http.get(this.apiUrl + '/fetch' + `/${userId}`);
    }
}