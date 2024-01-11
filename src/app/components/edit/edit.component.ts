import { Component, OnInit } from '@angular/core';
import { HomeSelectionService } from '../home/selection/home-selection.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {
  ratingId: string = "";
  movieId: string = "";
  constructor(private selection: HomeSelectionService) {
  }
  ngOnInit(): void {
    this.selection.dataSet$.subscribe((data) => {
      var selected = Array.from(data)[0];
      this.ratingId = selected.ratingId;
      this.movieId = selected.movieId;
    });
  }
}
