import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  productId: number;
  productDescriptionEnglish: string;
  products: Product[];



  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  search() {

    if (this.productId != null
       && this.productId > 0 
       && this.productDescriptionEnglish != ""
       && this.productDescriptionEnglish != null) {
      this.productService.getProductByIdDescr(this.productId, this.productDescriptionEnglish).subscribe((data: any) => {
        console.log(data);
        this.products = [];
        this.products.push(<Product>data);

      }, (err: any) => {
          console.log(err.error.status);        
      });
    }
    else if (this.productId != null && this.productId > 0 ) {
      this.productService.getProduct(this.productId).subscribe((data: any) => {
        console.log(data);
        this.products = [];
        this.products.push(<Product>data);

      }, (err: any) => {
          console.log(err.error.status);        
      });
    }
    else if (this.productDescriptionEnglish != null && this.productDescriptionEnglish != "") {
      this.productService.getProductByDescription(this.productDescriptionEnglish).subscribe((data: any) => {
        console.log(data);
        this.products = [];
        if ( data instanceof Array) {
          for (let item of data) {
              if(item['productDescriptionEnglish'] == this.productDescriptionEnglish)
                this.products.push(<Product>item); 
          }
        }
        else {
          this.products.push(<Product>data);
        }
      }, (err: any) => {
          console.log(err.error.status);        
      });
    }
    else {
      this.productService.getProducts().subscribe((data: any) => {

        console.log(data);
        this.products = <Product[]>data;

      }, (err: any) => {
          console.log(err.error.status);
      });
    }

  }
}
