import { FormGroup } from "@angular/forms";

export function userNameEqualPasswordValidator(formgroup: FormGroup)
{
  const userName = formgroup.get("userName")?.value ?? '';
  const password = formgroup.get("password")?.value ?? '';

  // if username and password are false, it returns null
  if(userName.trim() + password.trim())
  {
    // if username and password are different, it returns true
    return userName !== password ? null : { passwordEqualsUser: true }
  }
  else
  {
    return null;
  }
}
