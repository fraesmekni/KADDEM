import { Component, Input, OnInit } from '@angular/core';
import { Niveau } from 'src/app/Models/Niveau';

import { EquipeService } from 'src/app/Services/equipe.service';
import { Equipe } from 'src/app/Models/Equipe';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable, switchMap } from 'rxjs';
import Swal from 'sweetalert2';
import { PaginationEquipe } from 'src/app/Models/PaginationEquipe';
const pageSize: number=5;
@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {
  equipes: any;
  page : any;
  currentSelectedPage:number = 0;
  totalPages: number = 0;
  pageIndexes: Array<number> = [];
  data:any;
  EquipeInput!:Equipe;
  equipeToUpdate: Equipe= new Equipe("",Niveau.JUNIOR);
  p: number=1;
  equipe:Equipe | undefined;
  searchvalue !:string
  listsearch : Equipe[]=[];
  refresh$ = new BehaviorSubject(null);
  list?: Observable<Equipe[]>
  constructor(private service:EquipeService) { }

  ngOnInit() {
  this.getPage(1);
  this.Equipes;
  }
  public deleteEquipe(idEquipe:number)
  { 
    let resp=this.service.deleteEquipe(idEquipe);
    resp.subscribe((data)=>this.equipes=data);
  }
  edit(equipe:any){
    this.equipeToUpdate = equipe;
  }
  Equipes()
  {
    let resp=this.service.GetAllEquipe();
resp.subscribe((data)=>this.EquipeInput);
  }
  getPage(page: number){

    this.service.getPagableCustomers(page, pageSize)
            .subscribe(
                (message: PaginationEquipe) => {
                  console.log(message);
                  this.equipes = message.equipes;
                  this.totalPages = message.totalPages;
                  this.pageIndexes = Array(this.totalPages).fill(0).map((x,i)=>i);
                  this.currentSelectedPage = message.pageNumber;
                },
                (error) => {
                  console.log(error);
                }
            );
  }
  
  updateEquipe()
  {let resp=this.service.UpdateEquipe(this.equipeToUpdate);
    resp.subscribe((data)=>this.equipes=data);
  
  }
    onsearch(){
      if ( this.searchvalue.length!=0) {
      this.service.search(this.searchvalue).subscribe(
        (data) => {
          
            this.equipes= data;
        },
        () => this.service.GetAllEquipe
      );
    }
      this.refresh$.next(null);
      }



      afterDeleteEquipe( equipe:Equipe ){
        Swal.fire(
          'NomEquipe   '+equipe.idEquipe+  
          '   Deleted!',
          'Your file has been deleted.',
          'success'
        ); 
      this.equipes();
        let j=this.EquipeInput;
        this.EquipeInput;
        
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
}
