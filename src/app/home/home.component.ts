import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productChart = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
  this.productService.availableProducts().subscribe((res: any) => {
    this.productChart = new Chart('productChart',{
      type: 'pie',
      data: {
        labels: ["Available", "Unused"],
        datasets: [{
          backgroundColor: [
            "#FAE1E6",
            "#DAEBF9",
          ],
          data: [res['availableProducts'], res['unusedProducts']]
        }]
      }
    });
  }, (err: any ) => {
    console.log(err.error.status);
  }) 
  }
}
