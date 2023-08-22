import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';
import { Media } from '../interfaces/media';

@Component({
  selector: 'media-card',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent {
  @Input() media!: Media;
}
