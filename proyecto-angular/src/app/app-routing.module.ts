import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { ProductosComponent } from './pages/productos/productos.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ProductoDetallesComponent } from './pages/producto-detalles/producto-detalles.component';
import { ProvedorDetallesComponent } from './pages/provedor-detalles/provedor-detalles.component';
import { ProductoEditarComponent } from './pages/producto-editar/producto-editar.component';
import { ProductoEliminarComponent } from './pages/producto-eliminar/producto-eliminar.component';
import { ProvedorEditarComponent } from './pages/provedor-editar/provedor-editar.component';
import { ProvedorEliminarComponent } from './pages/provedor-eliminar/provedor-eliminar.component';
import { ProvedorAgregarComponent } from './pages/provedor-agregar/provedor-agregar.component';
import { ProductoAgregarComponent } from './pages/producto-agregar/producto-agregar.component';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
     path: 'producto-detalles/:id',
     component: ProductoDetallesComponent
  },
  {
    path: 'provedor-detalles/:id',
    component: ProvedorDetallesComponent
  },
  {
    path: 'producto-editar/:id',
    component: ProductoEditarComponent
  },
  {
    path: 'provedor-editar/:id',
    component: ProvedorEditarComponent
  },
  {
    path: 'producto-eliminar/:id',
    component: ProductoEliminarComponent
  },
  {
    path: 'provedor-eliminar/:id',
    component: ProvedorEliminarComponent
  },
  {
    path: 'producto-agregar',
    component: ProductoAgregarComponent
  },
  {
    path: 'provedor-agregar',
    component: ProvedorAgregarComponent
  },
  {
    path: 'proveedores',
    component: ProveedoresComponent
  },
  {
    path: 'inventario',
    component: InventarioComponent
  },
  {
    path: '**',
    redirectTo: 'productos'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
