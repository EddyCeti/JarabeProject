import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvidersService } from 'src/app/services/providers.service';

@Component({
  selector: 'app-provedor-eliminar',
  templateUrl: './provedor-eliminar.component.html',
  styleUrls: ['./provedor-eliminar.component.css']
})
export class ProvedorEliminarComponent implements OnInit {

  parentRouteId;

  constructor( private providersService: ProvidersService, route :  ActivatedRoute ) {
    route.params.subscribe( params => {
      this.parentRouteId =  parseInt(params["id"]);
    });
  }

  ngOnInit(): void {
  }

  delete(){
    this.providersService.deleteRequest(this.parentRouteId);
  }

}
