import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarControlService } from '../navigation-menu/sidebar-control.service';
import { HomeSelectionService } from '../home/home-selection.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  public hasSelection: boolean = false;
  constructor(
    private router: Router,
    private sidebarControlService: SidebarControlService,
    private selection: HomeSelectionService
  ) {
    this.selection.dataSet$.subscribe((data) => {
      if(data.size>0){
        this.hasSelection=true;
      }else{
        this.hasSelection=false;
      }
    });
  }

  addReview() {
    this.router.navigate(['add-review']);
  }

  deleteItem(){
    location.reload();
  }
}
