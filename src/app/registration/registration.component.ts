import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  username: string | undefined;
  password: string | undefined;
  retypedPassword: string | undefined;

  register() {
    // Add your login logic here
    console.log('Register button clicked');
  }
}
