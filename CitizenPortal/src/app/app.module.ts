import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material'

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component';
import { UserService } from './services/user.service';
import { PeopleComponent } from './people/people.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavbarComponent,
    SignUpDialogComponent,
    PeopleComponent,
    LoginComponent,
    DashboardComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule
  ],

  entryComponents: [
    RegistrationComponent,
    SignUpDialogComponent
  ],

  exports: [
    MaterialModule,
    SignUpDialogComponent
  ],
  
  providers: [UserService],

  bootstrap: [AppComponent]
})
export class AppModule { }
