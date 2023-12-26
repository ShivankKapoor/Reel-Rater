import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../user.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private UserService: UserService) {}
  ngOnInit(): void {
    this.getUsers();
  }
  users!: any;
  private async getUsers() {
    try {
      this.users = this.UserService.getUsers();
    } catch (error) {
      console.log(error);
    }
  }
}
