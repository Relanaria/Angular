import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  apiURL = 'http://localhost:3030/data/';
  constructor(private http: HttpClient) { }

  getOneProduct(id:string, section:string){
    return this.http.get<Product>(this.apiURL + `${section}/` + id);
  }
}
