import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { projetdetail } from 'src/app/Models/projetdetail';
import { ProjetdetailService } from 'src/app/Services/projetdetail.service';


@Component({
  selector: 'app-listprojectdetails',
  templateUrl: './listprojectdetails.component.html',
  styleUrls: ['./listprojectdetails.component.css'],
})
export class ListprojectdetailsComponent implements OnInit {
  projetdetails: any;
  message: any;
  projetdetail: any;
  hide: Boolean = true;

  refresh$ = new BehaviorSubject(null);
  list?: Observable<projetdetail[]>;

  projetdetailToUpdate!: projetdetail;

  constructor(
    private service: ProjetdetailService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  formgroup = this.fb.group({
    idProjetDetail: 0,
    description: [''],
    technologie: [''],
    cout_provisoire: 0,
    dateDebut: new Date(),
    dateLimite: new Date(),
  });

  get idProjetDetail() {
    return this.formgroup.get('idProjetDetail');
  }

  get description() {
    return this.formgroup.get('description');
  }
  get technologie() {
    return this.formgroup.get('technologie');
  }
  get cout_provisoire() {
    return this.formgroup.get('cout_provisoire');
  }
  get dateDebut() {
    return this.formgroup.get('dateDebut');
  }
  get dateLimite() {
    return this.formgroup.get('dateLimite');
  }

  ngOnInit(): void {
    this.list = this.refresh$.pipe(switchMap(() => this.service.getData()));
  }

  public deleteProjetdetail(idProjetdetail: any) {
    console.log(idProjetdetail);
    this.service
      .removeProjetdetail(idProjetdetail)
      .subscribe((data) => (this.projetdetails = data));
    this.refresh$.next(null);
  }

  getProjetdetail(projet: projetdetail) {
    this.projetdetailToUpdate = projet;

    this.formgroup.patchValue({
      idProjetDetail: this.projetdetailToUpdate.idProjetDetail,
      description: this.projetdetailToUpdate.description,
      technologie: this.projetdetailToUpdate.technologie,
      cout_provisoire: this.projetdetailToUpdate.cout_provisoire,
      dateDebut: this.projetdetailToUpdate.dateDebut,
      dateLimite: this.projetdetailToUpdate.dateLimite,
    });
    this.hide = false;

    console.log(this.projetdetailToUpdate);
  }

  updateProjetdetailt(f: any) {
    this.service.updateProjetdetail(f).subscribe((d) => console.log(d));
    this.refresh$.next(null);
  }

  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/projectdetail/add'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
}
