import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CakeRoutingModule } from './cake-routing.module';
import { CakeComponent } from './cake.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from './shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    CakeComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    CakeRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class CakeModule { }
