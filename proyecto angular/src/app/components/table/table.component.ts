import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { GraphComponent } from '../graph/graph.component';

@Component({
  providers:[GraphComponent],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  inputStock: any;

  item: any;
  active:  any;
  productos  = [];
  postData = {};

  constructor( private productsService: ProductsService, private comp: GraphComponent  ) { 
      productsService.getRequest().subscribe((data:any[]) =>  {
          this.productos  = data;
          this.productsService.setActiveTable(this.productos[this.productos.length - 1].id);
          
      });
      
   }

  

  /*
  productos = [
    {
      id: 1,
      name: 'producto 1',
     quantity: 100
    },
    {
      id: 2,
      name: 'producto 2',
      quantity: 100
    },
    {
      id: 3,
      name: 'producto 3',
      quantity: 100
    },
    {
      id: 4,
      name: 'producto 4',
      quantity: 100
    }
  ]
  historico =  [
    
    {
      name: 'producto 1',
      quantity: 23,
      date:  new Date('December 17, 2020 03:24:00')
    },
    {
      name: 'producto 2',
      quantity: 50,
      date:  new Date('December 20, 2020 03:24:00')
    },
    {
      name: 'producto 3',
      quantity: 55,
      date:  new Date('December 21, 2020 03:24:00')
    },
    {
      name: 'producto 4',
      quantity: 100,
      date:  new Date('December 22, 2020 03:24:00')
    },
    {
      name: 'producto 5',
      quantity: 100,
      date:  new Date('December 22, 2020 03:24:00')
    },
    {
      name: 'producto 6',
      quantity: 100,
      date:  new Date('December 22, 2020 03:24:00')
    },
    {
      name: 'producto 7',
      quantity: 100,
      date:  new Date('December 22, 2020 03:24:00')
    }
  ];

  */

  getItem(item:any,i:number){
    this.item =  item;
    this.active = i;
    this.productsService.setActiveTable(item);
    this.comp.ngOnInit();
    this.comp.ngAfterViewInit();
    
    }

  ngOnInit(): void {
  }

  applyChanges(){
    this.productos.forEach(element => {
      if( this.item == element.id){
        this.postData = element;
        this.postData["quantity"] =  this.postData["quantity"] + this.inputStock ;
      }
    });
    this.productsService.patchRequest(this.item, this.postData);
    this.postData =  null;
    this.postData = { quantity: this.inputStock, productoId: this.item };
    this.productsService.postStockMovements(this.item,this.postData);
    this.comp.ngOnInit();
  }

}
