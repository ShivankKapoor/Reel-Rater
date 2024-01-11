import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MovieRatingModel } from '../../models/movie-rating.model';
import { MovieRatingsService } from '../../backend-services/movie-ratings.service';
import { StringFormattingService } from '../../services/string-formatting/string-formatting.service';
import { HomeSelectionService } from './selection/home-selection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['title', 'releaseDate', 'genre', 'rating'];
  clickedRows = new Set<MovieRatingModel>();

  constructor(
    public str: StringFormattingService,
    private ratings: MovieRatingsService,
    private selection: HomeSelectionService
  ) {}
  ngOnDestroy(): void {
    this.selection.clearItems();
  }

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
    if (this.selection.hasItem(row)) {
      this.selection.clearItems();
    } else {
      this.selection.clearItems();
      this.selection.addItem(row);
    }
  }

  isRowClicked(row: MovieRatingModel): boolean {
    return this.selection.hasItem(row);
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
