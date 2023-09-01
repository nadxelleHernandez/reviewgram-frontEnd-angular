import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';
import { Media } from '../../interfaces/media';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'media-card',
  standalone: true,
  imports: [CommonModule, RatingComponent, RouterModule],
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaCardComponent {
  @Input() media!: Media;
  endpoint = '';

  ngOnInit() {
    this.endpoint = this.media?.isMovie ? 'movie' : 'tv';
  }
}
