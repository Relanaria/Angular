import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DOMAINS } from '../../../constants';
import { emailValidator } from '../../../utils/email.validator';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  domains = DOMAINS

  registeForm = new FormGroup({
    email: new FormControl("", [Validators.required, emailValidator(this.domains)]),
    firstName: new FormControl("",[Validators.required, Validators.minLength(3)]),
    lastName: new FormControl("",[Validators.required, Validators.minLength(3)]),
    password: new FormControl("",[Validators.required, Validators.minLength(5)]),
    country: new FormControl("",[Validators.required, Validators.minLength(3)]),
    city: new FormControl("",[Validators.required, Validators.minLength(3)]),
    profileImg: new FormControl("",[Validators.required, Validators.minLength(3)]),
  })


  handeFormSubmit(event: SubmitEvent):void {
    if(this.registeForm.invalid){
      return;
    }
    console.log(this.registeForm.value);
    this.registeForm.reset();
  }
}
