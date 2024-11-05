import { Component } from '@angular/core';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { ProductsComponent } from './products/products.component';
import { ArticleProductsComponent } from './article-products/article-products.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [CarouselComponentComponent, ProductsComponent, ArticleProductsComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
