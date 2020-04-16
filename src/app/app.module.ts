import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MharashahebDetailComponent }  from './mharashaheb-detail/mharashaheb-detail.component';
import { MharashahebsComponent }      from './mharashahebs/mharashahebs.component';
import { MessagesComponent }    from './messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MharashahebsComponent,
    MharashahebDetailComponent,
    MessagesComponent,
    ContactUsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
