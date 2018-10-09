import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component';
import { ApproutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SignUpDialogComponent
  ],

  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    ApproutingModule
  ],
  entryComponents: [
    SignUpDialogComponent
  ],
  exports: [
    MaterialModule,
    SignUpDialogComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
