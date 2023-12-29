import { Injectable } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import PocketBase from 'PocketBase';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  async registerUser(user:RegisterModel) {
    const pb = new PocketBase(environment.baseUrl);
    const response: RegisterModel = await pb.collection('reviewer').create(user);
    return response;
  }
}
