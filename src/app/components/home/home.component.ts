import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../backend-services/user.service';
import { catchError } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { RatingsService } from '../../backend-services/ratings.service';
import { RatingModel } from '../../models/rating.model';
import { MoviesService } from '../../backend-services/movies.service';
import { MovieRatingModel } from '../../models/movie-rating.model';
import { CurrentUserService } from '../../authentication/current-user.service';
import { MovieRatingsService } from '../../backend-services/movie-ratings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['title', 'releaseDate', 'genre', 'rating'];

  constructor(private ratings: MovieRatingsService) {}

  async ngOnInit(): Promise<void> {
    await this.loadRatings();
  }

  userRatings!: MovieRatingModel[];

  private async loadRatings() {
    try {
      this.userRatings = await this.ratings.getMovieRatingsForUser();
    } catch (error) {
      console.log(error);
    }
  }
}
