import { Component } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsFilterService } from '../clothes-services/products-filter.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-woman-clothes-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './woman-clothes-page.component.html',
  styleUrl: './woman-clothes-page.component.css'
})
export class WomanClothesPageComponent {
  
  products$: Observable<Product[]>;

  selectPriceFilter: string = 'low';
  selectColorFilter: string = 'all';
  selectSizeFilter: string = 'all';

  constructor( private productService: ProductsFilterService){
    this.products$ = this.productService.filteredProducts$;
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
