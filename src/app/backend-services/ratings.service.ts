import { Injectable } from '@angular/core';
import PocketBase from 'PocketBase';
import { environment } from '../../environments/environment';
import { RatingModel } from '../models/rating.model';

@Injectable({
  providedIn: 'root',
})
export class RatingsService {
  constructor() {}

  async getAllRatings(): Promise<RatingModel[]> {
    const pb = new PocketBase(environment.baseUrl);
    const records: RatingModel[] = await pb.collection('ratings').getFullList({
      sort: '-created',
    });
    return records;
  }

  async getUserRatings(userId: String): Promise<RatingModel[]> {
    const pb = new PocketBase(environment.baseUrl);
    var returnArray: RatingModel[] = [];
    const records: RatingModel[] = await pb.collection('ratings').getFullList({
      sort: '-created',
    });
    for (var i = 0; i < records.length; i++) {
      var temp = records[i];
      if (temp.author === userId) {
        returnArray.push(temp);
      }
    }
    return returnArray;
  }

  async getRating(id: string): Promise<RatingModel> {
    const pb = new PocketBase(environment.baseUrl);
    var myDefault: RatingModel;
    var ratings = await this.getAllRatings();
    myDefault = ratings[0];
    for (var i = 0; i < ratings.length; i++) {
      if (ratings[i].id === id) {
        return ratings[i];
      }
    }
    return myDefault;
  }

  async deleteRating(movieId: string) {
    const pb = new PocketBase(environment.baseUrl);
    await pb.collection('ratings').delete(movieId);
  }
}
