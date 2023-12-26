import { Component } from '@angular/core';
import { UserService } from '../backend-services/user.service';
import { Router } from '@angular/router';
import { MiniWarningService } from '../mini-warning/mini-warning.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  showPasswordValue: boolean = false;
  constructor(private userservice: UserService, private router: Router, private warning: MiniWarningService) { }

  async login() {
    if (this.username === "" && this.password === "") {
      this.warning.openSnackBar("Fields cannot be blank", "close");
    } else if (this.username === "") {
      this.warning.openSnackBar("Username cannot be empty", "close");
    }
    else if (this.password === "") {
      this.warning.openSnackBar("Password cannot be empty", "close");
    } else {
      var response = await this.userservice.isGoodLogin(this.username, this.password);
      if (response) {
        this.router.navigate(['/']);
      } else {
        this.warning.openSnackBar("Invalid username or password", "close");
      }
    }
  }

  showPassword() {
    this.showPasswordValue = !this.showPasswordValue;
  }
}
