import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  register(registerForm) {
    console.log(registerForm);

    this.userService.register(registerForm).subscribe(
      data => {
        console.log("success");
        this.router.navigateByUrl('');
      }
    );
  }

}
