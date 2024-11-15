import { Component } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-kids-clothes-page',
  standalone: true,
  imports: [],
  templateUrl: './kids-clothes-page.component.html',
  styleUrl: './kids-clothes-page.component.css'
})
export class KidsClothesPageComponent {

  products: Product[];

  constructor(){
  this.products = [
    {title:'Kids Product 1',
      price: 5,
      imgURL: 'https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {title:'Kids Product 2',
      price: 5,
      imgURL: 'https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {title:'Kids Product 3',
      price: 5,
      imgURL: 'https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {title:'Kids Product 4',
      price: 5,
      imgURL: 'https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ];
}
}
