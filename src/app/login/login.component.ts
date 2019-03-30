import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '../services/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(
    private authService: AuthService,
    private sessionService: SessionStorageService,
    private cartService: CartService,
    private router: Router) { }

  ngOnInit() {

  }

  submit(form) {
    this.authService.login(form.username, form.password).subscribe(results => {
      if (results) {
        console.log(results);
        this.user = results;
        this.sessionService.saveUserId(this.user.userId);
        this.sessionService.saveUsername(this.user.username)

        this.cartService.getCart().subscribe();
        
        this.router.navigateByUrl('/products');
      }
      else {

      }
    });
  }
}
