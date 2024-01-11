import { Injectable } from '@angular/core';
import { RatingsService } from './ratings.service';
import { MoviesService } from './movies.service';
import { CurrentUserService } from '../authentication/current-user.service';
import { RatingModel } from '../models/rating.model';
import { MovieRatingModel } from '../models/movie-rating.model';
import { InputRatingModel } from '../models/input-rating.model';
import { InputMovieModel } from '../models/input-movie.model';
import { NewRatingModel } from '../models/new-rating.model';
import PocketBase from 'PocketBase';
import { environment } from '../../environments/environment';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MovieRatingsService {
  constructor(
    private rating: RatingsService,
    private movies: MoviesService,
    private user: CurrentUserService,
    private router: Router
  ) {}

  async getMovieRatingsForUser(): Promise<MovieRatingModel[]> {
    var ratings!: RatingModel[];
    var userRatings: MovieRatingModel[] = [];
    try {
      ratings = await this.rating.getUserRatings(this.user.getKey());
      for (var i = 0; i < ratings.length; i++) {
        var movie = await this.movies.getMovie(ratings[i].movie);
        var review: MovieRatingModel = {
          movieId: movie.id,
          ratingId: ratings[i].id,
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

  async deleteReviewIfExistsForUser(movieId: string) {
    var ratings = await this.rating.getUserRatings(this.user.getKey());
    for (var i = 0; i < ratings.length; i++) {
      if (ratings[i].movie === movieId) {
        await this.rating.deleteRating(ratings[i].id);
      }
    }
  }

  async publishMovieRating(rating: InputRatingModel) {
    const pb = new PocketBase(environment.baseUrl);
    var newMovie: InputMovieModel = {
      title: rating.title,
      genre: rating.genre,
      release: rating.releaseDate,
    };
    var response = await this.movies.publishMovie(newMovie);
    await this.deleteReviewIfExistsForUser(response.id);
    var movieId = response.id;
    var newRating: NewRatingModel = {
      author: this.user.getKey(),
      movie: movieId,
      rating: rating.rating,
    };
    const record = await pb
      .collection('ratings')
      .create(newRating)
      .then(() => {
        this.router.navigate(['home']);
      });
  }

  async deleteRating(ratingId: string) {
    const pb = new PocketBase(environment.baseUrl);
    await pb.collection('ratings').delete(ratingId);
  }
}
