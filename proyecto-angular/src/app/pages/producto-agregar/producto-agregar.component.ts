import { Component, OnInit } from '@angular/core';
import { ProvidersService} from '../../services/providers.service';

@Component({
  selector: 'app-producto-agregar',
  templateUrl: './producto-agregar.component.html',
  styleUrls: ['./producto-agregar.component.css']
})
export class ProductoAgregarComponent implements OnInit {
  
  provedores = [];

  constructor( providersService: ProvidersService) { 
      
      this.provedores = providersService.getProviders();
   }

  

  ngOnInit(): void {
  }

}
