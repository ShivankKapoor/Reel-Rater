import { Injectable } from '@angular/core';
import { RatingsService } from './ratings.service';
import { MoviesService } from './movies.service';
import { CurrentUserService } from '../authentication/current-user.service';
import { RatingModel } from '../models/rating.model';
import { MovieRatingModel } from '../models/movie-rating.model';

@Injectable({
  providedIn: 'root',
})
export class MovieRatingsService {
  constructor(
    private rating: RatingsService,
    private movies: MoviesService,
    private user: CurrentUserService
  ) {}

  async getMovieRatingsForUser(): Promise<MovieRatingModel[]> {
    var ratings!: RatingModel[];
    var userRatings: MovieRatingModel[] = [];
    try {
      ratings = await this.rating.getUserRatings(this.user.getKey());
      for (var i = 0; i < ratings.length; i++) {
        var movie = await this.movies.getMovie(ratings[i].movie);
        var review: MovieRatingModel = {
          title: movie.title,
          releaseDate: movie.release,
          genre: movie.genre,
          rating: ratings[i].rating,
        };
        userRatings.push(review);
      }
      return userRatings;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
