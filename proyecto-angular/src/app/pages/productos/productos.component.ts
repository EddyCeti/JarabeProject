import { HttpClient, } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Component, ElementRef, OnInit, Query, QueryList, ViewChildren } from '@angular/core';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})



export class ProductosComponent implements OnInit {
  

  @ViewChildren(ProductCardComponent) childrenCard: QueryList<ProductCardComponent>;
  productos: any;
  searchInput: string;
  constructor( private productsService: ProductsService, http: HttpClient) {


   }

  ngOnInit(): void {
    this.productsService.getRequest().subscribe((data: any[])  =>{
      this.productos = data;
    });
  }


  filter(){
  console.log(this.searchInput)
   this.childrenCard.forEach(element => {
      
      const shouldShow =  element.item.name.toLowerCase().indexOf(this.searchInput.toLocaleLowerCase()) > -1;
      element.hide = shouldShow ? false : true;
    });
    
  }
}
