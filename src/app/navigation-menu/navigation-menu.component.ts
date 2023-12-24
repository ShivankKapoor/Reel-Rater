import { Component } from '@angular/core';
import { SidebarControlService } from './sidebar-control.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss'
})
export class NavigationMenuComponent {
  events: string[] = [];
  opened: boolean | undefined;
  constructor(private sidebarControlService: SidebarControlService) {}
  ngOnInit() {
    this.sidebarControlService.sidebarToggle$.subscribe(() => {
      this.opened = !this.opened;
    });
  }

  closeMenu() {
    this.sidebarControlService.toggleSidebar();
  }
}
