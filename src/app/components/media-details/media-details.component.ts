import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Media } from 'src/app/interfaces/media';


@Component({
  selector: 'app-media-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss']
})
export class MediaDetailsComponent {
  @Input() media!: Media;
}
