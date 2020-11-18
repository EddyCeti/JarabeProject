import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../services/providers.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  provedores = [];
  constructor( providersService :ProvidersService) { 
    this.provedores = providersService.getProviders();
  }
    
  ngOnInit(): void {
  }

}
