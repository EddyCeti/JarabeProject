import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ProvidersCardComponent } from 'src/app/components/providers-card/providers-card.component';
import { ProvidersService } from '../../services/providers.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  provedores = [];
  searchInput: string;
  @ViewChildren(ProvidersCardComponent) childrenCard: QueryList<ProvidersCardComponent>;


  constructor( providersService :ProvidersService) { 
    providersService.getRequest().subscribe((data:any[]) => {
      this.provedores = data;
    });
  }
    
  ngOnInit(): void {
  }


  filter(){

    this.childrenCard.forEach(element => {
      const shouldShow  = element.item.name.toLowerCase().indexOf(this.searchInput.toLocaleLowerCase()) > -1;
      element.hide = shouldShow ? false : true ;      
    });
  }
}
