import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';
import { Media } from 'src/app/interfaces/media';
import { ReviewgramAPIService } from 'src/app/reviewgram-api.service';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/interfaces/review';

@Component({
  selector: 'app-media-ratings',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './media-ratings.component.html',
  styleUrls: ['./media-ratings.component.scss']
})
export class MediaRatingsComponent {
  @Input() media!: Media;
  reviews : Review[] = [];

  mediaService = inject(ReviewgramAPIService);
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    const mediaId = parseInt(this.route.snapshot.params['tmdb_id'],10);
    const mediaURL = this.route.snapshot.url[0].path;

    this.mediaService.getReviews(mediaId, mediaURL).then( (userReviews) => {
      this.reviews = userReviews;
    })
  }
}
