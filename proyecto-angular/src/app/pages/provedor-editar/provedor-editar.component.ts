import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvidersService } from 'src/app/services/providers.service';

@Component({
  selector: 'app-provedor-editar',
  templateUrl: './provedor-editar.component.html',
  styleUrls: ['./provedor-editar.component.css']
})
export class ProvedorEditarComponent implements OnInit {

  parentRouteId: number;

  name: string;
  RFC: string;
  tel: string;
  description: string;

  postData = {}


  constructor(  private providersService: ProvidersService, route: ActivatedRoute ) { 
      
    route.params.subscribe(params => {

      this.parentRouteId = parseInt(params['id']);
    });


    providersService.getRequest().subscribe((data:any[]) =>{
      data.forEach(element => {
        if( element.id == this.parentRouteId){
          this.name = element.name;
          this.RFC = element.RFC;
          this.tel = element.tel;
          this.description =  element.description;
        }
      });
    });


   }

  ngOnInit(): void {
  }

  editProvider(){

    console.log(this.name);
    console.log(this.RFC);
    console.log(this.tel);
    console.log(this.description);
    this.postData = {
      name: this.name,
      description: this.description,
      tel: this.tel,
      RFC: this.RFC
    }

    this.providersService.patchRequest(this.postData,this.parentRouteId);
  }

}
