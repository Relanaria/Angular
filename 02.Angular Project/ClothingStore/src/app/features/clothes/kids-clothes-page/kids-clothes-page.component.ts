import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsFilterService } from '../clothes-services/products-filter.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kids-clothes-page',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './kids-clothes-page.component.html',
  styleUrl: './kids-clothes-page.component.css'
})
export class KidsClothesPageComponent {
  
  products$: Observable<Product[]>;
  apiKey = '/data/kidsClothes/';

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
