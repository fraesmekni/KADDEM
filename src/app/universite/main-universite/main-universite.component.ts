import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Universite } from 'src/app/Models/Universite';
import { UniversiteService } from 'src/app/Services/universite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-universite',
  templateUrl: './main-universite.component.html',
  styleUrls: ['./main-universite.component.css']
})
export class MainUniversiteComponent implements OnInit {

  universite ! : Universite[];
  dat:any
  searchvalue !:string
  listsearch : Universite[]=[];
  /*listmanipulation !: Partenaire[];
  isfound !: Partenaire;
  parten !:Partenaire
  find: number=0 */
 
  refresh$ = new BehaviorSubject(null);
  list?: Observable<Universite[]>
  constructor(private UnivService:UniversiteService) { }

  ngOnInit(): void {
this.UnivService.GetAllUniversite().subscribe(
(u)=>{
  this.universite=u;
}

);
  }

  afterDeleteUniversite( e:Universite ){
    console.log(e);
    let j=this.universite.indexOf(e);
    this.universite.splice(j,1);
    Swal.fire(
      'Universite   '+e.nomUniv+  
      '   Deleted!',
      'Your file has been deleted.',
      'success'
    );

    this.list = this.refresh$.pipe(switchMap(() => this.UnivService.search(this.searchvalue)))

  }

  onsearch(){
    if ( this.searchvalue.length!=0) {
    this.UnivService.search(this.searchvalue).subscribe(
      (data) => {
        
          this.universite= data;
        
      

        

      },
      () => this.UnivService.GetAllUniversite()
    );
  }
    this.refresh$.next(null);
    }

}
