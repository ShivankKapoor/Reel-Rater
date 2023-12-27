import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  currentUser$ = new BehaviorSubject<
    { id: string; userName: string } | null | undefined
  >(undefined);

  setCurrentUser(id:string) {
    localStorage.removeItem('token')
    localStorage.setItem('token',id);
  }
}
