import { Component, OnInit } from '@angular/core';
import { AddcontratService } from '../addcontrat.service';
import { AddcontratComponent } from '../addcontrat/addcontrat.component';
import { Contrat } from '../contrat';
import { Etudiant } from '../etudiant';
import { Specialite } from '../Specialite';
import { Message } from '../message';
const pageSize:number = 5;
const page:number = 5;
import Swal from 'sweetalert2';


@Component({
  selector: 'app-deletecontrat',
  templateUrl: './deletecontrat.component.html',
  styleUrls: ['./deletecontrat.component.css']
})
export class DeletecontratComponent implements OnInit {
  contratsss:any
 etudiantC:any
 message:any
 contrat:any
 SingleDataSet:any
 page : any;
 single :any;
 p: number=1;

 contratInput!:Contrat[];

 currentSelectedPage:number = 0;
  totalPages: number = 0;
  contrats: any;
  pageIndexes: Array<number> = [];
 etudiant :Etudiant = new Etudiant("","");
 contratToUpdate: Contrat= new Contrat(new Date(),new Date(),Specialite.CLOUD,false,"",this.etudiant,200);
 specialite: string="";

  constructor(private service:AddcontratService) { }
  
  public deleteContrat(idContrat:number)

  { console.log(idContrat);
    let resp=this.service.deleteContrat(idContrat);
    resp.subscribe((data)=>this.contratsss=data);
  }
  getPage(page: number){

    this.service.getPagableCustomers(page, pageSize)
            .subscribe(
                (message: Message) => {
                  console.log(message);
                  this.contrats = message.contrats;
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
    this.getPage(1);

this.Contrats(); }

edit(contrat:any){
  this.contratToUpdate = contrat;
}
updateContrat()
{let resp=this.service.UpdateContrat(this.contratToUpdate);
  resp.subscribe((data)=>this.contratsss=data);

}
exportProductsPdf()
 { this.service.exportPdfContratt().subscribe(x =>
  { const blob = new Blob([x], {type: 'application/pdf'}); 
if (window.navigator && (window.navigator as any).msSaveOrOpenBlob)
 { (window.navigator as any).msSaveOrOpenBlob(blob);
   return; }
const data = window.URL.createObjectURL(blob); 
const link =document.createElement('a');
 link.href=data;
 console.log(data);
link.download ='Contrats.pdf';
 link.dispatchEvent( new MouseEvent('click', {bubbles: true, cancelable:true, view: window})); 
setTimeout(function() {
  window.URL.revokeObjectURL(data);
   link.remove(); 
} ,100);

}); }
o(){
  {
    this.service. getTypePercentage()
      .subscribe(data => {
        console.log(data);
        this.single = data.map(datum => ({ name: datum.type, value: datum.count }));
    });
  }
}
exportContratExcel()
 { this.service.exportExcelContratt().subscribe(x =>
  { const blob = new Blob([x], {type: 'application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}); 
if (window.navigator && (window.navigator as any).msSaveOrOpenBlob)
 { (window.navigator as any).msSaveOrOpenBlob(blob);
   return; }
const data = window.URL.createObjectURL(blob); 
const link =document.createElement('a');
 link.href=data;
link.download ='Contrats.xlsx';
 link.dispatchEvent( new MouseEvent('click', {bubbles: true, cancelable:true, view: window})); 
setTimeout(function() {
  window.URL.revokeObjectURL(data);
   link.remove(); 
} ,100);

}); }


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
public findContratBySpecialite()
{
  let resp= this.service.getContratBySpecialite(this.specialite);
  resp.subscribe((data)=>this.contrats=data)
}
Contrats()
{let resp=this.service.getContrats();
  resp.subscribe((data)=>this.contratInput);

}
afterDeleteContrat( o:Contrat ){
  Swal.fire(
    'Offre   '+o.idContrat+  
    '   Deleted!',
    'Your file has been deleted.',
    'success'
  ); 
this.Contrats();
  let j=this.contratInput.indexOf(o);
  this.contratInput.splice(j,1);
  
  }
}
