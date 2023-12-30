import { Injectable } from '@angular/core';
import PocketBase from 'PocketBase';
import { environment } from '../../environments/environment.development';
import { RatingModel } from '../models/rating.model';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  constructor() { }

  async getAllRatings(): Promise<RatingModel[]> {
    const pb = new PocketBase(environment.baseUrl);
    const records: RatingModel[] = await pb.collection('ratings').getFullList({
      sort: '-created',
    });
    return records;
  }
}
