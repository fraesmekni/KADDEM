import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:"",redirectTo:"/",pathMatch:"full"},

{path:"departement",loadChildren:()=>import("./departement/departement.module").then(m=>m.DepartementModule),
},
{path:"user",loadChildren:()=>import("./user/user.module").then(m=>m.UserModule),
},
{path:"contrat",loadChildren:()=>import("./contrat/contrat.module").then(m=>m.ContratModule),
},
{path:"entreprise",loadChildren:()=>import("./entreprise/entreprise.module").then(m=>m.EntrepriseModule),
},
{path:"professeur",loadChildren:()=>import("./professeur/professeur.module").then(m=>m.ProfesseurModule),
},
{ path: 'equipe', loadChildren: () => import('./Equipe/equipe.module').then(m => m.EquipeModule) },
{ path: 'DetailEquipe', loadChildren: () => import('./detail-equipe/detail-equipe.module').then(m => m.DetailEquipeModule) },

{ path: 'projet', loadChildren: () => import('./projet/projet-.module').then(m => m.ProjetModule) },
{ path: 'projetdetail', loadChildren: () => import('./projectdetails/projectdetails.module').then(m => m.ProjectdetailsModule) }
,{path:"offre",loadChildren:()=>import("./offre/offre.module").then(m=>m.OffreModule),},
{path:"universite",loadChildren:()=>import("./universite/universite.module").then(m=>m.UniversiteModule),}
,{path:"partenaire",loadChildren:()=>import("./partenaire/partenaire.module").then(m=>m.PartenaireModule),},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
