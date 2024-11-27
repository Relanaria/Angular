import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { DOMAINS } from '../../../constants';
import { emailValidator } from '../../../utils/email.validator';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink,  ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})

export class LoginPageComponent {
  domains = DOMAINS

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, emailValidator(this.domains)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private router: Router){}

  handleSubmit(): void {
    if(this.loginForm.invalid){
      return;
    }
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }
}
