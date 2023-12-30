import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../backend-services/user.service';
import { catchError } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { RatingsService } from '../../backend-services/ratings.service';
import { RatingModel } from '../../models/rating.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private UserService: UserService, private rating:RatingsService) {}
  ngOnInit(): void {
    this.loadUsers();
  }
  users!: UserModel[];
  ratings!:RatingModel[];
  private async loadUsers() {
    try {
      this.UserService.getSpecificUser("sachit");
      this.ratings = await this.rating.getAllRatings();
    } catch (error) {
      console.log(error);
    }
  }
}
