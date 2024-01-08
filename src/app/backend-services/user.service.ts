import { Injectable } from '@angular/core';
import PocketBase from 'PocketBase';
import { environment } from '../../environments/environment';
import { UserModel } from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  async getUsers(): Promise<UserModel[]> {
    const pb = new PocketBase(environment.baseUrl);
    const records: UserModel[] = await pb.collection('reviewer').getFullList({
      sort: '-created',
    });
    return records;
  }

  async getSpecificUser(userName: string) {
    var query = 'username="' + userName + '"';
    console.log(query);
    const pb = new PocketBase(environment.baseUrl);
    const record: UserModel[] = await pb
      .collection('reviewer')
      .getFirstListItem(query, {
        expand: 'relField1,relField2.subRelField',
      });
    return record;
  }

  async isGoodLogin(userName: string, password:string){
    try{
    var attempUser:any = await this.getSpecificUser(userName);
    }catch(error){
      return false;
    }
    if(attempUser.password===password){
      return attempUser.id;
    }else{
      return false;
    }
  }
}
