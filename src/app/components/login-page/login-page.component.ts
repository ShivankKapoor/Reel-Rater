import { Component } from '@angular/core';
import { UserService } from '../../backend-services/user.service';
import { Router } from '@angular/router';
import { MiniWarningService } from '../../services/warning services/mini-warning.service';
import { CurrentUserService } from '../../authentication/current-user.service';
import { StringFormattingService } from '../../services/string-formatting/string-formatting.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  showPasswordValue: boolean = false;
  constructor(
    private str:StringFormattingService,
    private userservice: UserService,
    private router: Router,
    private warning: MiniWarningService,
    private currentUserService: CurrentUserService
  ) {}

  async login() {
    this.username=this.str.toServer(this.username);
    if (this.username === '' && this.password === '') {
      this.warning.openSnackBar('Fields cannot be blank', 'Close');
    } else if (this.username === '') {
      this.warning.openSnackBar('Username cannot be empty', 'Close');
    } else if (this.password === '') {
      this.warning.openSnackBar('Password cannot be empty', 'Close');
    } else {
      var response = await this.userservice.isGoodLogin(
        this.username,
        this.password
      );
      if (response) {
        this.currentUserService.setCurrentUser(response, this.username);
        this.router.navigate(['/home']);
      } else {
        this.warning.openSnackBar('Invalid username or password', 'Close');
      }
    }
  }

  showPassword() {
    this.showPasswordValue = !this.showPasswordValue;
  }
}
