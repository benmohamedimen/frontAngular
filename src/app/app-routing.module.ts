import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinscrireComponent } from './sinscrire/sinscrire.component';
import { ContribuablesComponent } from './contribuables/contribuables.component';
export const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
