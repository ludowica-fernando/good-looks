import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  submit(form) {
    this.authService.login(form.username, form.password).subscribe(results => {
      if (results) {
        this.router.navigateByUrl('/products');
      }
      else{
        
      }
    });
  }
}
