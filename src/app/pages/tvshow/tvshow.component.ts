import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaDetailsComponent } from 'src/app/components/media-details/media-details.component';

@Component({
  selector: 'app-tvshow',
  standalone: true,
  imports: [CommonModule, MediaDetailsComponent],
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TVShowComponent {

}
