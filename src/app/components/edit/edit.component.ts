import { Component, OnInit } from '@angular/core';
import { HomeSelectionService } from '../home/selection/home-selection.service';
import { RatingsService } from '../../backend-services/ratings.service';
import { MoviesService } from '../../backend-services/movies.service';
import { RatingModel } from '../../models/rating.model';
import { MovieModel } from '../../models/movies.model';
import { Router } from '@angular/router';

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
  ratingObject:RatingModel={
    id: '',
    collectionId: '',
    collectionName: '',
    created: '',
    updated: '',
    author: '',
    movie: '',
    rating: 1
  };
 movieObject:MovieModel={
   id: '',
   collectionId: '',
   collectionName: '',
   created: '',
   updated: '',
   title: '',
   release: '',
   genre: ''
 };

  constructor(
    private selection: HomeSelectionService,
    private ratings: RatingsService,
    private movies: MoviesService,
    private router:Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.selection.dataSet$.subscribe((data) => {
      var selected = Array.from(data)[0];
      this.ratingId = selected.ratingId;
      this.movieId = selected.movieId;
    });
    this.ratingObject = await this.ratings.getRating(this.ratingId);
    this.movieObject = await this.movies.getMovie(this.movieId);
    this.title = this.movieObject.title;
    this.rating = this.ratingObject.rating;
    this.releaseDate = new Date(this.movieObject.release);
    this.genre = this.movieObject.genre;
  }

  async submit() {
    this.ratingObject.rating=this.rating;
    this.movieObject.genre=this.genre;
    this.movieObject.release=this.releaseDate.toISOString();
    await this.ratings.updateRating(this.ratingObject.id,this.ratingObject);
    await this.movies.updateMovie(this.movieObject.id,this.movieObject);
    this.router.navigate(['/']);
  }

  onRatingChange($event: number) {
    this.rating = $event;
  }
}
