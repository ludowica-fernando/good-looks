import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PusherService } from './pusher.service';
import { Observable } from 'rxjs';
import { SessionStorageService } from './session-storage.service';
import { Cart } from '../models/cart';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    apiUrl = "http://localhost:8080/cart";

    private channel: any;

    constructor(
        private http: HttpClient,
        private pusherService: PusherService,
        private sessionService: SessionStorageService
    ) {

        // let cartId = this.sessionService.getCartId();
        //this.channel = this.pusherService.getPusher().subscribe('cart' + cartId);
    }

    getChannel() {
        return this.channel;
    }

    addOrUpdate(param): Observable<{}> {
        return this.http.post(this.apiUrl, param);
    }

    deleteCartItem(cartItem): Observable<{}> {

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
            this.sessionService.saveCartId(data['id']);
            return this.sessionService.getCartId();
        });
    }

    private fetch() {
        let userId = this.sessionService.getUserId();
        return this.http.post(this.apiUrl + '/fetch', userId);
    }

}
