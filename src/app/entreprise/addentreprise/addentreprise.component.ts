import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BubbleChartComponent } from '@swimlane/ngx-charts';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';

@Component({
  selector: 'app-addentreprise',
  templateUrl: './addentreprise.component.html',
  styleUrls: ['./addentreprise.component.css']
})
export class AddentrepriseComponent implements OnInit {
  idEntreprise:any;
  entreprises: any={};
entrepriseForm!: FormGroup;
  entreprise: Entreprise= new Entreprise("","",0,0,1);
message:any;
display: any;
hy: any;
red: any
blue : any
lht:any = 34.88378710822604;
lng:any = 9.34137398696544;
zoom: any=6
latt: any=36.24255502127699;
longg:any=9.476723745103257;
part1: boolean = false;  constructor(public service:EntrepriseService) { }
close(){
  this.part1=false;
}
getColor()
{return{
  'position': 'relative',
  'padding': '0.75rem 1.25rem'
}}
getAlert(){
  return("alert alert-warning alert-with-icon")
}

  ngOnInit(){
    let resp=this.service.getEntreprises();
    resp.subscribe((data)=>this.entreprises=data); 
    this.entrepriseForm = new FormGroup({
      'latitude': new FormControl([Validators.pattern(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/)
    ,Validators.required,Validators.min(1)]),
      'longitude': new FormControl([Validators.pattern(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/)
      ,Validators.required,Validators.min(1)]),
      'nomEntreprise': new FormControl([Validators.required,Validators.pattern(/^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$/)]),
      'locEntreprise': new FormControl(null,Validators.required),
      'place': new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]\d*$/)
,Validators.min(10)])

        }); }
  

  public AddEntreprise(){
    let resp=this.service.addEntreprise(this.entreprise);
    resp.subscribe((data)=>this.message="Entreprise Ajouté!");
    this.part1=true;
 
}

onSubmitform(){
  console.log(this.entrepriseForm);
}
}
