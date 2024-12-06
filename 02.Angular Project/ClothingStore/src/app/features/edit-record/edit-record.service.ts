import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatedProduct, Product } from '../interfaces/product.interface';
import { UserAuthService } from '../user/user-auth.service';
import { UserLogin } from '../interfaces/user-login';

@Injectable({
  providedIn: 'root'
})
export class EditRecordService {
  apiURL = '/data/';
  body = {};
  options = {};
  userInfo: UserLogin | null = null;
  

  constructor(private http: HttpClient,  private userService: UserAuthService) { 
    this.userService.getUser$().subscribe((data) => {
      this.userInfo = data;
    });
  }

  getOneProduct(id:string, section:string){
    return this.http.get<Product>(this.apiURL + `${section}/` + id);
  }


  editProduct(title: string , price: string, color:string, size:string , imgURL:string , section:string, _id:string) {
    this.body = JSON.stringify({title, price, color, size, imgURL, section})
    this.options = {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': this.userInfo?.accessToken
      }
    }
    console.log(this.userInfo?.accessToken);
    
    return this.http.put<CreatedProduct>(this.apiURL + section + `/${_id}`, this.body, this.options);
  }
}
