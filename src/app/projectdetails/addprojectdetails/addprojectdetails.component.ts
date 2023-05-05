import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { projetdetail } from 'src/app/Models/projetdetail';
import { ProjetdetailService } from 'src/app/Services/projetdetail.service';


@Component({
  selector: 'app-addprojectdetails',
  templateUrl: './addprojectdetails.component.html',
  styleUrls: ['./addprojectdetails.component.css'],
})
export class AddprojectdetailsComponent implements OnInit {
  projetdetails: any;
  projetdetaila!: projetdetail;
  message: any;
  part1: boolean = false;

  constructor(private service: ProjetdetailService, private router: Router) {}
  close() {
    this.part1 = false;
  }
  ngOnInit(): void {
    let resp = this.service.getData();
    resp.subscribe((data) => (this.projetdetails = data));
    console.log(this.projetdetaila);
  }

  public addprojetdetail() {
    let resp = this.service
      .addprojetdetail(this.projetdetaila)
      .subscribe((data) => (this.message = 'projetdetail added'));

    this.part1 = true;
  }

  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/projectdetail/list'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
}
