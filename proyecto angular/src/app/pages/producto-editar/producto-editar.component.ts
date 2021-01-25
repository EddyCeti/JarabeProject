import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProvidersService} from '../../services/providers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {
  parentRouteId: number;
  providersList = [];

 
 
  postData = {};
  name: string;
  description: string;
  cost: string;
  quantity: number;
  imgInput: File = null;


  imageRoute:string;    

  
  providers = [];

  constructor( providersService: ProvidersService,
              private route: ActivatedRoute,private productsService :ProductsService) {       
    

    route.params.subscribe(
      params =>{
          this.parentRouteId = parseInt(params['id']);
      }
    );

    providersService.getRequest().subscribe((data:any[])  =>{
      this.providersList = data;
    });

  }

  ngOnInit(): void {
    this.productsService.getRequest().subscribe((data: any[])  =>{
      data.forEach(element => {
        if (element["id"] == this.parentRouteId){
          this.name = element.name;
          this.description =  element.description;
          this.cost = element.cost;
          this.quantity = element.quantity;
        }
      },
      error => console.log(error));
    });

    this.imageRoute = 'http://localhost:3000/api/storages/images/download/' + this.parentRouteId +  '.jpg';    


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
    
  }


  fileSelected(event){
    this.imgInput = event.item(0);

  }

  createProduct(){
    if(this.imgInput != null){
      this.productsService.postStorage(this.imgInput,this.parentRouteId.toString());
    }
    
    this.postData = {
      name: this.name,
      description: this.description,
      cost: this.cost,
      quantity: this.quantity
    }
    this.productsService.patchRequest(this.parentRouteId,this.postData);
    this.productsService.deleteProviders(this.parentRouteId);
    if (this.providers.length > 0){
      this.providers.forEach(element => {
        console.log(element)
        this.productsService.putProviders(this.parentRouteId,element);
      });
    }
    
  }

}
