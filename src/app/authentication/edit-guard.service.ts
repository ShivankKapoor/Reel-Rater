import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HomeSelectionService } from '../components/home/selection/home-selection.service';

@Injectable({
  providedIn: 'root'
})
export class EditGuardService implements CanActivate {
  hasEditInfo: boolean = false;
  constructor(
    private router: Router,
    private homeSelection: HomeSelectionService,
  ) {
    this.homeSelection.dataSet$.subscribe((data) => {
      this.hasEditInfo = data.size > 0;
    })
  }
  canActivate(): boolean {
    if (localStorage.getItem('token') && localStorage.getItem('userName') && this.hasEditInfo) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}