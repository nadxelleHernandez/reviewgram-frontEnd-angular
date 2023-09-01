import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaCardComponent } from '../media-card/media-card.component';
import { Media } from '../../interfaces/media';

@Component({
  selector: 'app-top-media-list',
  standalone: true,
  imports: [CommonModule, MediaCardComponent],
  templateUrl: './top-media-list.component.html',
  styleUrls: ['./top-media-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TopMediaListComponent {
  @Input() mediaList: Media[] = [];
}
