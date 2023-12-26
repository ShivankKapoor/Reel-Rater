import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms'; // Add this import for ngModel
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    NavigationMenuComponent,
    LoginPageComponent,
    RegistrationComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatCheckboxModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
