import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

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
