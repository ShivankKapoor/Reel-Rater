import { Component } from '@angular/core';
import { SidebarControlService } from './sidebar-control.service';
import { CurrentUserService } from '../../authentication/current-user.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent {
  events: string[] = [];
  opened: boolean | undefined;
  constructor(private sidebarControlService: SidebarControlService, public userService:CurrentUserService) {}
  ngOnInit() {
    this.sidebarControlService.sidebarToggle$.subscribe(() => {
      this.opened = !this.opened;
    });
  }

  logout(){
    this.userService.logout();
    this.closeMenu();
  }

  closeMenu() {
    this.sidebarControlService.toggleSidebar();
  }
}
