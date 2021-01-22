import { Component, OnInit, Input} from '@angular/core';
import { ProductsService } from '../services/products.service';
import { subscribeOn, tap } from 'rxjs/operators';
import { TestBed } from '@angular/core/testing';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-producto-id',
  templateUrl: './producto-id.component.html',
  styleUrls: ['./producto-id.component.scss'],
})
export class ProductoIdComponent implements OnInit {
  
  product: any;
  providers: any[];
  relations: any[];
  quantity:  number;
  CurrentProviders: any[]  =  [];
  CurrentProvidersInfo: any[]  = [];

  constructor( private productsService: ProductsService) {  
    this.product = productsService.getTest();
    this.providers  = productsService.getProviders();
    this.relations = productsService.getProductProviders();
    console.log(this.relations);

    this.relations.forEach(element => {
      if(  element.productsId ==  this.product.id  ){
        this.CurrentProviders.push(element.providersId);
      }
    });
    
    for(let i  =  0;  i  <  this.providers.length ; i++){
      for(let j = 0; j < this.CurrentProviders.length ; j++){

        if(this.providers[i].id ==  this.CurrentProviders[j] ){
          this.CurrentProvidersInfo.push(this.providers[i]);
        }
      }

    }

  }

  ngOnInit() {
   

  

  }


 

  apply(){
    console.log(this.product);
    console.log('Cambio en cantidad: ' + this.quantity);
    this.product.quantity =  this.product.quantity  +  this.quantity;
    console.log('Cantidad Actual: ' + this.product.quantity);
    this.productsService.postProductChange(this.product,this.product.id).subscribe((data:any)  =>  {
      console.log(data);
    },
    error  => {
      console.log(error);
    });
  }

}
