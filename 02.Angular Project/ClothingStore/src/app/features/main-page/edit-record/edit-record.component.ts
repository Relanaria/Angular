import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-record',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './edit-record.component.html',
  styleUrl: './edit-record.component.css'
})
export class EditRecordComponent {

  
  editProductForm = new FormGroup({
    productName: new FormControl(""),
    size: new FormControl(""),
    price: new FormControl(""),
    imgURL: new FormControl(""),
  })


  handeFormSubmit(event: SubmitEvent):void {
    event.preventDefault();
    console.log(this.editProductForm.value);
  }

}
