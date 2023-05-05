import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { EquipeComponent } from './equipe.component';
import { UpdateEquipeComponent } from './UpdateEquipe/update-equipe.component';

const routes: Routes = [{ path: 'update', component: UpdateEquipeComponent },
{path: 'addEquipe', component: EquipeComponent},
{path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
