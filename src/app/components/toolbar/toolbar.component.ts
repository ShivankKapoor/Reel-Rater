import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarControlService } from '../navigation-menu/sidebar-control.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  constructor(private router:Router, private sidebarControlService: SidebarControlService){}
  addReview(){
    this.router.navigate(['add-review']);
  }
}
