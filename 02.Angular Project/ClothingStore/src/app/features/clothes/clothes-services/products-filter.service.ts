import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, filter } from 'rxjs';
import { map } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsFilterService {
  private products: Product[] = [
    {title:'Product 1',
      price: 1,
      color: "red",
      size: "S",
      imgURL: 'https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {title:'Product 2',
      price: 3,
      color: "blue",
      size: "M",
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
      size: "L",
      imgURL: 'https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ];

  private products$ = new BehaviorSubject(this.products);

  private priceFilter$ = new BehaviorSubject<string | null>('low');
  private sizeFilter$ = new BehaviorSubject<string | null>('all');
  private colorFilter$ = new BehaviorSubject<string | null>('all');

  filteredProducts$: Observable<Product[]> = combineLatest([
    this.products$,
    this.priceFilter$,
    this.sizeFilter$,
    this.colorFilter$,
  ]).pipe(
    map(([products, price, size, color]) => {
      let filtered = products.filter((product) => {
        const matchesCategory = size !== 'all' ? product.size === size : true;
        const matchesColor = color !== 'all' ? product.color === color : true;
        return matchesCategory && matchesColor;
      });

      if (price === 'low') {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (price === 'high') {
        filtered = filtered.sort((a, b) => b.price - a.price);
      }

      return filtered;
    })
  );

  setPriceFilter(price: string | null) {
    this.priceFilter$.next(price);
  }

  setSizeFilter(size: string | null) {
    this.sizeFilter$.next(size);
  }

  setColorFilter(color: string | null) {
    this.colorFilter$.next(color);
  }
}
