import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-providers-card',
  templateUrl: './providers-card.component.html',
  styleUrls: ['./providers-card.component.css']
})
export class ProvidersCardComponent implements OnInit {

  constructor( private router: Router) { }
  
  @Input() item: any = []; // decorate the property with @Input()
  hide: boolean  = false;
  imageRoute: string;

  ngOnInit(): void {
    this.imageRoute =  "http://localhost:3000/api/storages/imagesProv/download/" + this.item.id + ".png";
  }

  navigate(){  
    this.router.navigate(['/provedor-detalles',this.item.id]);
  }

}
