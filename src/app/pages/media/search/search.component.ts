import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ReviewgramAPIService } from 'src/app/reviewgram-api.service';
import { Media } from 'src/app/interfaces/media';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  mediaService = inject(ReviewgramAPIService);
  searchResults: Media[] = []

  constructor() {
    const title = this.route.snapshot.params['title'];
    this.mediaService.searchMedia(title).then(results => {
      this.searchResults = results;
      console.log('Search Results: ', this.searchResults);
    })
  }
}
