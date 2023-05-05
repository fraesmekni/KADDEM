import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEquipeComponent } from './detail-equipe.component';
import { UpdateDetailEquipeComponent } from './update-detail-equipe/update-detail-equipe.component';

const routes: Routes = [{ path: 'DetailEquipeadd', component: DetailEquipeComponent },
{ path: 'Edit', component: UpdateDetailEquipeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailEquipeRoutingModule { }
