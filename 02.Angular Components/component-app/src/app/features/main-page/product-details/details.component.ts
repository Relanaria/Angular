import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  productData: any;
  secnd:any;

  constructor(private route: ActivatedRoute) {
    this.productData = this.route.snapshot.params;
    console.log(this.productData);
    
  }

  
  
}
