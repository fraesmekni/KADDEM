import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Equipe } from 'src/app/Models/Equipe';
import { EquipeService } from 'src/app/Services/equipe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-input-output-equipe',
  templateUrl: './input-output-equipe.component.html',
  styleUrls: ['./input-output-equipe.component.css']
})
export class InputOutputEquipeComponent {
  idEquipe:any;
  @Input() EquipeInput!:Equipe;
    @Output() notif=new EventEmitter<any>();
    sendnotiftoparent(EquipeInput:Equipe){
      console.log(EquipeInput);
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
          console.log(EquipeInput.idEquipe);
  
          this.service.deleteEquipe(EquipeInput.idEquipe).subscribe(()=>{
            this.notif.emit(EquipeInput);
            // this.route.navigateByUrl('/fzffzfz/zfzfz');
          },
          (error:any )=>{
            console.log("error");
          },
          ()=>{console.log("complete");} );
  
        }
      })
    
  }
  
  constructor(private service:EquipeService , private route:Router , private acr:ActivatedRoute) { }
  
  ngOnInit(): void {
  }
  
  }
  
  
  