import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';
import { NgxPaginationModule } from 'ngx-pagination/public-api';
import { Message } from 'src/app/contrat/message';
const pageSize:number = 5;

@Component({
  selector: 'app-deleteentreprise',
  templateUrl: './deleteentreprise.component.html',
  styleUrls: ['./deleteentreprise.component.css']
})
export class DeleteentrepriseComponent implements OnInit {
  entreprisesss:any
  entreprise:any
  entrepriseToUpdate: Entreprise= new Entreprise("","",12,13,1,1);
  message:any;
  entrep : Entreprise | undefined;
  keys=Object.keys(Entreprise);
  p: number=1;
  part1: boolean = false; 
  currentSelectedPage:number = 0;
  totalPages: number = 0;
  entreprises: any;
  pageIndexes: Array<number> = [];
  constructor(private service:EntrepriseService) { }
  public deleteEntreprise(idEntreprise:number)

  { console.log(idEntreprise);
    let resp=this.service.deleteEntreprise(idEntreprise);
    resp.subscribe((data)=>this.entreprisesss=data);

  }
  edit(entreprise:any){
    this.entrepriseToUpdate = entreprise;
  }
  updateentreprise()
  {let resp=this.service.UpdateEntreprise(this.entrepriseToUpdate);
    resp.subscribe((data)=>this.entreprisesss=data);
  
  }
  getPage(page: number){

    this.service.getPagableEntreprises(page, pageSize)
            .subscribe(
                (message: Message) => {
                  console.log(message);
                  this.entreprises= message.entreprises;
                  this.totalPages = message.totalPages;
                  this.pageIndexes = Array(this.totalPages).fill(0).map((x,i)=>i);
                  this.currentSelectedPage = message.pageNumber;
                },
                (error) => {
                  console.log(error);
                }
            );
  }
  ngOnInit() {
    
    this.getPage(0);

this.Entreprises();
  }
  public AddEntreprise(){
    let resp=this.service.addEntreprise(this.entreprise);
    resp.subscribe((data)=>this.message="Entreprise Ajouté!");
    this.part1=true;
}

getPaginationWithIndex(index: number) {
  this.getPage;
}
active(index: number) {
  if(this.currentSelectedPage == index ){
    return {
      active: true
    };
  } return {
    active: false
  };
}

nextClick(){
  if(this.currentSelectedPage < this.totalPages-1){
    this.getPage(++this.currentSelectedPage);
  }  
}

previousClick(){
  if(this.currentSelectedPage > 0){
    this.getPage(--this.currentSelectedPage);
  }  
}
Entreprises(){
  let resp=this.service.getEntreprises();
    resp.subscribe((data)=>this.entreprisesss=data);  
}
}
