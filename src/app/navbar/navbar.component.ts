import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../services/session-storage.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;

  constructor(private sessionService: SessionStorageService,
  ) { }

  ngOnInit() {
    this.username = this.sessionService.getUsername();
  }

  logout() {
    this.sessionService.signout();
    window.location.reload();
  }

}
