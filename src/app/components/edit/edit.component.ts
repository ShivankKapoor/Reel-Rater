import { Component, OnInit } from '@angular/core';
import { HomeSelectionService } from '../home/selection/home-selection.service';
import { RatingsService } from '../../backend-services/ratings.service';
import { MoviesService } from '../../backend-services/movies.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent implements OnInit {
  ratingId: string = '';
  movieId: string = '';
  title: string = '';
  releaseDate = new Date();
  genre: string = '';
  rating = 1;

  constructor(
    private selection: HomeSelectionService,
    private ratings: RatingsService,
    private movies: MoviesService
  ) {}

  async ngOnInit(): Promise<void> {
    this.selection.dataSet$.subscribe((data) => {
      var selected = Array.from(data)[0];
      this.ratingId = selected.ratingId;
      this.movieId = selected.movieId;
    });
    var ratingObject = await this.ratings.getRating(this.ratingId);
    var movieObject = await this.movies.getMovie(this.movieId);
    this.title = movieObject.title;
    this.rating = ratingObject.rating;
    this.releaseDate = new Date(movieObject.release);
    this.genre = movieObject.genre;
  }

  submit() {
    throw new Error('Method not implemented.');
  }

  onRatingChange($event: number) {
    this.rating = $event;
  }
}
