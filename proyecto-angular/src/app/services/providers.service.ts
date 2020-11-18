import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor() { }
  providers = [ {
    id: 1,
    name: 'provider 1',
    description : 'test',
    rfc: '12345',
    products: ["product 1","product 2","product 3"]
      
  
  },
  {
    id: 1,
    name: 'provider 1',
    description : 'test',
    rfc: '12345',
    products: ["product 1","product 2","product 3"]
      
  
  },
  {
    id: 1,
    name: 'provider 1',
    description : 'test',
    rfc: '12345',
    products: ["product 1","product 2","product 3"]
      
  
  },
  {
    id: 1,
    name: 'provider 1',
    description : 'test',
    rfc: '12345',
    products: ["product 1","product 2","product 3"]
      
  
  }
]
  ;

  getProviders(){
    return this.providers;
  }

  getProviderById(id:number){
    return this.providers[id - 1];
  }

}
