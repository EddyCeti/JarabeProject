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
  products:any[];

  imageRoute: string;

  constructor( private router: Router,
    private route: ActivatedRoute, private providerService :ProvidersService) { 
      route.params.subscribe(
        params =>{
            this.parentRouteId = parseInt(params['id']);
        }
      );
      providerService.getRequest().subscribe((data:any[]) =>{
        data.forEach(element => {
          if(element.id == this.parentRouteId){
            this.provider = element;
            this.imageRoute =  "http://localhost:3000/api/storages/imagesProv/download/" + this.provider.id + ".png";
          }
        });
      });

      this.providerService.getProducts(this.parentRouteId).subscribe((data:any[]) => {
        this.products = data;
      });
  
      
    }

  ngOnInit(): void {

    
    
  }

 
}
