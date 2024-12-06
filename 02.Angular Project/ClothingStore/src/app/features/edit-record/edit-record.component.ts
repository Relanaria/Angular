import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditRecordService } from './edit-record.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-edit-record',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './edit-record.component.html',
  styleUrl: './edit-record.component.css'
})
export class EditRecordComponent implements OnInit{
  id:string;
  section:string;
  productInfo: Product | undefined;


  constructor(
    private editService: EditRecordService,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.id = this.route.snapshot.params['id'];
    this.section = this.route.snapshot.params['section'];
  }
  
  editProductForm = new FormGroup({
    title: new FormControl("",[Validators.required, Validators.minLength(3)]),
    size: new FormControl("", [Validators.required, Validators.minLength(1)]),
    price: new FormControl("", [Validators.required, Validators.minLength(3)]),
    color: new FormControl("", [Validators.required, Validators.minLength(3)]),
    imgURL: new FormControl("", [Validators.required, Validators.minLength(3)]),
  })

  ngOnInit(): void {
    this.editService.getOneProduct(this.id, this.section).subscribe((data) =>{
      this.productInfo = data;
      this.editProductForm.patchValue({
        title: data.title,
        size: data.size,
        price: data.price.toString(),
        color: data.color,
        imgURL: data.imgURL
      })
    })
  }

  handeFormSubmit(event: SubmitEvent):void {
    const {title, size, price, color, imgURL} = this.editProductForm.value

    if(this.editProductForm.invalid){
      console.log('Invalid');
      console.log(this.editProductForm.errors);
      
      return;
    }

    this.editService.editProduct( title, price, color, size, imgURL, this.section, this.id).subscribe(data => {
      this.router.navigate([`/details/${this.section}/${data._id}`])
    })
  }

}
