import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor( private httpService: HttpClient) { }
  providers = [ {
    id: 1,
    name: 'provider 1',
    description : 'test',
    rfc: '12345',
    products: ["product 1","product 2","product 3"]
      
  
  },
  {
    id: 2,
    name: 'provider 2',
    description : 'test',
    rfc: '12345',
    products: ["product 1","product 2","product 3"]
      
  
  },
  {
    id: 3,
    name: 'provider 3',
    description : 'test',
    rfc: '12345',
    products: ["product 1","product 2","product 3"]
      
  
  },
  {
    id: 4,
    name: 'provider 4',
    description : 'test',
    rfc: '12345',
    products: ["product 1","product 2","product 3"]
      
  
  }
];

  private REST_API_SERVER = "http://localhost:3000/api/providers";

  getRequest(){

    return this.httpService.get(this.REST_API_SERVER);

  }

  getProducts(id:number){
    return this.httpService.get(this.REST_API_SERVER + "/" + id + "/products");
  }


  postRequest(postData:any){

    this.httpService.post(this.REST_API_SERVER, postData).subscribe((data:any[]) =>{
      console.log(data);
    });

  }

  patchRequest(postData:any,id:number){
    this.httpService.patch(this.REST_API_SERVER + "/" +  id, postData).subscribe((data:any[]) =>{
      console.log(data);
    });
  }

  deleteRequest(id:number){
    this.httpService.delete(this.REST_API_SERVER + "/" + id).subscribe((data:any[]) =>{
      console.log(data);
    });

  }
  

  getProviders(){
    return this.providers;
  }

  getProviderById(id:number){
    return this.providers[id - 1];
  }

  postStorage( file:File, id:string) {
    const formData: FormData = new FormData();
    formData.append('fileKey',file,id + ".jpg");
    this.httpService.post("http://localhost:3000/api/storages/imagesProv/upload", formData).subscribe((JSON:any)  =>{
      console.log(JSON);
    },  error => {
      console.log(error);
    });
  }

  deleteStorage( id: string){
    this.httpService.delete('http://localhost:3000/api/storages/imagesProv/files/' + id  + ".png").subscribe((JSON:any) =>{
      console.log(JSON);
    }, error =>{
      console.log(error);
    });
  }



}
