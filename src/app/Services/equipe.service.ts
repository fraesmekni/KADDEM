import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../Models/Equipe';
import { PaginationEquipe } from '../Models/PaginationEquipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  getPagableCustomers(pageNumber: number, 
    pageSize: number): Observable<PaginationEquipe> {
// Initialize Params Object
let params = new HttpParams();
// Begin assigning parameters
params = params.append('page', pageNumber.toString());
params = params.append('size', pageSize.toString());
return  this.http.get<PaginationEquipe>("http://localhost:5001/api/authentication/"+'findAllEPaginate',{params:params})

}
  EqURL="http://localhost:5001/api/authentication/";
  constructor(private http:HttpClient) { }

  GetAllEquipe(): Observable<Equipe[]>{
    return this.http.get<Equipe[]>(this.EqURL+'Affichage')
  }
  GetEquipeById(idE:any): Observable<Equipe[]>{
    return this.http.get<Equipe[]>(this.EqURL+'EquipeById/'+idE)
  }
  deleteEquipe(idE: any){
    return this.http.delete(this.EqURL+'deleteEquipe/'+idE);
  }
  AddEquipe(equipe: Equipe){
    return this.http.post<Equipe>(this.EqURL+'addEquipe',equipe);
  }
  UpdateEquipe(equipe: Equipe){
    return this.http.put<Equipe>(this.EqURL+'updateEquipe',equipe);
  }
  search(Keyword:any):  Observable<any> {
    return this.http.get(this.EqURL+'search/'+Keyword);
  }
  stats(): Observable<any> {
    return this.http.get(this.EqURL+'retrieve-all-equipe-stats');
  }

  
}
