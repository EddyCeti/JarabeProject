import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  
  constructor( private router: Router) { }
  
  

  @Input() item: any = []; // decorate the property with @Input()
  imageRoute: string;
  hide: boolean = false;
  ngOnInit(): void {
    this.imageRoute ='http://localhost:3000/api/storages/images/download/' + this.item.id +  '.jpg';
  }
  
  navigate(){  
    this.router.navigate(['/producto-detalles',this.item.id]);
  }
 
}
