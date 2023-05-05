import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddentrepriseComponent } from './addentreprise/addentreprise.component';
import { DeleteentrepriseComponent } from './deleteentreprise/deleteentreprise.component';

const routes: Routes = [{path:"list",component:DeleteentrepriseComponent},
{path:"add",component:AddentrepriseComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepriseRoutingModule { }
