import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart';
import { CheckoutService } from '../services/checkout.service';
import { SessionStorageService } from '../services/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: Cart = new Cart();

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private sessionService: SessionStorageService,
    private router: Router
  ) { }

  ngOnInit() {

    this.cartService.getCart().subscribe(data => {
      console.log(data);
      this.cart = data;
    });
  }

  onSubmit() {

    this.checkoutService.checkout().subscribe(data => {
      console.log(data);
      this.sessionService.saveCartId(data['id'].toString());

    });

    this.router.navigateByUrl('');

  }
}
