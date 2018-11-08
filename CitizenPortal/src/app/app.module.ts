import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material'

import { AppComponent } from './app.component';
import { ApproutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component';
import { UserService } from './services/user.service';
import { PeopleComponent } from './people/people.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SignUpDialogComponent,
    PeopleComponent,
    LoginComponent
  ],

  imports: [
    ApproutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
  ],

  entryComponents: [
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
