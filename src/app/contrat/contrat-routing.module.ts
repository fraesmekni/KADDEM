import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontratComponent } from './addcontrat/addcontrat.component';
import { DeletecontratComponent } from './deletecontrat/deletecontrat.component';

const routes: Routes = [ 
   {path:"add",component:AddcontratComponent},
{path:"list",component:DeletecontratComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }
