import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();
  lastClickedIndex: number = 0;
  hoveredStarIndex: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];

  rate(rating: number): void {
    this.rating = rating;
    this.lastClickedIndex = rating - 1; // Adjust to 0-based index
    this.ratingChange.emit(this.rating);
  }

  setHoveredStarIndex(index: number): void {
    this.hoveredStarIndex = index;
  }

  clearHover(): void {
    this.hoveredStarIndex = this.lastClickedIndex;
  }
}
