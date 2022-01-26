import { SignUpService } from './sign-up.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserExistsService {

  constructor(private signUpService:SignUpService) { }

  userAlreadyExists()
  {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName) =>
          this.signUpService.verifyExistingUser(userName)
        ),
        map((userExists) =>
          userExists? {userExistent: true} : null
        ),
        first()
      )
    }
  }
}
