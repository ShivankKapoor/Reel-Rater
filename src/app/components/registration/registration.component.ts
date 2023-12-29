import { Component } from '@angular/core';
import { RegisterModel } from '../../models/register.model';
import { RegistrationService } from '../../backend-services/registration.service';
import { Router } from '@angular/router';
import { MiniWarningService } from '../../warning services/mini-warning.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  username:string ="";
  password: string ="";
  retypedPassword: string ="";
  showPasswordValue:boolean = false;

  constructor(private registerUser:RegistrationService,private router: Router, private warn:MiniWarningService){}

  showPassword(){
    this.showPasswordValue=!this.showPasswordValue;
  }

  register(){
    if(this.password===""||this.username===""||this.retypedPassword===""){
      this.warn.openSnackBar("Fields cannot be left blank","Close")
      return
    }
    if(this.password===this.retypedPassword){
      var newUser:RegisterModel={username:this.username, password:this.password}
      console.log(newUser)
      this.registerUser.registerUser(newUser);
      this.router.navigate(['/']);
      this.warn.openSnackBar("Account created!","Close")
      return
    }
    this.warn.openSnackBar("Password doesnt match","Close")
  }
}
