import { SignUp } from './sign-up';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(private http:HttpClient) { }

  signUpNewUser(signUp:SignUp)
  {
    return this.http.post('http://localhost:3000/user/signup', signUp);
  }
}
