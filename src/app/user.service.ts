import { Injectable } from '@angular/core';
import PocketBase from 'PocketBase'
import { environment } from '../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async getUsers(){
    const pb = new PocketBase(environment.baseUrl);
    const records = await pb.collection('reviewer').getFullList({
      sort: '-created',
  });
  return records;
  }
}
