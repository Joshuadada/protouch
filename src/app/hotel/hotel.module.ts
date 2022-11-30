import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelComponent } from './hotel.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    HotelComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    SharedModule
  ]
})
export class HotelModule { }
