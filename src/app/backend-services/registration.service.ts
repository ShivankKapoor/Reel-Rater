import { Injectable } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import PocketBase from 'PocketBase';
import { environment } from '../../environments/environment.development';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private users: UserService) {}

  async userExists(userName: string): Promise<boolean> {
    var userList = await this.users.getUsers();
    for (var i = 0; i < userList.length; i++) {
      var temp = userList[i];
      if (temp.username === userName) {
        return true;
      }
    }
    return false;
  }

  async registerUser(user: RegisterModel) {
    const pb = new PocketBase(environment.baseUrl);
    const response: RegisterModel = await pb
      .collection('reviewer')
      .create(user);
    return response;
  }
}
