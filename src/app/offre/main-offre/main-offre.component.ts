import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Offre } from 'src/app/Models/Offre';
import { PagePa } from 'src/app/Models/PagePa';
import { OffreService } from 'src/app/Services/offre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-offre',
  templateUrl: './main-offre.component.html',
  styleUrls: ['./main-offre.component.css']
})
export class MainOffreComponent implements OnInit {
  offre!:Offre[]
  searchvalue !:string
  listsearch : Offre[]=[];

  refresh$ = new BehaviorSubject(null);
  list?: Observable<Offre[]>
  offres:any;
  offress:any;
  pag:any
  page : any;
   pageSize:number = 2;
    currentSelectedPage:number = 0;
    totalPages: number = 0;
    pageIndexes: Array<number> = []
  constructor(private serviceOffre:OffreService) { }

  ngOnInit(): void {


    this.getPage(0);
    this.serviceOffre.GetAllOffre().subscribe(
      (o)=>{
        this.offres=o;
        console.log(this.offre)
      }
      
      );
  }

  afterDeleteOffre( e:Offre ){
    console.log(e);
    let j=this.offress.indexOf(e);
    this.offress.splice(j,1);
    Swal.fire(
      'Offre   '+e.nomOffre+  
      '   Deleted!',
      'Your file has been deleted.',
      'success'
    );

    this.list = this.refresh$.pipe(switchMap(() => this.serviceOffre.search(this.searchvalue)))

  }

  onsearch(){
    if ( this.searchvalue.length!=0) {
    this.serviceOffre.search(this.searchvalue).subscribe(
      (data) => {
        
          this.offress= data;
        
      

        

      },
      () => this.serviceOffre.GetAllOffre()
    );
  }
    this.refresh$.next(null);
    }

    getPage(page: number){

      this.serviceOffre.getPagableCustomers(page, this.pageSize)
              .subscribe(
                  (pag: PagePa) => {
                    console.log(pag);
                    this.offress = pag.offres;
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
  
  
     Offres()
  {let resp=this.serviceOffre.GetAllOffre();
    resp.subscribe((data)=>this.offres=data);
  
  }

}
