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
  customerTypes = ['customer type 1', 'customer type 2'];
  securityQuestions = ['security question 1', 'security question 2'];
  phone3TypeDisable = false;


  constructor(public form: FormBuilder)
  {
    this.regiForm = form.group({
      'emailControl': ['', [Validators.required, Validators.email]],
      'customerTypeControl': [null, Validators.required],
      'firstNameControl': [''],
      'lastNameControl': [''],
      'companyNameControl': [''],
      'addressControl': ['', Validators.required],
      'cityControl': ['', Validators.required],
      'provinceControl': ['', Validators.required],
      'postalControl': [null, Validators.required],
      'phone1Control': [null, Validators.required],
      'phone1TypeControl': [null, Validators.required],
      'phone2Control': [null],
      'phone2TypeControl': [null],
      'phone3Control': [null],
      'phone3TypeControl': [null],
      'securityQuestionControl': [null, Validators.required],
      'answerControl': [null, Validators.required],
      //'IsAccepted': [null]
    });
    
  }
  get email() {
    return this.regiForm.get('emailControl');
  }
  get customerType() {
    return this.regiForm.get('customerTypeControl');
  }
  get firstName() {
    return this.regiForm.get('firstNameControl');
  }
  get lastName() {
    return this.regiForm.get('lastNameControl');
  }
  get companyName() {
    return this.regiForm.get('companyNameControl');
  }
  get address() {
    return this.regiForm.get('addressControl');
  }
  get city() {
    return this.regiForm.get('cityControl');
  }
  get province() {
    return this.regiForm.get('provinceControl');
  }
  get postal() {
    return this.regiForm.get('postalControl');
  }
  get phone1() {
    return this.regiForm.get('phone1Control');
  }
  get phone1Type() {
    return this.regiForm.get('phone1TypeControl');
  }
  get phone2() {
    return this.regiForm.get('phone2Control');
  }
  get phone2Type() {
    return this.regiForm.get('phone2TypeControl');
  }
  get phone3() {
    return this.regiForm.get('phone3Control');
  }
  get phone3Type() {
    return this.regiForm.get('phone3TypeControl');
  }
  get securityQuestion() {
    return this.regiForm.get('securityQuestionControl');
  }
  get answer() {
    return this.regiForm.get('answerControl');
  }
  
//  }
//getErrorMessage() {
//  return this.emailControl.hasError('required') ? 'You must enter a value' :
//    this.emailControl.hasError('email') ? 'Not a valid email' :
//      '';
  /*
  // On Change event of Toggle Button  
  onChange(event:any)  
    {  
      //if (event.checked == true) {  
      //  this.IsAccepted = 1;  
      //} else {  
      //  this.IsAccepted = 0;  
      //}  
    }  
  
    // Executed When Form Is Submitted  
    onFormSubmit(form:NgForm)  
    {  
      console.log(form);  
    }  
  //constructor(public dialog: MatDialog){}
  //  openDialog(): void {
  //    let dialogRef = this.dialog.open(SignUpDialogComponent, {
  //    });
  //  }
    
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  getErrorMessage() {
    return this.emailControl.hasError('required') ? 'You must enter a value' :
        this.emailControl.hasError('email') ? 'Not a valid email' :
            '';
  }
  customerTypeControl = new FormControl('');
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
  securityQuestionControl = new FormControl();
  answerControl = new FormControl();
  
  customerModel = new Customer(
    this.emailControl.value,'',this.firstNameControl.value,this.lastNameControl.value,this.companyNameControl.value,
    this.addressControl.value,this.cityControl.value,this.provinceControl.value,this.postalControl.value,
    this.phone1Control.value,this.phone1TypeControl.value, this.phone2Control.value,this.phone2TypeControl.value,
    this.phone3Control.value,this.phone3TypeControl.value,'','');
    */
  
}
