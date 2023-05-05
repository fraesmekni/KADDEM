import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { ContratModule } from './contrat/contrat.module';
import { DepartementModule } from './departement/departement.module';
import { AddcontratService } from './contrat/addcontrat.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EntrepriseModule } from './entreprise/entreprise.module';
import { AddentrepriseComponent } from './entreprise/addentreprise/addentreprise.component';
import { DeleteentrepriseComponent } from './entreprise/deleteentreprise/deleteentreprise.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core';
import { BackModule } from './back/back.module';
import { ProjetModule } from './projet/projet-.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UniversiteModule } from './universite/universite.module';
import { PartenaireModule } from './partenaire/partenaire.module';
import { Departement } from './Models/Departement';
import { ProfesseurModule } from './professeur/professeur.module';
import { DetailEquipe } from './Models/DetailEquipe';
import { Equipe } from './Models/Equipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AddentrepriseComponent,
    DeleteentrepriseComponent,
  
   
  
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdEECHzvdivYqCtd7lzvsez8CK5ElC7x0'
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   BrowserAnimationsModule,
    HomeModule,
    UserModule,
    ContratModule,
    DepartementModule,
ReactiveFormsModule,
    UniversiteModule,
    EntrepriseModule,
    NgxPaginationModule,
    ProjetModule,
    BackModule,
    ProfesseurModule,
   
  ],
  providers: [AddcontratService],
  bootstrap: [AppComponent]
})
export class AppModule { }
