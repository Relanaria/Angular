import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwapiPersons } from '../interfaces/swapi-persons';

@Injectable({
  providedIn: 'root'
})
export class SwapiServiceService {
  apiURL = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) { }

  getAllPeope() {
    return this.http.get<SwapiPersons>(this.apiURL);
  }
}
