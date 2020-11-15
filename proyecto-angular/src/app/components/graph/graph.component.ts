import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { }

  ngOnInit(){}

  ngAfterViewInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Producto"
		},
		data: [{
			type: "column",
			dataPoints: [
				{ y: 71, label: "15-12-2020" },
				{ y: 55, label: "16-12-2020" },
				{ y: 50, label: "17-12-2020" },
				{ y: 65, label: "18-12-2020" },
				{ y: 95, label: "19-12-2020" },
				{ y: 68, label: "20-12-2020" },
				{ y: 28, label: "21-12-2020" },
				{ y: 34, label: "22-12-2020" },
				{ y: 14, label: "23-12-2020" }
		  	]
		  }]
	  });
		
	chart.render();
  }


}
