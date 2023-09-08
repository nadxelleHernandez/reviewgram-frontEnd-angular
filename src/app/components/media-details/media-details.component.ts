import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ReviewgramAPIService } from 'src/app/reviewgram-api.service';
import { Media } from 'src/app/interfaces/media';

@Component({
  selector: 'app-media-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss']
})
export class MediaDetailsComponent {
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
