import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductServiceService } from './product-service.service';
import { CommonModule } from '@angular/common';
import { UserAuthService } from '../user/user-auth.service';
import { Subscription } from 'rxjs';
import { UserLogin } from '../interfaces/user-login';
import { Routes } from '../interfaces/routes.inderface';
import { ProductLike } from '../interfaces/product-likes.interface';



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
  likedByUser = false;
  numberOfLikes = 0;

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
    this.productService.getProductAndLike(this.id, this.section, this.userData?._id!)
  .subscribe({
    next: (result) => {
      this.productData = result.product;
      this.productService.getNumberOfLikes(this.productData._id).subscribe((data) =>{
        this.numberOfLikes = data.length;
      })
      this.likedByUser = result.likeResponse.some((likes: ProductLike) =>{
          return likes.productId === this.productData._id;
      });
    },
    error: (err) => {
      console.error('Error:', err);
    }
  });
  }

  handleLike():void {
    this.productService.likeProduct(this.productData._id, this.userData?.accessToken!).subscribe(() =>{
      this.likedByUser = true;
      this.numberOfLikes++;
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
