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
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink,  ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})

export class LoginPageComponent {
  domains = DOMAINS
  errorMessage = ''

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, emailValidator(this.domains)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private router: Router, private userService: UserAuthService){}

  loginSubmit(): void {
    if(this.loginForm.invalid){
      return;
    }

    const {email, password} = this.loginForm.value;

    this.userService.login(email!, password!).subscribe({
      next: (response) => {
        this.router.navigate(['/home']);
      },
      error: (error) =>{
        console.log(error);
        if(error.status === 403 || error.status === 401){
          this.errorMessage = error.error.message;          
        }
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
}
