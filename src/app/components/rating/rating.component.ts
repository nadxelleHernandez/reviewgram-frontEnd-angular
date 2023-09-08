import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mat-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})

export class RatingComponent {
  @Input('rating') rating: number = 0;
  @Input('readOnly') readOnly: boolean = true;
  @Input('totalStars') totalStars: number = 5;
  @Output() ratingUpdated = new EventEmitter();

  ratingArray: number[] = [];

  ngOnInit() {
    for(let index = 0; index < this.totalStars; index++) {
      this.ratingArray.push(index);
    }
  }

  calculateRating(rating:number) {
    if (this.readOnly) return;
    this.ratingUpdated.emit(rating);
  }

  private get numberOfFullStars(): number {
    return Math.floor(this.rating);
  }

  private get numberOfEmptyStars(): number {
    return this.totalStars - Math.ceil(this.rating);
  }

  get fullStars(): any[] {
    return Array(this.numberOfFullStars);
  }

  get emptyStars(): any[] {
    return Array(this.numberOfEmptyStars);
  }

  get hasAnHalfStar(): boolean {
    return this.rating % 1 !== 0;
  }
}
