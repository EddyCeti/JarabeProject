import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private httpClient: HttpClient) { }
  products: any;
  providers: any;
  productProviders:  any;
  historic: any[];


  productos = [ 
    {
      id: 1,
      name: 'product 1',
      description : 'test',
      cost : '100 $MX',
      provedores: ["provedor 1","provedor 2","provedor 3"]
        
    
  },
  {
    id: 2,
    name: 'product 2',
    description : 'test',
    cost : '100 $MX',
    provedores: ["provedor 1","provedor 2","provedor 3"]
      
  
  },
  {
  id: 3,
  name: 'product 3',
  description : 'test',
  cost : '100 $MX',
  provedores: ["provedor 1","provedor 2","provedor 3"]
    
  
  },{
  id: 4,
  name: 'product 4',
  description : 'test',
  cost : '100 $MX',
  provedores: ["provedor 1","provedor 2","provedor 3"]
    
  
  },
  {
  id: 31,
  name: 'product 5',
  description : 'test',
  cost : '100 $MX',
  provedores: ["provedor 1","provedor 2","provedor 3"]
    
  
  }
  ];


  private REST_API_SERVER = "http://localhost:3000/api/products";

  getProducts(){
    return this.productos;
  }
  
  postProductChange(data: any,id: number){
    return this.httpClient.patch(this.REST_API_SERVER +  "/" + id,data);

  }

  getHistoricRequest(){
    return this.httpClient.get("http://localhost:3000/api/StockMovements");
  }

  getProvidersRequest(){
    return this.httpClient.get("http://localhost:3000/api/providers");
  }

  getProductProvidersRequest(){
    return this.httpClient.get("http://localhost:3000/api/productsProviders");
  }

  
  getRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  setTest(obj: any){
    this.products = obj;
  }

  getTest(){  
    return  this.products;
  }


  setProviders(data: any){
    this.providers  =  data;
  }

  getProviders(){
    return  this.providers;
  }

  setProductProviders(data:  any){
    this.productProviders  = data;
  }

  getProductProviders(){
    return this.productProviders;
  }
  
  setHistoric(data: any){
    this.historic = data;
  }

  getHistoric(){
    return this.historic;
  }
}




