import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  username: string | undefined;
  password: string | undefined;

  login() {
    // Add your login logic here
    console.log('Login button clicked');
  }
}
