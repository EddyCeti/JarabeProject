import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  productTest:  any;
  Ptest: any[];
  products = [];
  items =  [];
  miBuscador: any;
  miStringDeCancell: any;
  imgSrc:  string;
  data: string = '';
  constructor(private productsService: ProductsService, private router: Router) {
    productsService.getRequest().subscribe((data:any[]) => {
      this.products = data;
      this.productTest  = data;
      this.productsService.setTest(this.productTest);
      productsService.getProductProvidersRequest().subscribe((data:any[]) => {
        productsService.setProductProviders(data);
      });
      productsService.getProvidersRequest().subscribe((data: any[]) =>{
        productsService.setProviders(data);
      });
      this.productsService.getHistoricRequest().subscribe((data:any) => {
        productsService.setHistoric(data);
      });
    });
  

  }

  onInput(event){
    
    if(event.detail.data == null){
      this.data = this.data.slice(0, -1);
    }
    else{
    this.data = this.data + event.detail.data;
    }
    console.log(event);
    console.log(this.data);
    this.data.toLocaleLowerCase();

    this.items = Array.from(document.querySelector('ion-list').children);
    console.log(this.items);
    this.items.forEach(item => {
      const shouldShow = item.textContent.toLowerCase().indexOf(this.data) > -1;
      item.style.display = shouldShow ? 'block' : 'none';
    });

    

  }

  onCancel(event){
    this.data = '';
    this.items.forEach(element => {
      element.style.display =  "none";
    });
    console.log("On Cancel");
    console.log(event);
  }

  goToProductDetails(id) {
    this.products.forEach(element => {
      if(element.id == id){
        this.productTest =  element;
        this.productsService.setTest(this.productTest);
      }
    });  
    
    this.router.navigate(['/producto', id]);
  }

}
