import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../backend-services/user.service';
import { catchError } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { RatingsService } from '../../backend-services/ratings.service';
import { RatingModel } from '../../models/rating.model';
import { MoviesService } from '../../backend-services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private rating: RatingsService, private movies: MoviesService) {}
  ngOnInit(): void {
    this.loadRatings();
  }
  ratings!: RatingModel[];
  private async loadRatings() {
    try {
      this.ratings = await this.rating.getAllRatings();
      for (var i = 0; i < this.ratings.length; i++) {
        var temp = this.ratings[i];
        var forMovie = temp.movie;
        var realTitle = (await this.movies.getMovie(forMovie)).title;
        temp.movie = realTitle;
        this.ratings[i] = temp;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
