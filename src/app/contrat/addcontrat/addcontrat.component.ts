import { Component, OnInit } from '@angular/core';
import { AddcontratService } from '../addcontrat.service';
import { Contrat } from '../contrat';
import { Etudiant } from '../etudiant';
import { Specialite } from '../Specialite';

@Component({
  selector: 'app-addcontrat',
  templateUrl: './addcontrat.component.html',
  styleUrls: ['./addcontrat.component.css']
})
export class AddcontratComponent implements OnInit {
  etudiant :Etudiant = new Etudiant("","");
etudiants: any;
contrat: Contrat= new Contrat(new Date(),new Date(),Specialite.CLOUD,false,"",this.etudiant,200);
message:any;
part1: boolean = false;

  constructor(private service:AddcontratService){}
  ngOnInit() {
  }
  close(){
    this.part1=false;
  }
public AddContratA(){
let resp=this.service.addContrat(this.contrat);
resp.subscribe((data)=>this.message="Contrat Ajouté!");
this.part1=true;

}

}
