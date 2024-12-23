import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';
import { SwapiServiceService } from './swapi-service.service';
import { Person } from '../interfaces/swapi-persons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Person[] = [];
  // products: Product[];

  constructor(private swapiPeople: SwapiServiceService){}

  ngOnInit(): void {
    this.swapiPeople.getAllPeope().subscribe(data =>{
    this.products = data.results;
    })
  }
}
