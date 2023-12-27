import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {

  constructor(private router:Router){}

  currentUser$ = new BehaviorSubject<
    { id: string; userName: string } | null | undefined
  >(undefined);

  setCurrentUser(id: string, userName: string) {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.setItem('token', id);
    localStorage.setItem('userName', userName);
  }

  isUserLoggedIn():boolean {
    const userName = localStorage.getItem('userName');
    const token = localStorage.getItem('token');
    return (userName !== null && token !== null);
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

  async logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
