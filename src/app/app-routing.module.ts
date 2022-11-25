import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hotel', loadChildren: () => import('./hotel/hotel.module').then(m => m.HotelModule) }, 
  { path: 'cake', loadChildren: () => import('./cake/cake.module').then(m => m.CakeModule) },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
