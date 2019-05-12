import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinscrireComponent } from './sinscrire/sinscrire.component';
import { ContribuablesComponent } from './contribuables/contribuables.component';
import { DeclarationImpotsComponent } from './declarationImpots/declarationImpots.component';
export const routes: Routes = [
  { path: 'contribuables', component: ContribuablesComponent},
  { path: 'declarationImpots', component: DeclarationImpotsComponent},
  { path: 'sinscrire', component: SinscrireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContribuablesComponent, SinscrireComponent, DeclarationImpotsComponent];
