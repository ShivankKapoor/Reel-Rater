import { Injectable } from '@angular/core';
import PocketBase from 'PocketBase';
import { environment } from '../../environments/environment.development';
import { MovieModel } from '../models/movies.model';
import { InputMovieModel } from '../models/input-movie.model';

@Injectable({
  providedIn: 'root',
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

  async getMovie(code: string): Promise<MovieModel> {
    var query = 'id="' + code + '"';
    const pb = new PocketBase(environment.baseUrl);
    const record: MovieModel = await pb
      .collection('movies')
      .getFirstListItem(query, {
        expand: 'relField1,relField2.subRelField',
      });
    return record;
  }

  async publishMovie(movie: InputMovieModel) {
    const pb = new PocketBase(environment.baseUrl);
    const record = await pb.collection('movies').create(movie);
    return record;
  }
}
