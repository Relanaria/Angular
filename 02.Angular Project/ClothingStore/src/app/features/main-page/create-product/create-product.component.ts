import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})

export class CreateProductComponent {

  createProductForm = new FormGroup({
    productName: new FormControl(""),
    size: new FormControl(""),
    price: new FormControl(""),
    imgURL: new FormControl(""),
  })


  handeFormSubmit(event: SubmitEvent):void {
    event.preventDefault();
    console.log(this.createProductForm.value);
  }

}
