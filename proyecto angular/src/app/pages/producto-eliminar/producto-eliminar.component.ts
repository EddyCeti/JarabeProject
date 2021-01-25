
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProvidersService } from '../../services/providers.service';


@Component({
  selector: 'app-producto-eliminar',
  templateUrl: './producto-eliminar.component.html',
  styleUrls: ['./producto-eliminar.component.css']
})
export class ProductoEliminarComponent implements OnInit {


  parentRouteId:number;
  provider:any;

  constructor( private router: Router,
    private route: ActivatedRoute, providerService :ProvidersService ,private productsService: ProductsService) { 
      route.params.subscribe(
        params =>{
            this.parentRouteId = parseInt(params['id']);
        }
      );
      this.provider = providerService.getProviderById(this.parentRouteId);
  }

  ngOnInit(): void {
    console.log(this.parentRouteId);
  }

  delete(){
    this.productsService.deleteProviders(this.parentRouteId);
    this.productsService.deleleteRequest(this.parentRouteId);  
    this.productsService.deleteStorage(this.parentRouteId.toString());
  }
}
