import { Component } from '@angular/core';
import { SidebarControlService } from './sidebar-control.service';
import { CurrentUserService } from '../../authentication/current-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent {
  events: string[] = [];
  opened: boolean | undefined;
  constructor(private sidebarControlService: SidebarControlService, public userService: CurrentUserService, private router: Router) { }
  ngOnInit() {
    this.sidebarControlService.sidebarToggle$.subscribe(() => {
      this.opened = !this.opened;
    });
  }

  logout() {
    this.userService.logout();
    this.closeMenu();
  }

  goHome() {
    this.router.navigate(['home']);
    this.closeMenu();
  }

  newReview() {
    this.router.navigate(['add-review']);
    this.closeMenu();
  }

  deleteReview(){
    this.router.navigate(['delete-review']);
    this.closeMenu();
  }

  closeMenu() {
    this.sidebarControlService.toggleSidebar();
  }
}
