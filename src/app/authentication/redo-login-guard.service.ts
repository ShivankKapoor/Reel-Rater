import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedoLoginGuardService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (localStorage.getItem('token') && localStorage.getItem('userName')) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
}
