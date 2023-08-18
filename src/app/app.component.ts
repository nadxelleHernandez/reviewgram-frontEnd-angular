import { Component } from '@angular/core';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ReviewGram';

  user: User = {
    id: -1,
    username: '',
    name: '',
    email: '',
    password: ''
  }

}
