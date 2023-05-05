import { Component, OnInit } from '@angular/core';
import { DetailEquipe } from 'src/app/Models/DetailEquipe';
import { DetailEquipeService } from 'src/app/Services/detail-equipe.service';

@Component({
  selector: 'app-update-detail-equipe',
  templateUrl: './update-detail-equipe.component.html',
  styleUrls: ['./update-detail-equipe.component.css']
})
export class UpdateDetailEquipeComponent implements OnInit {
  detailequipes: any;
  data:any;
  DetailequipeToUpdate: DetailEquipe= new DetailEquipe(1,"");
  p: number=1;
  detailequipe: DetailEquipe | undefined;

  constructor(private service:DetailEquipeService) { }

  ngOnInit() {let resp=this.service.GetAllDetailEquipe();
    resp.subscribe((data: any)=>this.detailequipes=data);
  }
  public deleteDetailEquipe(idDetailEquipe:number)
  { 
    let resp=this.service.deleteDetailEquipe(idDetailEquipe);
    resp.subscribe((data)=>console.log(data));
  }
  edit(detailequipe:any){
    this.DetailequipeToUpdate = detailequipe;
  }
  updateDetailEquipe()
  {let resp=this.service.UpdateDetailEquipe(this.DetailequipeToUpdate);
    resp.subscribe((data)=>this.detailequipes=data);
  
  }
}
