import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprojectComponent } from './addproject/addproject.component';
import { ListprojectComponent } from './listproject/listproject.component';

const routes: Routes = [



  {path:"list",component:ListprojectComponent},
  {path:"add",component:AddprojectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetRoutingModule { }
