import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaDetailsComponent } from 'src/app/components/media-details/media-details.component';
import { MediaRatingsComponent } from 'src/app/components/media-ratings/media-ratings.component';
import { ActivatedRoute } from '@angular/router';
import { ReviewgramAPIService } from 'src/app/reviewgram-api.service';
import { Media } from 'src/app/interfaces/media';

@Component({
  selector: 'app-tvshow',
  standalone: true,
  imports: [CommonModule, MediaDetailsComponent, MediaRatingsComponent],
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TVShowComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  mediaService = inject(ReviewgramAPIService);
  media: Media = {
    TMDB_id: -1,
    first_air_date: '',
    origin_country: [],
    original_language: '',
    overview: '',
    title: '',
    name: '',
    rating: 0,
    poster_url: '',
    isMovie: false,
    number_of_episodes:0,
    number_of_seasons:0,
    status: '',
    release_date:'',
    last_air_date:'',
    episode_runtime:0,
    runtime: 0,
    genres: [],
  };

  constructor() {
    const mediaId = parseInt(this.route.snapshot.params['tmdb_id'],10);
    const mediaURL = this.route.snapshot.url[0].path;
    this.mediaService.getMedia(mediaId, mediaURL).then( (media) => {
      this.media = media;
      console.log(media);
    })
  }
}
