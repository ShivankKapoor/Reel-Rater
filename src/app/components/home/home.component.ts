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
  clickedRows = new Set<MovieRatingModel>();

  constructor(public str: StringFormattingService, private ratings: MovieRatingsService) {}

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

  rowClick(row: MovieRatingModel) {
    console.log(this.clickedRows);
    if (this.clickedRows.has(row)) {
      this.clickedRows.delete(row);
    } else {
      this.clickedRows.add(row);
    }
  }

  isRowClicked(row: MovieRatingModel): boolean {
    return this.clickedRows.has(row);
  }

  formatDate(date: string) {
    const inputDateString = date;
    const inputDate = new Date(inputDateString);

    const outputDateString = inputDate.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });
    return outputDateString;
  }
}
