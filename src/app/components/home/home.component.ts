import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../backend-services/user.service';
import { catchError } from 'rxjs';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private UserService: UserService) {}
  ngOnInit(): void {
    this.loadUsers();
  }
  users!: UserModel[];

  private async loadUsers() {
    try {
      this.UserService.getSpecificUser("sachit");
      this.users = await this.UserService.getUsers();
    } catch (error) {
      console.log(error);
    }
  }
}
