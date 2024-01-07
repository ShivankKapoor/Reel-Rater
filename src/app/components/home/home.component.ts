import { Component, OnInit, inject } from '@angular/core';
import { MovieRatingModel } from '../../models/movie-rating.model';
import { MovieRatingsService } from '../../backend-services/movie-ratings.service';
import { StringFormattingService } from '../../services/string-formatting/string-formatting.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['title', 'releaseDate', 'genre', 'rating'];

  constructor(
    public str: StringFormattingService,
    private ratings: MovieRatingsService
  ) {}

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

  formatDate(date: string) {
    const inputDateString = '2008-04-26 05:00:00.000Z';
    const inputDate = new Date(inputDateString);

    const outputDateString = inputDate.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });
    return outputDateString;
  }
}
