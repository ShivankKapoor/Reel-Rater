import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { CurrentUserService } from './current-user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private currentUserService: CurrentUserService
  ) {}

  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
