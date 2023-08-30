import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { TopMediaListComponent } from '../components/top-media-list/top-media-list.component';
import { Media } from '../interfaces/media';
import { ReviewgramAPIService } from '../reviewgram-api.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, TopMediaListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  topMoviesList: Media[] = [];
  topTVShowsList: Media[] = [];
  apiService: ReviewgramAPIService = inject(ReviewgramAPIService);

  constructor() {
    this.apiService.getTopMoviesFromAPI().then((topMovies: Media[]) => {
      this.topMoviesList = topMovies;
    });
    this.apiService.getTopTVShowsFromAPI().then((topShows) => {
      this.topTVShowsList = topShows;
    });
  }
}
