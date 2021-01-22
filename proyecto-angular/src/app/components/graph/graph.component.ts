import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { TableComponent } from '../table/table.component';
import * as CanvasJS from './canvasjs.min';
import { from } from 'rxjs';
import { ActionSequence } from 'protractor';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})


export class GraphComponent implements OnInit {

	active: number;
	dataPoints:  any;
	chart: CanvasJS.Chart;


  constructor( private productsService:  ProductsService ) {
	
   }

  ngOnInit(){
	this.active  =  this.productsService.getActiveTable();
	this.dataPoints  = [];
	if(  this.active  ==  0  ){
		this.dataPoints  =  [
			{ y: 71, label: "15-12-2020" },
			{ y: 55, label: "16-12-2020" },
			{ y: 50, label: "17-12-2020" },
			{ y: 65, label: "18-12-2020" },
			{ y: 95, label: "19-12-2020" },
			{ y: 68, label: "20-12-2020" },
			{ y: 28, label: "21-12-2020" },
			{ y: 34, label: "22-12-2020" },
			{ y: 14, label: "23-12-2020" }
		  ];
	}else{
		this.productsService.getStockMovementsbyId(this.active).subscribe((JSON:any) =>{
			JSON.forEach(element => {
				this.dataPoints.push( { y: element.quantity, label:  element.date });
			});
		  }, error =>{
			console.log(error);
		});	
		
	}


  }

  ngAfterViewInit() {

	console.log('chart');
		this.chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text:  "Movimientos Producto: " + this.active.toString(),
		},
		data: [{
			type: "column",
			dataPoints: this.dataPoints
		  }],
	  });
		
	this.chart.render();
		
  }

  updateConsole(){

	console.log(this.dataPoints);
	console.log(this.active);
	this.dataPoints  =  [

		{label :  'product  1' ,  y: 22},
		{label : 'product  2'  ,  y: 23}

	]
  }


  
}
