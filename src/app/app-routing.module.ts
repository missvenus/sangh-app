import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { MharashahebsComponent }      from './mharashahebs/mharashahebs.component';
import { MharashahebDetailComponent }  from './mharashaheb-detail/mharashaheb-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MharashahebDetailComponent },
  { path: 'mharashahebs', component: MharashahebsComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
