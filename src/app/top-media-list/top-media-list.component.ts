import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaCardComponent } from '../media-card/media-card.component';
import { Media } from '../interfaces/media';

@Component({
  selector: 'app-top-media-list',
  standalone: true,
  imports: [CommonModule, MediaCardComponent],
  templateUrl: './top-media-list.component.html',
  styleUrls: ['./top-media-list.component.scss']
})

export class TopMediaListComponent {
  mediaExample: Media = {
    poster_url: 'http://image.tmdb.org/t/p/w154/i6ye8ueFhVE5pXatgyRrZ83LBD8.jpg',
    name: '',
    title: 'The Monkey King',
    isMovie: true,
    rating: 3
  }
}
