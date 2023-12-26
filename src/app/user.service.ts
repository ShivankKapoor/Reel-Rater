import { Injectable } from '@angular/core';
import PocketBase from 'PocketBase'
import { environment } from '../environments/environment.development';
import { UserModel } from './models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async getUsers(): Promise<UserModel[]>{
    const pb = new PocketBase(environment.baseUrl);
    const records:UserModel[] = await pb.collection('reviewer').getFullList({
      sort: '-created',
  });
  return records;
  }
}
