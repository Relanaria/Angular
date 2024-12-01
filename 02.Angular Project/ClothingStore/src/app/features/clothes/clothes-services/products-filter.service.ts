import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, filter } from 'rxjs';
import { map } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsFilterService {
  private products: Product[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<Product[]>('http://localhost:3030/data/menClothes')
      .subscribe((data) => {
        this.products = data;
        this.products$.next(data);
      });
  }
  

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
        filtered = [...filtered].sort((a, b) => a.price - b.price);

      } else if (price === 'high') {
        filtered = [...filtered].sort((a, b) => b.price - a.price);

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
