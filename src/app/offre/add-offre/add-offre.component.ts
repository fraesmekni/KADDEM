import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/Models/Offre';
import { Partenaire } from 'src/app/Models/Partenaire';
import { OffreService } from 'src/app/Services/offre.service';
import { PartenaireService } from 'src/app/Services/partenaire.service';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {


  offre = new Offre();
  part : Partenaire[]=[]
  constructor(private offreService:OffreService,private partenaireservice:PartenaireService, private route:Router) { }

  ngOnInit(): void {

  }

  AddOffre()
  {
    this.offreService.AddOffre(this.offre).subscribe(()=>this.route.navigateByUrl("offre/mainoffre"));
  }

}
