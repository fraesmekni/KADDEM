import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffreRoutingModule } from './offre-routing.module';
import { UpdateOffreComponent } from './update-offre/update-offre.component';
import { MainOffreComponent } from './main-offre/main-offre.component';
import { DeleteOffreComponent } from './delete-offre/delete-offre.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { BackModule } from '../back/back.module';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    UpdateOffreComponent,
    MainOffreComponent,
    DeleteOffreComponent,
    AddOffreComponent,
  ],
  imports: [
    CommonModule,
    OffreRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BackModule,
    MatIconModule,
    MatSelectModule,
  ]
})
export class OffreModule { }
