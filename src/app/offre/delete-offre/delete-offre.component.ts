import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Offre } from 'src/app/Models/Offre';
import { OffreService } from 'src/app/Services/offre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-offre',
  templateUrl: './delete-offre.component.html',
  styleUrls: ['./delete-offre.component.css']
})
export class DeleteOffreComponent implements OnInit {
  @Input() offre!:Offre;
  @Output() notif=new EventEmitter<any>();

  sendnotiftoparent(offre:Offre){
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
          this.offreservice.deleteOffre(offre.idOffre).subscribe(()=>{
            console.log("good ");
            this.notif.emit(offre);
            // this.route.navigateByUrl('/fournisseur/productM');
          },
          (error )=>{
            console.log("error");
          },
          ()=>{console.log("complete");} );

        }
      })
    
  }

  constructor(private offreservice:OffreService , private route:Router , private acr:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
