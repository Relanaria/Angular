import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-record',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,],
  templateUrl: './edit-record.component.html',
  styleUrl: './edit-record.component.css'
})
export class EditRecordComponent {

  
  editProductForm = new FormGroup({
    productName: new FormControl("",[Validators.required, Validators.minLength(3)]),
    size: new FormControl("", [Validators.required, Validators.minLength(3)]),
    price: new FormControl("", [Validators.required, Validators.minLength(3)]),
    imgURL: new FormControl("", [Validators.required, Validators.minLength(3)]),
  })


  handeFormSubmit(event: SubmitEvent):void {
    if(this.editProductForm.invalid){
      return;
    }
    console.log(this.editProductForm.value);
  }

}
