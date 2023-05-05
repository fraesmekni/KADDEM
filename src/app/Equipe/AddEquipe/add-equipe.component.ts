import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from 'src/app/Models/Equipe';
import { Niveau } from 'src/app/Models/Niveau';
import { EquipeService } from 'src/app/Services/equipe.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
  equipe :Equipe = new Equipe("",Niveau.JUNIOR);
  constructor(private equipeservice:EquipeService, private route:Router) { }

  ngOnInit(): void {
  }
  AddEquipe()
  {
    this.equipeservice.AddEquipe(this.equipe).subscribe(()=>this.route.navigateByUrl("equipe/addEquipe"));
  }
}
