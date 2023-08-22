import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { MediaCardComponent } from '../media-card/media-card.component';
import { Media } from '../interfaces/media';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, MediaCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  mediaExample: Media = {
    poster_url: 'http://image.tmdb.org/t/p/w154/i6ye8ueFhVE5pXatgyRrZ83LBD8.jpg',
    name: '',
    title: 'The Monkey King',
    isMovie: true,
    rating: 3
  }
}
