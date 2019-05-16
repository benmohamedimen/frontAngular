import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DeclarationImpotsComponent } from './declarationImpots/declarationImpots.component';
import { ValidationContribuableComponent } from './validation-contribuable/validation-contribuable.component';
import { VoirDetailsDeclarationImpotsComponent } from './voir-details-declaration-impots/voir-details-declaration-impots.component';
import { validationRoute } from './validation-contribuable/validation.route';
import { RouterModule } from '@angular/router';
import { validationSubmitRoute } from './validation-contribuable/validationSubmitRoute';
@NgModule({
  declarations: [
    AppComponent,
  routingComponents,
    DeclarationImpotsComponent,
    ValidationContribuableComponent,
    VoirDetailsDeclarationImpotsComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

