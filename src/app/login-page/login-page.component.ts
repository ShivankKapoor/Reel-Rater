import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';

  constructor(private userservice: UserService, private router:Router) {}

  async login() {
    console.log('Login button clicked');
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
    var response = await this.userservice.isGoodLogin(this.username, this.password);
    if(response){
      this.router.navigate(['/']);
    }else{
      
    }
  }
}
