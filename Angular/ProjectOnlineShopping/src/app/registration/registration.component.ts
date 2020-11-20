import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup, Validators} from '@angular/forms';
import {MustMatch} from'../mustmatch';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false; 
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      LastName: ['',Validators.required],
      MobileNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    },
    {validator: MustMatch('password', 'confirmPassword')}
    );
  }
  get f() {return this.registerForm.controls;}

  onSubmit()
  {
    this.submitted=true;
    if(this.registerForm.invalid)
    {
      return;
    }
  }

}