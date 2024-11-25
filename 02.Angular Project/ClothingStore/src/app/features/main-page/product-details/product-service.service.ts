import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwapiPersons } from '../main/interfaces/swapi-persons';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  apiURL = 'https://swapi.dev/api/people/?search=';
  constructor(private http: HttpClient) { }

  getOneProduct(id:string){
    return this.http.get<SwapiPersons>(this.apiURL + id);
  }
}
