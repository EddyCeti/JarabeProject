import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Chart } from  'chart.js';
import { DatePipe } from '@angular/common';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss'],
})
export class GraficaComponent implements OnInit {

  @Input() id: number;
  @ViewChild('barCanvas') barCanvas: ElementRef;
  @ViewChild('lineCanvas') lineCanvas: ElementRef;



  historic: any = [];
  product: any;
  bars: any;
  labels: any = [];
  data: any = [];
  colorArray: any;
  private barChart: Chart;
  private  pieChart: Chart;


  constructor(private productsService: ProductsService, public datepipe: DatePipe) { 
    
  
  }

  ngOnInit() {
    this.product = this.productsService.getTest();
    let tmp = this.productsService.getHistoric();
    tmp.forEach(element => {
      if( element.productId == this.id){
        this.historic.push(element);
      }
    });
    console.log("historico",this.historic);
    
    this.historic.forEach(element => {
      console.log("date",element);
      //let date =  this.datepipe.transform(element.date, 'dd/MM/yyyy');
      this.labels.push("date.toString()");
      this.data.push(element.quantity);
    });
   
    console.log(this.data);
  }

  ngAfterViewInit(){
    this.createBarChar();
    this.createLineChar();
  }


  createBarChar(){
    this.barChart= new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Stock',
          data: this.data,
          backgroundColor: 'rgb(63,201,11)',
          borderColor: 'rgb(63,201,11)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }); 
  }

  createLineChar(){
    this.barChart= new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Stock',
          data: this.data,
          backgroundColor: 'rgb(63,201,11)',
          borderColor: 'rgb(0,70,24)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }); 
  }

}
