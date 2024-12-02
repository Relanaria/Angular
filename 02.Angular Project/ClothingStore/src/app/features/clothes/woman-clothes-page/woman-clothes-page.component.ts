import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsFilterService } from '../clothes-services/products-filter.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-woman-clothes-page',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './woman-clothes-page.component.html',
  styleUrl: './woman-clothes-page.component.css'
})
export class WomanClothesPageComponent {
  
  products$: Observable<Product[]>;
  apiKey = 'http://localhost:3030/data/womanClothes/';

  selectPriceFilter: string = 'low';
  selectColorFilter: string = 'all';
  selectSizeFilter: string = 'all';

  constructor( private productService: ProductsFilterService){
    this.products$ = this.productService.filteredProducts$;
  }

  ngOnInit(): void {
    this.productService.setApiKey(this.apiKey);
    this.productService.setPriceFilter(this.selectPriceFilter );    
    this.productService.setSizeFilter(this.selectSizeFilter);
    this.productService.setColorFilter(this.selectColorFilter);
  }
  
  onPriceChange() {
    this.productService.setPriceFilter(this.selectPriceFilter );    
  }

  onSizeChange() {
    this.productService.setSizeFilter(this.selectSizeFilter);
  }

  onColorChange() {
    this.productService.setColorFilter(this.selectColorFilter);
  }
}
