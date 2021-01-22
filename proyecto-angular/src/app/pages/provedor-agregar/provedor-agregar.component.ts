import { Component, OnInit } from '@angular/core';
import { ProvidersService } from 'src/app/services/providers.service';

@Component({
  selector: 'app-provedor-agregar',
  templateUrl: './provedor-agregar.component.html',
  styleUrls: ['./provedor-agregar.component.css']
})
export class ProvedorAgregarComponent implements OnInit {

 

  name: string;
  RFC: string;
  tel: string;
  description: string;
  postData = {}

  imgInput: File = null;


  constructor( private providersService: ProvidersService) { 
      
      
      
   }

  ngOnInit(): void {
  }

  createProvider(){

  this.providersService.getRequest().subscribe((data:any[])  => {
    let  id;
    id = data[data.length-1].id + 1;

    this.providersService.postStorage(this.imgInput, id);

  });
  
    

    this.postData = {
      name: this.name,
      description: this.description,
      tel: this.tel,
      RFC: this.RFC
    }

    this.providersService.postRequest( this.postData );

  }


  fileSelected(event){
    this.imgInput = event.item(0);
  }

}
