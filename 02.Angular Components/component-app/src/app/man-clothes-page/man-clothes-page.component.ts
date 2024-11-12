import { Component } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-man-clothes-page',
  standalone: true,
  imports: [],
  templateUrl: './man-clothes-page.component.html',
  styleUrl: './man-clothes-page.component.css'
})
export class ManClothesPageComponent {

  products: Product[];

  constructor(){
    this.products = [
      {title:'Product 1',
        price: 5,
        imgURL: 'https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {title:'Product 2',
        price: 5,
        imgURL: 'https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {title:'Product 3',
        price: 5,
        imgURL: 'https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {title:'Product 4',
        price: 5,
        imgURL: 'https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
    ];
  }
}
