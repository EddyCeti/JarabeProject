import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { error } from 'protractor';



@Injectable({
  providedIn: 'root'
})
export class ProductsService{

  private active: number =  0;  
  private REST_API_SERVER = "http://localhost:3000/api/products";


  constructor( private httpClient: HttpClient ) { 
  
    console.log("service init");

   }


  getRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  getProviders(id:number){
    return  this.httpClient.get(this.REST_API_SERVER + "/" + id + "/providers");
  }

  postRequest(postData){

   this.httpClient.post<any>(this.REST_API_SERVER,postData).subscribe((data:any[])  =>{
      
   });
  }

  deleleteRequest(id:number){
    this.httpClient.delete(this.REST_API_SERVER + "/"  + id).subscribe((data:any[])  =>{
      
    })
  }

  patchRequest(id:number,postData: any){
    this.httpClient.patch(this.REST_API_SERVER + "/" + id, postData).subscribe((data:any[]) => {
      
    })
  }

  async putProviders(idProduct:number,idProvider:number){
    let postData  =  {}
    this.httpClient.put(this.REST_API_SERVER  +   "/"  +  idProduct  +  "/providers/rel/"  +  idProvider  ,postData).subscribe((data:any[]) => {

    });
  
  }
 
  deleteProviders(id:number){
    this.httpClient.delete(this.REST_API_SERVER  + "/" + id + "/providers").subscribe((data:any[]) =>{
    
    });
  }

  postStorage( file:File, id:string) {
    const formData: FormData = new FormData();
    formData.append('fileKey',file,id + ".jpg");
    this.httpClient.post("http://localhost:3000/api/storages/images/upload", formData).subscribe((JSON:any)  =>{
      console.log(JSON);
    },  error => {
      console.log(error);
    });
  }

  deleteStorage( id: string){
    this.httpClient.delete('http://localhost:3000/api/storages/images/files/' + id  + ".jpg").subscribe((JSON:any) =>{
      console.log(JSON);
    }, error =>{
      console.log(error);
    });
  }

  getStockMovementsbyId(id: number){
    return this.httpClient.get(this.REST_API_SERVER  + "/" +  id + "/stockMovements");
  }

  postStockMovements(id: number,postData: any){
    this.httpClient.post(this.REST_API_SERVER  + "/" +  id + "/stockMovements",postData).subscribe((JSON:any) =>{
      console.log(JSON);
    }, error =>{
      console.log(error);
    });

  }

  setActiveTable(number: number){
    this.active  = number;

  }

  getActiveTable(){
    return this.active;
  }
  

}



