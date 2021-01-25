import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-producto-detalles',
  templateUrl: './producto-detalles.component.html',
  styleUrls: ['./producto-detalles.component.css']
})
export class ProductoDetallesComponent implements OnInit {
  parentRouteId: number;
  providers: any[];
  product: any;
  imageRoute: string;
  constructor( private router: Router,
    private route: ActivatedRoute, private productsService :ProductsService ) { 
      route.params.subscribe(
        params =>{
            this.parentRouteId = parseInt(params['id']);
        }
      );
    }

  ngOnInit(): void {
    this.productsService.getRequest().subscribe((data: any[])  =>{
        data.forEach(element => {
        if (element["id"] == this.parentRouteId)
        this.product = element;  
      });

    });

    this.productsService.getProviders(this.parentRouteId).subscribe((data:any[]) => {
      this.providers = data;
    });
    this.imageRoute = 'http://localhost:3000/api/storages/images/download/' + this.parentRouteId +  '.jpg';    
  }

}
