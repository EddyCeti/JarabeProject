import { Component, OnInit,  ViewChild, ElementRef, ViewChildren, QueryList, Input } from '@angular/core';

import { ActivatedRoute, } from "@angular/router";
import { ProductsService } from '../services/products.service';

import { Chart } from  'chart.js';
import { TestBed } from '@angular/core/testing';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  id: number;
  sub: any;
  menu: any;




  constructor(private route: ActivatedRoute, private productsService: ProductsService) { 

    this.sub = this.route.params.subscribe( params => {
      this.id  = params["id"];
    });

    }
  ngOnInit() {
    this.menu = 'Informacion';
  }
  
  segmentChanged(ev: any) {
    console.log(this.menu);
  }

}
