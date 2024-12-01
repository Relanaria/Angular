import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwapiPersons } from '../main/interfaces/swapi-persons';
import { Product } from '../../clothes/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  apiURL = 'http://localhost:3030/data/menClothes/';
  constructor(private http: HttpClient) { }

  getOneProduct(id:string){
    return this.http.get<Product>(this.apiURL + id);
  }
}
