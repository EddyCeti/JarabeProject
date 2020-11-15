import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  item;
  active;
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


  getItem(item:any,i:number){
    this.item =  item;
    this.active = i;
    console.log(this.item);
  }

  ngOnInit(): void {
  }

}
