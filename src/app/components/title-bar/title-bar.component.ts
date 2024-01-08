import { Component, OnInit } from '@angular/core';
import { SidebarControlService } from '../navigation-menu/sidebar-control.service';
import { CurrentUserService } from '../../authentication/current-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.scss',
})
export class TitleBarComponent {
  userName: string = ""
  constructor(private sidebarControlService: SidebarControlService, public userService: CurrentUserService, private router: Router) { }

  toggleSidebar() {
    this.sidebarControlService.toggleSidebar();
  }

  canShowSidebar(): boolean {
    var properCapital = this.userService.getUserName();
    this.userName = properCapital.charAt(0).toUpperCase() + properCapital.slice(1);
    return this.userService.isUserLoggedIn();
  }

  goHome() {
    this.router.navigate(['home']);
  }

}
