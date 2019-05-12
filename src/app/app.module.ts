import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DocumentationsComponent } from './documentations/documentations.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

import { SeconnecterComponent } from './seconnecter/seconnecter.component';
import { HttpClientModule } from '@angular/common/http';
import { DeclarationImpotsComponent } from './declarationImpots/declarationImpots.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DocumentationsComponent,
    ContactComponent,
    ServicesComponent,
  SeconnecterComponent,
    routingComponents,
    DeclarationImpotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

