import { Component } from '@angular/core';
import { RegisterModel } from '../../models/register.model';
import { RegistrationService } from '../../backend-services/registration.service';
import { Router } from '@angular/router';
import { MiniWarningService } from '../../services/warning services/mini-warning.service';
import { StringFormattingService } from '../../services/string-formatting/string-formatting.service';

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

  constructor(private registerUser:RegistrationService,private router: Router, private warn:MiniWarningService, private str:StringFormattingService){}

  showPassword(){
    this.showPasswordValue=!this.showPasswordValue;
  }

  async register(){
    this.username=this.str.toServer(this.username);
    if(this.password===""||this.username===""||this.retypedPassword===""){
      this.warn.openSnackBar("Fields cannot be left blank","Close");
      return
    }
    if(await this.registerUser.userExists(this.username)){
      this.warn.openSnackBar("User already exists","Close");
      return;
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
