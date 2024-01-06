import { Component } from '@angular/core';
import { MovieRatingsService } from '../../backend-services/movie-ratings.service';
import { InputRatingModel } from '../../models/input-rating.model';
import { MiniWarningService } from '../../services/warning services/mini-warning.service';

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

  constructor(private movieService: MovieRatingsService, private warn:MiniWarningService) {}

  onRatingChange($event: number) {
    this.rating = $event;
  }

  submit() {
    if (this.title === '' || this.genre === '') {
      this.warn.openSnackBar("Form cannot be blank","Close");
    } else {
      var movie: InputRatingModel = {
        title: this.title,
        genre: this.genre,
        releaseDate: this.releaseDate,
        rating: this.rating,
      };
      this.movieService.publishMovieRating(movie);
    }
  }
}
