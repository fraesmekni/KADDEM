import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { projet } from 'src/app/Models/projet';
import { ProjetService } from 'src/app/Services/projet.service';


@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css'],
})
export class AddprojectComponent implements OnInit {
  projets: any = {};
  projeta = new projet();
  ii!:number
  message: any;
  part1: boolean = false;
  constructor(private service: ProjetService, private router: Router) {}

  close() {
    this.part1 = false;
  }
  ngOnInit(): void {
    let resp = this.service.listprojet();
    resp.subscribe((data) => (this.projets = data));
  }

  public addprojet(id: any) {
    this.service
      .addprojet(this.projeta, id)
      .subscribe((data) => (this.message = 'projet added'));

    this.part1 = true;
  }

  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/project/list'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
}
