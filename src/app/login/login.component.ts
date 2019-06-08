import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private sessionService: SessionStorageService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    let token = this.sessionService.getToken();
    if (token) {
      this.router.navigateByUrl('');
    }
  }

  onSubmit(loginForm) {

    // console.log(loginForm);

    this.authService.login(loginForm.username, loginForm.password).subscribe(
      data => {
        // console.log(data);
        this.directUser(data);
      });
  }

  directUser(data) {

    if (data) {
      this.sessionService.saveToken(data.accessToken);
      this.sessionService.saveUsername(data.username);
      this.sessionService.saveUserId(data.userId);

      this.router.navigateByUrl('');
    }

  }


}
