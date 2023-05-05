import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { projet } from 'src/app/Models/projet';
import { ProjetService } from 'src/app/Services/projet.service';

@Component({
  selector: 'app-listproject',
  templateUrl: './listproject.component.html',
  styleUrls: ['./listproject.component.css'],
})
export class ListprojectComponent implements OnInit {
  projets!: projet[];
  message: any;
  projet: any;
  projetToUpdate= new projet();

  constructor(private service: ProjetService, private router: Router) {}

  ngOnInit(): void {
    this.service.listprojet().subscribe((data) => {
      this.projets = data;

      console.log(this.projets);
    });
  }

  public deleteprojet(idprojet: any) {
    console.log(idprojet);
    let resp = this.service.removeprojet(idprojet);
    resp.subscribe((data) => (this.projet = data));
  }

  getprojet(projet: any) {
    this.projetToUpdate = projet;
    console.log(this.projetToUpdate);
  }
  updateprojet() {
    console.log(this.projetToUpdate.idProjet);
    this.service
      .updateprojet(this.projetToUpdate)
      .subscribe((data) => console.log(data));
  }

  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/project/add'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
}
