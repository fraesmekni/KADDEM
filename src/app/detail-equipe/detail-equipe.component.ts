import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailEquipe } from '../Models/DetailEquipe';
import { DetailEquipeService } from '../Services/detail-equipe.service';

@Component({
  selector: 'app-detail-equipe',
  templateUrl: './detail-equipe.component.html',
  styleUrls: ['./detail-equipe.component.css']
})
export class DetailEquipeComponent implements OnInit {
  detailequipe: DetailEquipe= new DetailEquipe(1,"")
  DetailEquipeService: any;
  entreprises: any;
  detailEquipeForm: any;
  constructor(private detail_equipe:DetailEquipeService, private route:Router) { }
  message:any;
  ngOnInit(){
    let resp=this.detail_equipe.GetAllDetailEquipe();
    resp.subscribe((data:any)=>this.detailequipe=data); 
    this.detailEquipeForm = new FormGroup({
      'latitude': new FormControl([Validators.pattern(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/)
    ,Validators.required,Validators.min(1)]),
      'longitude': new FormControl([Validators.pattern(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/)
      ,Validators.required,Validators.min(1)]),
      'salle': new FormControl([Validators.required,Validators.pattern(/^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$/)]),
      'thematique': new FormControl(null,Validators.required),
  }); }
  public AddDetailEquipe(){
    let resp=this.detail_equipe.AddDetailEquipe(this.detailequipe);
    resp.subscribe((data)=>this.message="DetailEquipe Ajouté!");
    }
    onSubmitform(){
      console.log(this.detailEquipeForm);
    }

}
