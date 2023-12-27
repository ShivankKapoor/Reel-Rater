import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  currentUser$ = new BehaviorSubject<
    { id: string; userName: string } | null | undefined
  >(undefined);

  setCurrentUser(id: string, userName: string) {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.setItem('token', id);
    localStorage.setItem('userName', userName);
  }

  isUserLoggedIn() {
    return localStorage.getItem('userName') && localStorage.getItem('token');
  }

  getUserName(): string {
    const result = localStorage.getItem('userName');
    if (result === null) {
      return '';
    } else {
      return result;
    }
  }

  getKey(): string {
    const result = localStorage.getItem('token');
    if (result === null) {
      return '';
    } else {
      return result;
    }
  }
}
