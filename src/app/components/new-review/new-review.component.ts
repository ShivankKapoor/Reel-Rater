import { Component } from '@angular/core';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrl: './new-review.component.scss',
})
export class NewReviewComponent {

  title: string = '';
  release: string = '';
  genre: string = '';
  rating: number = 1;

  onRatingChange($event: number) {
    this.rating = $event;
  }

  submit() {
    console.log(this.rating);
  }
}
