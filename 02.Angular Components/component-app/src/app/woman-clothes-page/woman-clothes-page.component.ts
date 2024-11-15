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
    {title:'Woman Product 1',
      price: 5,
      imgURL: 'https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {title:'Woman Product 2',
      price: 5,
      imgURL: 'https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {title:'Woman Product 3',
      price: 5,
      imgURL: 'https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {title:'Woman Product 4',
      price: 5,
      imgURL: 'https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ];
}
}
