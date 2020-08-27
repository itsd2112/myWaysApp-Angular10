import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private readonly fb: FormBuilder) { }


  ngOnInit(): void {
    this.buildSignupForm();
  }

  buildSignupForm() {
    this.signupForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

userSignUp(data) {
  console.log("data >>", data);
}

}
