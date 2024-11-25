import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  registeForm = new FormGroup({
    email: new FormControl(""),
    username: new FormControl(""),
    password: new FormControl(""),
  })


  handeFormSubmit(event: SubmitEvent):void {
    event.preventDefault();
    console.log(this.registeForm.value);
    this.registeForm.reset();
  }
}
