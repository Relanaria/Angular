import { Component } from '@angular/core';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [CarouselComponentComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
