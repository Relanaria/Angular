import { Component } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { CreateProductService } from './create-product.service';
import { Router } from '@angular/router';
import { FormCreateProduct } from '../interfaces/product.interface';


@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent {

  constructor (private productService: CreateProductService, private router: Router){
  }

  createProductForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    size: new FormControl('', [Validators.required, Validators.minLength(1)]),
    price: new FormControl('', [Validators.required, Validators.minLength(3)]),
    color: new FormControl('', [Validators.required, Validators.minLength(3)]),
    imgURL: new FormControl('', [Validators.required, Validators.minLength(3)]),
    section: new FormControl('', [Validators.required]),
  });

  handeFormSubmit(event: SubmitEvent): void {
    event.preventDefault();
    if (
      this.createProductForm.get('title')?.errors ||
      this.createProductForm.get('size')?.errors ||
      this.createProductForm.get('size')?.errors ||
      this.createProductForm.get('price')?.errors ||
      this.createProductForm.get('color')?.errors ||
      this.createProductForm.get('imgURL')?.errors ||
      this.createProductForm.get('section')?.errors
    ) {      
      return;
    }
    
    this.productService.createProduct(this.createProductForm.value).subscribe(createProduct => {    
      this.router.navigate([`/details/${createProduct.section}/${createProduct._id}`]);
    });;
  }
}
