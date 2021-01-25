import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';


import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ProvidersCardComponent } from './components/providers-card/providers-card.component';
import { TableComponent } from './components/table/table.component';
import { GraphComponent } from './components/graph/graph.component';
import { ProductoDetallesComponent } from './pages/producto-detalles/producto-detalles.component';
import { ProvedorDetallesComponent } from './pages/provedor-detalles/provedor-detalles.component';
import { ProductoEditarComponent } from './pages/producto-editar/producto-editar.component';
import { ProductoEliminarComponent } from './pages/producto-eliminar/producto-eliminar.component';
import { ProvedorEditarComponent } from './pages/provedor-editar/provedor-editar.component';
import { ProvedorEliminarComponent } from './pages/provedor-eliminar/provedor-eliminar.component';
import { ProvedorAgregarComponent } from './pages/provedor-agregar/provedor-agregar.component';
import { ProductoAgregarComponent } from './pages/producto-agregar/producto-agregar.component';


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
    GraphComponent,
    ProductoDetallesComponent,
    ProvedorDetallesComponent,
    ProductoEditarComponent,
    ProductoEliminarComponent,
    ProvedorEditarComponent,
    ProvedorEliminarComponent,
    ProvedorAgregarComponent,
    ProductoAgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
