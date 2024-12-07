import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DOMAINS } from '../../../constants';
import { emailValidator } from '../../../utils/email.validator';
import { UserAuthService } from '../user-auth.service';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, ToastModule, ButtonModule, RippleModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
  providers: [MessageService]
})
export class RegisterPageComponent {
  domains = DOMAINS;
  errorMessage = '';

  constructor(
    private userService: UserAuthService, 
    private router: Router,
    private messageService: MessageService){
  }

  registeForm = new FormGroup({
    email: new FormControl("", [Validators.required, emailValidator(this.domains)]),
    firstName: new FormControl("",[Validators.required, Validators.minLength(3)]),
    lastName: new FormControl("",[Validators.required, Validators.minLength(3)]),
    password: new FormControl("",[Validators.required, Validators.minLength(5)]),
    country: new FormControl("",[Validators.required, Validators.minLength(3)]),
    city: new FormControl("",[Validators.required, Validators.minLength(3)]),
    profileImg: new FormControl("",[Validators.required, Validators.minLength(3)]),
  })

  registerSubmit():void {
    if(this.registeForm.invalid){
      console.log(this.registeForm.value);
      this.messageService.add({
        severity: 'error', 
        summary: 'Error', 
        detail: 'Invalid FormValues'
      })
      return;
    }
 
    const {
      email,
      firstName,
      lastName,
      password,
      country,
      city,
      profileImg,
    } = this.registeForm.value;


    this.userService.register(email!, firstName!, lastName!, password!, country!, city!, profileImg!).subscribe(
      {
        next: (response) => {
          this.messageService.add({
            severity: 'success', 
            summary: 'Success', 
            detail: 'Successfull registration!'
          });
          this.router.navigate(['/home'])
        },
        error: (error) =>{
          console.log(error);
          
          if(error.status === 403 || error.status === 401){
            this.errorMessage = error.error.message;
            this.messageService.add({
              severity: 'error', 
              summary: 'Error', 
              detail: error.error.message
            })
          }
        },
        complete: () => {
          console.log('completed');
        },
      })
  }
}
