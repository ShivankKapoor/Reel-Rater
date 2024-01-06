import { Component } from '@angular/core';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrl: './new-review.component.scss',
})
export class NewReviewComponent {

  title: string = '';
  releaseDate: Date=new Date();
  genre: string = '';
  rating: number = 1;

  onRatingChange($event: number) {
    this.rating = $event;
  }

  submit() {
    console.log("Title: "+this.title);
    console.log("Release: "+this.releaseDate);
    console.log("Genre: "+this.genre);
    console.log("Rating: "+this.rating);
  }
}
