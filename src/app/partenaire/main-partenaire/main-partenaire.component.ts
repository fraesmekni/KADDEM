import { Component, Input, OnInit } from '@angular/core';
import { Partenaire } from 'src/app/Models/Partenaire';
import { Universite } from 'src/app/Models/Universite';
import { PartenaireService } from 'src/app/Services/partenaire.service';
import { UniversiteService } from 'src/app/Services/universite.service';
import Swal from 'sweetalert2';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PagePa } from 'src/app/Models/PagePa';


@Component({
  selector: 'app-main-partenaire',
  templateUrl: './main-partenaire.component.html',
  styleUrls: ['./main-partenaire.component.css']
})
export class MainPartenaireComponent implements OnInit {
  
;
  partenaire! :Partenaire[]
  dat:any
  searchvalue !:string
  listsearch : Partenaire[]=[];

  unversite! : Universite[]

  refresh$ = new BehaviorSubject(null);
  list?: Observable<Partenaire[]>
  partenaires:any;
  partenairess:any;
  pag:any
  page : any;
   pageSize:number = 2;
    currentSelectedPage:number = 0;
    totalPages: number = 0;
    pageIndexes: Array<number> = []

  constructor(private paretenaireService:PartenaireService, private universites:UniversiteService) { }

  ngOnInit(): void {

    this.getPage(0);
  
    
    this.paretenaireService.GetAllPartenaire().subscribe(
      (o)=>{
        this.partenaires=o;
    
      }
      
      );

     this.list = this.refresh$.pipe(switchMap(() => this.paretenaireService.search(this.searchvalue)))


  }




  afterDeleteUniversite( e:Partenaire ){
    console.log(e);
    let j=this.partenairess.indexOf(e);
    this.partenairess.splice(j,1);
    Swal.fire(
      'Universite   '+e.nomPartenaire +  
      '   Deleted!',
      'Your file has been deleted.',
      'success'
    );

   
  }


  onsearch(){
    if ( this.searchvalue.length!=0) {
    this.paretenaireService.search(this.searchvalue).subscribe(
      (data) => {
        
          this.partenairess= data;
        
      

        

      },
      () => this.paretenaireService.GetAllPartenaire()
    );
  }
    this.refresh$.next(null);
    }
  


  getPage(page: number){

    this.paretenaireService.getPagableCustomers(page, this.pageSize)
            .subscribe(
                (pag: PagePa) => {
                  console.log(pag);
                  this.partenairess = pag.partenaires;
                  this.totalPages = pag.totalPages;
                  this.pageIndexes = Array(this.totalPages).fill(0).map((x,i)=>i);
                  this.currentSelectedPage = pag.pageNumber;
                },
                (error) => {
                  console.log(error);
                }
            );
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


   Profs()
{let resp=this.paretenaireService.GetAllPartenaire();
  resp.subscribe((data)=>this.partenaires=data);

}

}
