import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SearchProductComponent } from './search-product/search-product.component'; 

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'addProduct', component: AddProductComponent },
{ path: 'searchProduct', component: SearchProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
