import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Partenaire } from 'src/app/Models/Partenaire';
import { Universite } from 'src/app/Models/Universite';
import { PartenaireService } from 'src/app/Services/partenaire.service';
import { UniversiteService } from 'src/app/Services/universite.service';

@Component({
  selector: 'app-update-partenaire',
  templateUrl: './update-partenaire.component.html',
  styleUrls: ['./update-partenaire.component.css']
})
export class UpdatePartenaireComponent implements OnInit {

  partenaire = new Partenaire
 id:any;
 data:any
 unversite!: Universite[]
  constructor(private partenaireservice:PartenaireService , private acr:ActivatedRoute , private route:Router) { }

  ngOnInit(): void {
    this.id=this.acr.snapshot.params['id'];
  this.getpardata();
  }

  getpardata(){

    return this.partenaireservice.GetPartenaireById(this.id).subscribe(res=>{
      this.data=res;
      this.partenaire=this.data;
    }
      
      )
  }
  updateuniversity(){

    this.partenaireservice.UpdatePartenaire(this.partenaire).subscribe(res=>{

      this.getpardata()
    })
    
    this.route.navigate(['partenaire/mainpartenaire'])
  
  
    }
    backToTheList(){
      this.route.navigate(['partenaire/mainpartenaire'])
    }
    
}
