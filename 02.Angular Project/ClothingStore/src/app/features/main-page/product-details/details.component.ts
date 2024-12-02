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
  section: string;
  personData:any | null = null;

  constructor(
    private route: ActivatedRoute, 
    private getProduct: ProductServiceService) {
    this.id = this.route.snapshot.params["id"];
    this.section = this.route.snapshot.params['section'];
    }

  ngOnInit(): void {
    this.getProduct.getOneProduct(this.id, this.section).subscribe(data =>{
      this.personData = data;
    })
  }
  
  
}
