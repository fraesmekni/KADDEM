import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { projet } from '../Models/projet';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  constructor(private http: HttpClient) {}

  public addprojet(Projet: projet, idP: number) {
    console.log('hello');
    console.log(Projet);
    console.log(idP);
    let HTTPOptions: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(
      'http://localhost:8088/SpringMVC/ProjetC/addProjet/' + idP,
      Projet,
      HTTPOptions
    );
  }

  public updateprojet(projet: projet): Observable<projet> {
    return this.http.put<projet>(
      'http://localhost:8088/SpringMVC/ProjetC/updateProjet',
      projet
    );
  }

  public removeprojet(idProjet: any) {
    return this.http.delete(
      'http://localhost:8088/SpringMVC/ProjetC/deleteProjet/' + idProjet
    );
  }

  public listprojet(): Observable<projet[]> {
    return this.http.get<projet[]>(
      'http://localhost:8088/SpringMVC/ProjetC/getallProjets'
    );
  }

  public findprojetbyid(idProjet: any) {
    return this.http
      .get('http://localhost:8088/SpringMVC/ProjetC/getallProjets' + idProjet)
      .pipe(shareReplay(1));
  }
}
