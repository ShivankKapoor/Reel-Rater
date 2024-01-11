import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MovieRatingModel } from '../../../models/movie-rating.model';

@Injectable({
  providedIn: 'root'
})

export class HomeSelectionService {
  private dataSet: Set<MovieRatingModel> = new Set<MovieRatingModel>();
  private dataSetSubject: BehaviorSubject<Set<MovieRatingModel>> = new BehaviorSubject<Set<MovieRatingModel>>(this.dataSet);

  dataSet$: Observable<Set<MovieRatingModel>> = this.dataSetSubject.asObservable();

  constructor() {}

  addItem(item: MovieRatingModel): void {
    this.dataSet.add(item);
    this.dataSetSubject.next(new Set<MovieRatingModel>(this.dataSet));
  }

  clearItems(): void {
    this.dataSet.clear();
    this.dataSetSubject.next(new Set<MovieRatingModel>());
  }

  getItem(item: MovieRatingModel): MovieRatingModel | null {
    return this.dataSet.has(item) ? item : null;
  }

  hasItem(item: MovieRatingModel): boolean {
    return this.dataSet.has(item);
  }

  hasItems(): boolean {
    return this.dataSet.size > 0;
  }
}