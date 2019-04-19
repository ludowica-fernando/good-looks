import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  register(registerForm) {
    this.userService.register(registerForm).subscribe(
      data => {
        console.log("success");
      }
    );
  }

}
