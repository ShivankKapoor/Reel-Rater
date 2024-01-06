import { Component } from '@angular/core';
import { MovieRatingsService } from '../../backend-services/movie-ratings.service';
import { InputRatingModel } from '../../models/input-rating.model';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrl: './new-review.component.scss',
})
export class NewReviewComponent {

  title: string = '';
  releaseDate: Date = new Date();
  genre: string = '';
  rating: number = 1;

  constructor(private movieService: MovieRatingsService) { }

  onRatingChange($event: number) {
    this.rating = $event;
  }

  submit() {
    var movie: InputRatingModel = { title: this.title, genre: this.genre, releaseDate: this.releaseDate, rating: this.rating }
    this.movieService.publishMovieRating(movie);
  }
}
