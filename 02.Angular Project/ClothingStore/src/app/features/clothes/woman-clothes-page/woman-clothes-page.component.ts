import { Component } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-woman-clothes-page',
  standalone: true,
  imports: [],
  templateUrl: './woman-clothes-page.component.html',
  styleUrl: './woman-clothes-page.component.css'
})
export class WomanClothesPageComponent {
  
  products: Product[];

  constructor(){
    this.products = [
      {title:'Product 1',
        price: 1,
        color: "red",
        size: "S",
        imgURL: 'https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {title:'Product 2',
        price: 3,
        color: "blue",
        size: "S",
        imgURL: 'https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {title:'Product 3',
        price: 6,
        color: "black",
        size: "S",
        imgURL: 'https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {title:'Product 4',
        price: 8,
        color: "black",
        size: "S",
        imgURL: 'https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
    ];
}
}
