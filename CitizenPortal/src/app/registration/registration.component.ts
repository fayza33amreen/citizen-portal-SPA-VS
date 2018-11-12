import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Customer } from '../customer';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';  
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent
{

  regiForm: FormGroup;  
  phoneTypes = ['Mobile Phone', 'Land Phone'];
  phone3TypeDisable = false;


  constructor(public form: FormBuilder)
  {
    this.regiForm = form.group({  
        'addressControl' : [null, Validators.required],  
        'cityControl' : [null, Validators.required],  
        'provinceControl' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],  
        'postalControl' : [null, Validators.required],  
        'phone1Control':[null, Validators.required],  
        'phone1TypeControl':[null, Validators.required],  
        'emailControl':[null, Validators.compose([Validators.required, Validators.email])],  
        'IsAccepted':[null]  
  }

  // On Change event of Toggle Button  
  onChange(event:any)  
    {  
      if (event.checked == true) {  
        this.IsAccepted = 1;  
      } else {  
        this.IsAccepted = 0;  
      }  
    }  
  
    // Executed When Form Is Submitted  
    onFormSubmit(form:NgForm)  
    {  
      console.log(form);  
    }  
  /*constructor(public dialog: MatDialog){}
    openDialog(): void {
      let dialogRef = this.dialog.open(SignUpDialogComponent, {
      });
    }*/
    
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
