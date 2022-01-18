import { SignUpService } from './sign-up.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignUp } from './sign-up';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService
    ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email:[''],
      fullName:[''],
      userName:[''],
      password:[''],
    })
  }
  signUp(){
    const signUp = this.signUpForm.getRawValue() as SignUp;
    console.log(signUp);
  }

}
