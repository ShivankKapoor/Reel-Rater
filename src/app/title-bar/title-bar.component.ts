import { Component } from '@angular/core';
import { SidebarControlService } from '../navigation-menu/sidebar-control.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.scss'
})
export class TitleBarComponent {
  constructor(private sidebarControlService: SidebarControlService) {}
  toggleSidebar() {
    this.sidebarControlService.toggleSidebar();
  }
}
