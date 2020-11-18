import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProvidersService } from '../../services/providers.service';

@Component({
  selector: 'app-provedor-detalles',
  templateUrl: './provedor-detalles.component.html',
  styleUrls: ['./provedor-detalles.component.css']
})
export class ProvedorDetallesComponent implements OnInit {
  parentRouteId:number;
  provider:any;
  constructor( private router: Router,
    private route: ActivatedRoute, providerService :ProvidersService ) { 
      route.params.subscribe(
        params =>{
            this.parentRouteId = parseInt(params['id']);
        }
      );
      this.provider = providerService.getProviderById(this.parentRouteId);
    }

  ngOnInit(): void {
  }

}
