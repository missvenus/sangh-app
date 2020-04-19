import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MharashahebDetailComponent }  from './mharashaheb-detail/mharashaheb-detail.component';
import { MharashahebsComponent }      from './mharashahebs/mharashahebs.component';

import { AppRoutingModule }     from './app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MharashahebsComponent,
    MharashahebDetailComponent,
    ContactUsComponent,
    CarouselComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
