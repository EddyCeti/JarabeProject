import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoPageRoutingModule } from './producto-routing.module';

import { ProductoPage } from './producto.page';
import { ProductoIdComponent } from '../producto-id/producto-id.component';
import { GraficaComponent } from '../grafica/grafica.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoPageRoutingModule,
  ],
  declarations: [ProductoPage,ProductoIdComponent,GraficaComponent]
})
export class ProductoPageModule {}
