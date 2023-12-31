import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../backend-services/user.service';
import { catchError } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { RatingsService } from '../../backend-services/ratings.service';
import { RatingModel } from '../../models/rating.model';
import { MoviesService } from '../../backend-services/movies.service';
import { MovieRatingModel } from '../../models/movie-rating.model';
import { CurrentUserService } from '../../authentication/current-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private rating: RatingsService, private movies: MoviesService, private user:CurrentUserService) {}
  ngOnInit(): void {
    this.loadRatings();
  }
  ratings!: RatingModel[];
  userRatings: MovieRatingModel[] = [];
  private async loadRatings() {
    try {
      this.ratings = await this.rating.getUserRatings(this.user.getKey());
      for (var i = 0; i < this.ratings.length; i++) {
        var temp = this.ratings[i];
        var forMovie = temp.movie;
        var movie = await this.movies.getMovie(forMovie);
        var review: MovieRatingModel = {
          title: movie.title,
          releaseDate: movie.release,
          genre: movie.genre,
          rating: temp.rating,
        };
        this.userRatings.push(review);
      }
      console.log(this.userRatings);
    } catch (error) {
      console.log(error);
    }
  }
}
