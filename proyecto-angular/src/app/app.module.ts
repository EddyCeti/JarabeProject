import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

import { AppRoutingModule } from './app-routing.module';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ProvidersCardComponent } from './components/providers-card/providers-card.component';
import { TableComponent } from './components/table/table.component';
import { GraphComponent } from './components/graph/graph.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ProductosComponent,
    SearchbarComponent,
    ProductCardComponent,
    ProveedoresComponent,
    InventarioComponent,
    ProvidersCardComponent,
    TableComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
