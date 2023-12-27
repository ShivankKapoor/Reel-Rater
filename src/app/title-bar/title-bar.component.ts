import { Component } from '@angular/core';
import { SidebarControlService } from '../navigation-menu/sidebar-control.service';
import { CurrentUserService } from '../authentication/current-user.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.scss',
})
export class TitleBarComponent {
  constructor(private sidebarControlService: SidebarControlService, private userService:CurrentUserService) {}
  toggleSidebar() {
    this.sidebarControlService.toggleSidebar();
  }
  canShowSidebar():boolean{
    console.log(this.userService.isUserLoggedIn());
    return this.userService.isUserLoggedIn();
  }
}
