import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Customer } from '../customer';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  phoneTypes = ['Mobile Phone', 'Land Phone'];
  phone3TypeDisable = false;
  
  constructor(public dialog: MatDialog){}
    openDialog(): void {
      let dialogRef = this.dialog.open(SignUpDialogComponent, {
      });
    }

    
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  getErrorMessage() {
    return this.emailControl.hasError('required') ? 'You must enter a value' :
        this.emailControl.hasError('email') ? 'Not a valid email' :
            '';
  }

  firstNameControl = new FormControl('', );
  lastNameControl = new FormControl('', );
  companyNameControl = new FormControl('', );

  addressControl = new FormControl('', [
    Validators.required
  ]);
  cityControl = new FormControl('', [
    Validators.required
  ]);
  provinceControl = new FormControl('', [
    Validators.required
  ]);
  postalControl = new FormControl('', [
    Validators.required
  ]);
  phone1Control = new FormControl('', [
    Validators.required
  ]);
  phone1TypeControl = new FormControl('', [
    Validators.required
  ]);
  phone2Control = new FormControl();
  phone2TypeControl = new FormControl();
  phone3Control = new FormControl();
  phone3TypeControl = new FormControl();
  
  customerModel = new Customer(
    this.emailControl.value,'',this.firstNameControl.value,this.lastNameControl.value,this.companyNameControl.value,
    this.addressControl.value,this.cityControl.value,this.provinceControl.value,this.postalControl.value,
    this.phone1Control.value,this.phone1TypeControl.value, this.phone2Control.value,this.phone2TypeControl.value,
    this.phone3Control.value,this.phone3TypeControl.value,'','');
  
}
