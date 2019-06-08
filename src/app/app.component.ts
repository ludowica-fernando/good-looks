import { Component } from '@angular/core';
import { SessionStorageService } from './services/session-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'good-looks';

  username: string;

  constructor(private sessionService: SessionStorageService,
  ) { }

  ngOnInit() {
    this.username = this.sessionService.getUsername();
  }
}
