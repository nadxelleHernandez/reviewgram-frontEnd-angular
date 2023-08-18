import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { User } from '../interfaces/user'; 

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterModule],
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})

export class NavigationBarComponent {
  @Input() user!: User;

  logIn(){
    console.log("Login in");
  }

  logOut(){
    console.log("Login out");
  }
}
