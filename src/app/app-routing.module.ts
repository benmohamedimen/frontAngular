import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidationContribuableComponent } from './validation-contribuable/validation-contribuable.component';
import { ContribuablesComponent } from './contribuables/contribuables.component';
import { DeclarationImpotsComponent } from './declarationImpots/declarationImpots.component';

import { VoirDetailsDeclarationImpotsComponent } from './voir-details-declaration-impots/voir-details-declaration-impots.component';
import { validationRoute } from './validation-contribuable/validation.route';
import { validationSubmitRoute } from './validation-contribuable/validationSubmitRoute';
export const routes: Routes = [
  { path: 'contribuables', component: ContribuablesComponent},
  { path: 'declarationImpots', component: DeclarationImpotsComponent},
  { path: 'contribuables/validation', component: ValidationContribuableComponent},
  { path: 'declarationImpots/details', component: VoirDetailsDeclarationImpotsComponent},
  { path: 'contribuables/validation/:nif',
  component: ValidationContribuableComponent},
  {
    path: 'contribuables/validation/:nif/submit',
    component: ValidationContribuableComponent
  }
 ];
const LAYOUT_ROUTES = [
   validationRoute,
   validationSubmitRoute,
   routes
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContribuablesComponent,  DeclarationImpotsComponent,
   ValidationContribuableComponent, VoirDetailsDeclarationImpotsComponent];
