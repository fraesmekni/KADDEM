import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from '../Models/Offre';
import { PagePa } from '../Models/PagePa';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  UnivURL="http://localhost:5001/api/authentication/OffreC/";
  constructor(private http:HttpClient) { }
  getPagableCustomers(pageNumber: number, 
    pageSize: number): Observable<PagePa> {
        // Initialize Params Object
        let params = new HttpParams();

        // Begin assigning parameters
        params = params.append('page', pageNumber.toString());
        params = params.append('size', pageSize.toString());

        return this.http.get<PagePa>(this.UnivURL+ 'findAllEPaginate', { params: params })

        }

  GetAllOffre(): Observable<any>{
    return this.http.get<any>(this.UnivURL)
  }
  GetOffreById(idU:any): Observable<Offre[]>{
    return this.http.get<Offre[]>(this.UnivURL+'retrieve-Offre/'+idU)
  }
  deleteOffre(idU: any){
    return this.http.delete(this.UnivURL+'deleteOffre/'+idU);
  }
  AddOffre(offre: Offre){
    return this.http.post<Offre>(this.UnivURL+'addOffre',offre);
  }
  UpdateOffre(offre:Offre ){
    return this.http.put<Offre>(this.UnivURL+'updateOffre',offre);
  
  }
  Affect(offre:Offre , id:any){
    return this.http.post<Offre>(this.UnivURL+'affectationOffrePartenaire/'+id,offre);
  
  }
  search(Keyword:any):  Observable<any> {
    return this.http.get(this.UnivURL+'search/'+Keyword);
  }
}
