import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  
  productos = [ 
    {
      id: 1,
      name: 'product 1',
      description : 'test',
      cost : '100 $MX',
      provedores: ["provedor 1","provedor 2","provedor 3"]
        
    
  },
  {
    id: 1,
    name: 'product 1',
    description : 'test',
    cost : '100 $MX',
    provedores: ["provedor 1","provedor 2","provedor 3"]
      
  
},
{
  id: 1,
  name: 'product 1',
  description : 'test',
  cost : '100 $MX',
  provedores: ["provedor 1","provedor 2","provedor 3"]
    

},{
  id: 1,
  name: 'product 1',
  description : 'test',
  cost : '100 $MX',
  provedores: ["provedor 1","provedor 2","provedor 3"]
    

},
{
  id: 1,
  name: 'product 1',
  description : 'test',
  cost : '100 $MX',
  provedores: ["provedor 1","provedor 2","provedor 3"]
    

}
  ]

  getProducts(){
    return this.productos;
  }

  getProductById(id:number){
    return this.productos[id - 1];
  }
}
