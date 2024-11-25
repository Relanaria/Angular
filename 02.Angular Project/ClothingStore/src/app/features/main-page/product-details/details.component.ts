import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from './product-service.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  id: any;
  personData:any;

  constructor(
    private route: ActivatedRoute, 
    private getProduct: ProductServiceService) {
    this.id = this.route.snapshot.params["id"];
    }

  ngOnInit(): void {
    this.getProduct.getOneProduct(this.id).subscribe(data =>{
      this.personData = data.results[0];
      console.log(this.personData);
    })
  }
  
  
}
