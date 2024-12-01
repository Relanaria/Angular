import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductServiceService } from './product-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  id: string;
  personData:any | null = null;

  constructor(
    private route: ActivatedRoute, 
    private getProduct: ProductServiceService) {
    this.id = this.route.snapshot.params["id"];
    }

  ngOnInit(): void {
    this.getProduct.getOneProduct(this.id).subscribe(data =>{
      this.personData = data;
    })
  }
  
  
}
