import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  data: any = {};

  constructor(
    private authService: AuthService,
    private sessionService: SessionStorageService,
    private cartService: CartService,
    private router: Router) { }

  ngOnInit() { }

  submit(form) {
    this.authService.login(form.username, form.password).subscribe(results => {

      if (results) {
        console.log(results);
        this.data = results;
        this.sessionService.saveUserId(this.data.userId);
        this.sessionService.saveUsername(this.data.username);
        this.sessionService.saveToken(this.data.accessToken);
        this.sessionService.saveAuthorities(this.data.authorities);

        this.router.navigateByUrl('/admin/manage-products');
      }

    });
  }
}
