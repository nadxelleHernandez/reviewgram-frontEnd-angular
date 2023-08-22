import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'mat-star-rating',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})

export class RatingComponent {
  @Input('rating') rating: number = 3;
  @Input('readOnly') readOnly: boolean = true;
  @Output() ratingUpdated = new EventEmitter();

  totalStar: number = 5;
  ratingArray: number[] = [];

  ngOnInit() {
    for(let index = 0; index < this.totalStar; index++) {
      this.ratingArray.push(index);
    }
  }

  calculateRating(rating:number) {
    if (this.readOnly) return;
    this.ratingUpdated.emit(rating);
  }

  iconStatus(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
