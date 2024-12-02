import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})

export class CreateProductComponent {

  createProductForm =  new FormGroup({
    productName: new FormControl("",[Validators.required, Validators.minLength(3)]),
    size: new FormControl("", [Validators.required, Validators.minLength(3)]),
    price: new FormControl("", [Validators.required, Validators.minLength(3)]),
    color: new FormControl("", [Validators.required, Validators.minLength(3)]),
    imgURL: new FormControl("", [Validators.required, Validators.minLength(3)]),
  })


  handeFormSubmit(event: SubmitEvent):void {
    event.preventDefault();
    console.log(this.createProductForm.value);
  }

}
