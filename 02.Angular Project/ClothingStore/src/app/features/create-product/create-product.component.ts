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
import { UserAuthService } from '../user/user-auth.service';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule, ToastModule, ButtonModule, RippleModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent {
  errorMessage = '';

  constructor (
    private productService: CreateProductService,
     private router: Router,
     private userService: UserAuthService,
     private messageService: MessageService
    ){
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
      this.messageService.add({
        severity: 'error', 
        summary: 'Error', 
        detail: 'Invalid Form Values'
      }) 
      return;
    }
    
    this.productService.createProduct(this.createProductForm.value).subscribe(
      {
        next: (response) => {
          this.router.navigate([`/details/${response.section}/${response._id}`]);
        },
        error: (error) =>{
          this.messageService.add({
            severity: 'error', 
            summary: 'Error', 
            detail: error.error.message
          }) 
          if(error.status === 403 || error.status === 401){
            this.errorMessage = error.message;
            this.userService.logOut();
            this.router.navigate(['/login']);
          }
        },
        complete: () => {
          console.log('completed');
        },
      });
  }
}
