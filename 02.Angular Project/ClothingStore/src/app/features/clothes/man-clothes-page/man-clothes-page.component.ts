import { Component } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { FormsModule } from '@angular/forms';
import { ProductsFilterService } from '../clothes-services/products-filter.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-man-clothes-page',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './man-clothes-page.component.html',
  styleUrl: './man-clothes-page.component.css'
})
export class ManClothesPageComponent {

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
    this.productService.setCategoryFilter(this.selectSizeFilter);
  }

  onColorChange() {
    this.productService.setAvailabilityFilter(this.selectColorFilter);
  }
}
