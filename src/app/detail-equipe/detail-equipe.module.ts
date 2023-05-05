import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailEquipeRoutingModule } from './detail-equipe-routing.module';
import { DetailEquipeComponent } from './detail-equipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateDetailEquipeComponent } from './update-detail-equipe/update-detail-equipe.component';


@NgModule({
  declarations: [
    DetailEquipeComponent,
    UpdateDetailEquipeComponent,
    
  ],
  imports: [
    CommonModule,
    DetailEquipeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DetailEquipeModule { }
