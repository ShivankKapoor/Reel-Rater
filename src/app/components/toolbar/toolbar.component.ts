import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarControlService } from '../navigation-menu/sidebar-control.service';
import { HomeSelectionService } from '../home/home-selection.service';
import { MovieRatingsService } from '../../backend-services/movie-ratings.service';
import { MovieRatingModel } from '../../models/movie-rating.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  public hasSelection: boolean = false;
  private selectedItemId = '';
  constructor(
    private router: Router,
    private movieRatings: MovieRatingsService,
    private selection: HomeSelectionService
  ) {
    this.selection.dataSet$.subscribe((data) => {
      if (data.size > 0) {
        console.log(data);
        this.selectedItemId = Array.from(data)[0].ratingId;
        this.hasSelection = true;
      } else {
        this.hasSelection = false;
      }
    });
  }

  addReview() {
    this.router.navigate(['add-review']);
  }

  async deleteItem() {
    await this.movieRatings.deleteRating(this.selectedItemId);
    location.reload();
  }
}
