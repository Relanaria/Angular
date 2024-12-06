import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  options = {};
  apiURL = '/data/';
  constructor(private http: HttpClient) { }

  getOneProduct(id:string, section:string){
    return this.http.get<Product>(this.apiURL + `${section}/` + id);
  }

  deleteProduct(productId: string, section: string,accessToken: string){
    this.options = {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': accessToken
      }
    }
    return this.http.delete(this.apiURL + section + `/${productId}`, this.options);
  }
}
