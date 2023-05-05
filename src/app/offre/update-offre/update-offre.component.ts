import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from 'src/app/Models/Offre';
import { Partenaire } from 'src/app/Models/Partenaire';
import { OffreService } from 'src/app/Services/offre.service';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.css']
})
export class UpdateOffreComponent implements OnInit {

  offre = new Offre
  id:any;
  data:any
  partenaire : Partenaire[]=[]
 
   constructor(private offreservice:OffreService , private acr:ActivatedRoute , private route:Router) { }
 
   ngOnInit(): void {
     this.id=this.acr.snapshot.params['id'];
   this.getoffredata();
   }
 
   getoffredata(){
 
     return this.offreservice.GetOffreById(this.id).subscribe(res=>{
       this.data=res;
       this.offre=this.data;
     }
       
       )
   }
   updateoffre(){
 
     this.offreservice.UpdateOffre(this.offre).subscribe(res=>{
 
       this.getoffredata()
     })
     
     this.route.navigate(['offre/mainoffre'])
   
   
     }
     backToTheList(){
       this.route.navigate(['offre/mainoffre'])
     }
     

}
