import { Injectable } from '@angular/core';
import PocketBase from 'PocketBase';
import { environment } from '../../environments/environment.development';
import { MovieModel } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  async getAllRatings(): Promise<MovieModel[]> {
    const pb = new PocketBase(environment.baseUrl);
    const records: MovieModel[] = await pb.collection('movies').getFullList({
      sort: '-created',
    });
    return records;
  }
}
