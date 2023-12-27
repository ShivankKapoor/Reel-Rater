import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './authentication/auth-guard.service';
import { RedoLoginGuardService } from './authentication/redo-login-guard.service';

const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [RedoLoginGuardService]},
  { path: 'register', component: RegistrationComponent, canActivate: [RedoLoginGuardService] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
