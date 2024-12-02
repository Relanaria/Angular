import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DOMAINS } from '../../../constants';
import { emailValidator } from '../../../utils/email.validator';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  domains = DOMAINS

  constructor(private userService: UserAuthService, private router: Router){

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


    this.userService.register(email!, firstName!, lastName!, password!, country!, city!, profileImg!).subscribe(() =>{
      this.router.navigate(['/home'])
    })
  }
}
