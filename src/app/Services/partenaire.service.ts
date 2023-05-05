import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagePa } from '../Models/PagePa';
import { Partenaire } from '../Models/Partenaire';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {

  UnivURL="http://localhost:5001/api/authentication/PartenaireC/";

  constructor(private http:HttpClient) { }

  GetAllPartenaire(): Observable<any>{
    return this.http.get<any>(this.UnivURL)
  }
  GetPartenaireById(idU:any): Observable<Partenaire[]>{
    return this.http.get<Partenaire[]>(this.UnivURL+'retrieve-partenaire/'+idU)
  }
  deletePartenaire(idU: any){
    return this.http.delete(this.UnivURL+'deletePartenaire/'+idU);
  }
  AddPartenaire(partenaire: Partenaire){
    return this.http.post<Partenaire>(this.UnivURL+'addPartenaire',partenaire);
  }
  UpdatePartenaire(partenaire:Partenaire){
    return this.http.put<Partenaire>(this.UnivURL+'updatePartenaire',partenaire);
  
  }
  Affect(partenaire:Partenaire , id:any){
    return this.http.post<Partenaire>(this.UnivURL+'affectationPartenaireUniversite/'+id,partenaire);
  
  }
  stats(): Observable<any> {
    return this.http.get(this.UnivURL+'retrieve-all-partenaire-stats');
  }
  search(Keyword:any):  Observable<any> {
    return this.http.get(this.UnivURL+'search/'+Keyword);
  }
  getPagableCustomers(pageNumber: number, 
    pageSize: number): Observable<PagePa> {
        // Initialize Params Object
        let params = new HttpParams();

        // Begin assigning parameters
        params = params.append('page', pageNumber.toString());
        params = params.append('size', pageSize.toString());

        return this.http.get<PagePa>(this.UnivURL+ 'findAllEPaginate', { params: params })

        }

}
