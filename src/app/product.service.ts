import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';
import { Product } from './model/product';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: String = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getProducts(){
    return this.httpClient.get((this.baseUrl + '/products'))
  }
  public getProduct(id: number) {
    return this.httpClient.get(`${this.baseUrl+ 'product/' + id}`);
    }

  public getProductByDescription(description: string) {
    return this.httpClient.get(`${this.baseUrl+ 'product/productDescriptionEnglish/' + description}`);
    }

  public getProductByIdDescr(id: number, description: string) {
    return this.httpClient.get(`${this.baseUrl+ 'product/' + id + 
        '/productIdAndProductDescriptionEnglish/' + description}`);
    }
  create(product: Product){
    //http://localhost:8080/products-ut-wo-db/rest/product/create
    this.httpClient.post<Product>(this.baseUrl + '/product/create', product).subscribe(data =>{
      console.log(data);
    },
    error =>
    console.log('Could not create product.'));
  }
  availableProducts(){
    return this.httpClient.get(this.baseUrl + '/availableProducts');
  }
}
