import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { ProductsService } from 'src/app/services/products.service';
import { ProvidersService} from '../../services/providers.service';

@Component({
  selector: 'app-producto-agregar',
  templateUrl: './producto-agregar.component.html',
  styleUrls: ['./producto-agregar.component.css']
})
export class ProductoAgregarComponent implements OnInit {
  
  providersList = [];

  

  constructor( private providersService: ProvidersService ,  private productsService: ProductsService) { 
      
     
   }

   name: string;
   description: string;
   cost: string;
   quantity: number;

   providers = [];
   dataPost  = {};
  
   imageInput:  File  =  null;

  ngOnInit(): void {
    this.providersService.getRequest().subscribe((data:any) =>{
      this.providersList = data;
    });
    
  }

  checkBoxValue(event){

    
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let value = idAttr.nodeValue;

    if  (target.checked == true){
      this.providers.push(value);
    }
    
    if (target.checked == false){
      this.providers = this.providers.filter( string =>  string !== value);
    }
      
    console.log(this.providers);

  }

  

  createProduct(){
    
    this.dataPost = {
      name: this.name,
      description:  this.description,
      cost: this.cost,
      quantity: this.quantity
    }

    this.productsService.postRequest(this.dataPost);
    
    this.productsService.getRequest().subscribe((data:any[])  => {
      let id;
      

      //  NO SIRVE CON EL PRIMER PRODUCTO
      id = data[data.length-1].id + 1;
      console.log(id);

      if(this.imageInput != null){
        this.productsService.postStorage(this.imageInput,id);
      }
      
      this.providers.forEach(element => {  
        this.productsService.putProviders(id,element);
      });
    });
  }


  fileSelected(event){
    this.imageInput  =  event.item(0);

  }

}
