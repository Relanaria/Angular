import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductServiceService } from './product-service.service';
import { CommonModule } from '@angular/common';
import { UserAuthService } from '../user/user-auth.service';
import { Subscription } from 'rxjs';
import { UserLogin } from '../interfaces/user-login';
import { Routes } from '../interfaces/routes.inderface';



@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  errorMessage: string = '';
  id: string;
  section: string;
  productData:any | null = null;
  userData: UserLogin | null = null;
  routesMatch: Routes = {
    kidsClothes: 'kids',
    womanClothes: 'woman',
    menClothes: 'mens'
  }


  constructor(
    private route: ActivatedRoute, 
    private productService: ProductServiceService,
    private userService: UserAuthService,
    private router: Router

  ) {
    this.id = this.route.snapshot.params["id"];
    this.section = this.route.snapshot.params['section'];
    this.subscription = this.userService.getUser$().subscribe((data) => {
      this.userData = data;
    });
    }

  ngOnInit(): void {
    this.productService.getOneProduct(this.id, this.section).subscribe({
      next: (response) => {
       this.productData = response;
      },
      error: (error) =>{
        if(error.status === 404){
          this.errorMessage = error.message
          this.router.navigate(['/home']);
        }
      },
    })
  }

  handleDelete(): void {
    this.productService.deleteProduct(this.id, this.section, this.userData?.accessToken!).subscribe({
      next: (response) => {
        console.log('Login successful!', response);
        this.router.navigate([`/clothes/${(this.routesMatch as Routes)[this.section]}`])
      },
      error: (error) =>{
        if(error.status === 403 || error.status === 401){
          this.errorMessage = error.message;
          this.userService.logOut();
          this.router.navigate(['/login']);
        }
      },
      complete: () => {
        console.log('completed');
      },
    }
    );
  }
  
  ngOnDestroy(): void {
    return;
  }
  
}
