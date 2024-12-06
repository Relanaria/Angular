import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatedProduct, Product } from '../interfaces/product.interface';
import { UserAuthService } from '../user/user-auth.service';
import { UserLogin } from '../interfaces/user-login';

@Injectable({
  providedIn: 'root'
})
export class CreateProductService {
  api = '/data/';
  options = {};
  body = {};
  userInfo: UserLogin | null = null;
  
  constructor(private http: HttpClient, private userService: UserAuthService) {
    this.userService.getUser$().subscribe((data) => {
      this.userInfo = data;
    });
   }
  
  createProduct(productData: any){
    this.body = JSON.stringify(productData)
    this.options = {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': this.userInfo?.accessToken
      }
    }
    return this.http.post<CreatedProduct>(this.api + productData.section, this.body, this.options);
  }

}
