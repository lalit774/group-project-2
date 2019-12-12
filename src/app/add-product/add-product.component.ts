import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public msg: string;
  public submitted: boolean = false;
  public cancelled: boolean = true;


  public product : Product = {
    id:null,
    productDescriptionEnglish:null,
    productDescriptionFrench:null,
    brandNameEnglish:null,
    brandNameFrench:null,
    productType:null,
    additionalProductIdentification:null,
    targetMarket:null,
    productImageUrl:null,
    status:null };
    public prodId: number;


  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
    ) {


                }

  ngOnInit() {
  }

  onSubmit(myform: NgForm) {
    this.submitted = true;
    this.cancelled = false;
    if (myform.valid)
    {
      if(confirm('You are about to submit this entry.\n Are you sure?')) {
        this.productService.create(myform.value);
        this.msg = "Your item is submitted :)";
        this.submitted = false;
        myform.reset();
      }
      else
      {
        //this.msg = "Entry is not completed!";
        window.alert("Entry is not completed!");
        this.submitted = false;
        this.cancelled = true;
        myform.reset();
      }
    }
  }

  onCancel(myform: NgForm){
    this.submitted = false;
    this.cancelled = true;
    myform.reset();
  }
}
