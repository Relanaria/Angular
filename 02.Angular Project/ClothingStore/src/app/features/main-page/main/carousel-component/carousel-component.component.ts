import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-carousel-component',
  standalone: true,
  imports: [],
  templateUrl: './carousel-component.component.html',
  styleUrl: './carousel-component.component.css'
})
export class CarouselComponentComponent {


  constructor(private scroller: ViewportScroller){}

  
  scrollTo(){
    this.scroller.scrollToAnchor("collections")
  }
}
