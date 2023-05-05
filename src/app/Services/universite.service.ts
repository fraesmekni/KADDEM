import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagePa } from '../Models/PagePa';
import { Universite } from '../Models/Universite';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  UnivURL="http://localhost:5001/api/authentication/UniversiteC/";
  constructor(private http:HttpClient) { }

  GetAllUniversite(): Observable<Universite[]>{
    return this.http.get<Universite[]>(this.UnivURL)
  }
  GetUniversiteById(idU:any): Observable<Universite[]>{
    return this.http.get<Universite[]>(this.UnivURL+'UniversiteById/'+idU)
  }
  deleteuniversite(idU: any){
    return this.http.delete(this.UnivURL+'deleteUniversite/'+idU);
  }
  Adduniversite(universite: Universite){
    return this.http.post<Universite>(this.UnivURL+'addUniversite',universite);
  }
  Updateuniversite(universite: Universite){
    return this.http.put<Universite>(this.UnivURL+'updateUniversite',universite);
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
