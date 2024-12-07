import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditRecordService } from './edit-record.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interfaces/product.interface';
import { UserAuthService } from '../user/user-auth.service';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-edit-record',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, ToastModule, ButtonModule, RippleModule],
  templateUrl: './edit-record.component.html',
  styleUrl: './edit-record.component.css',
  providers: [MessageService]
})
export class EditRecordComponent implements OnInit{
  id:string;
  section:string;
  productInfo: Product | undefined;
  errorMessage = '';


  constructor(
    private editService: EditRecordService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserAuthService,
    private messageService: MessageService
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
      this.messageService.add({
        severity: 'error', 
        summary: 'Error', 
        detail: 'Invalid Form Values'
      }) 
      return;
    }

    this.editService.editProduct( title!, price!, color!, size!, imgURL!, this.section, this.id).subscribe({
      next: (response) => {
        this.router.navigate(['/details/', this.section, this.id])
        this.messageService.add({
          severity: 'success', 
          summary: 'Success', 
          detail: 'Product was eddited successfully!'
        }) 
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
        if(error.status === 404){
          this.errorMessage = error.message
          this.router.navigate(['/home']);
        }
      },
      complete: () => {
        console.log('completed');
      },
    })
  }

}
