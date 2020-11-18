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
  product: any;
      
  constructor( private router: Router,
    private route: ActivatedRoute, productsService :ProductsService ) { 
      route.params.subscribe(
        params =>{
            this.parentRouteId = parseInt(params['id']);
        }
      );
      this.product = productsService.getProductById(this.parentRouteId);
    }

  ngOnInit(): void {
    
  }

}
