import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Equipe } from '../Models/Equipe';
import { Niveau } from '../Models/Niveau';
import { EquipeService } from '../Services/equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  equipe: Equipe= new Equipe("",Niveau.EXPERT)

  constructor(private equipeservice:EquipeService, private route:Router) { }
message:any;
  ngOnInit(): void { 
  }
 // AddEquipe()
  //{
   // this.equipeservice.AddEquipe(this.equipe).subscribe(()=>this.route.navigateByUrl("equipe/addEquipe"));
 // }
 
  public AddEquipe(){
    let resp=this.equipeservice.AddEquipe(this.equipe);
    resp.subscribe((data)=>this.message="Equipe Ajouté!");
    }


}