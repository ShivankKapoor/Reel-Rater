import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  currentUser$ = new BehaviorSubject<
    { id: string; userName: string } | null | undefined
  >(undefined);

  setCurrentUser(id:string, userName:string) {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.setItem('token',id);
    localStorage.setItem('userName',userName);
  }
}
