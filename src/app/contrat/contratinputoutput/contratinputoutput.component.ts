import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddcontratService } from '../addcontrat.service';
import { Contrat } from '../contrat';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contratinputoutput',
  templateUrl: './contratinputoutput.component.html',
  styleUrls: ['./contratinputoutput.component.css']
})
export class ContratinputoutputComponent  implements OnInit{
  idContrat:any;
  @Input() contratInput!:Contrat;
    @Output() notif=new EventEmitter<any>();
    sendnotiftoparent(contratInput:Contrat){
      console.log(contratInput);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(contratInput.idContrat);
  
          this.service.deleteContrat(contratInput.idContrat).subscribe(()=>{
            this.notif.emit(contratInput);
            // this.route.navigateByUrl('/fournisseur/productM');
          },
          (error )=>{
            console.log("error");
          },
          ()=>{console.log("complete");} );
  
        }
      })
    
  }
  
  constructor(private service:AddcontratService , private route:Router , private acr:ActivatedRoute) { }
  
  ngOnInit(): void {
  }
  
  }
  
  
  