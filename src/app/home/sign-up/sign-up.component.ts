import { UserExistsService } from './user-exists.service';
import { SignUpService } from './sign-up.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUp } from './sign-up';
import { lowerCaseValidator } from './lowerCase.validator';
import { userNameEqualPasswordValidator } from './userNameEqualsPassword.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private userExistsService:UserExistsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      // this scope validates the form fields
      email:['', [Validators.required, Validators.email]],
      fullName:['', [Validators.required, Validators.minLength(5)]],
      userName:['', [lowerCaseValidator], [this.userExistsService.userAlreadyExists()]],
      password:[''],
    },
    {
      // this scope validates the whole form
      validators: [ userNameEqualPasswordValidator ]
    }
    )
  }
  signUp(){
    if(this.signUpForm.valid)
    {
      const signUp = this.signUpForm.getRawValue() as SignUp;
      this.signUpService.signUpNewUser(signUp).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      )

    }
  }

}
