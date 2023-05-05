import { HttpClient,HttpParams, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AddcontratComponent } from './addcontrat/addcontrat.component';
import { map } from 'rxjs';
import { IContrat, ITypePercentage } from './contrat.interface';
import { Specialite } from './Specialite';
import { Message } from './message';
@Injectable({
  providedIn: 'root'
})
export class AddcontratService {

  constructor(private http:HttpClient) { }
  getPagableCustomers(pageNumber: number, 
    pageSize: number): Observable<Message> {
// Initialize Params Object
let params = new HttpParams();

// Begin assigning parameters
params = params.append('page', pageNumber.toString());
params = params.append('size', pageSize.toString());

return this.http.get<Message>("http://localhost:5001/api/authentication"+ `/findAllEPaginate`, { params: params })

}
  public addContrat(contrat:any){
    console.log("hello");
    console.log(contrat);
    return this.http.post("http://localhost:5001/api/authentication/addContrat",contrat,{responseType:'text'as 'json'});
  }
  public getContrats(){
    return this.http.get("http://localhost:5001/api/authentication/AllContrats")
  }
  public deleteContrat(idContrat:any){
    return this.http.delete("http://localhost:5001/api/authentication/deleteContrat/"+idContrat)
  }
  public UpdateContrat(contrat:any){
    return this.http.put("http://localhost:5001/api/authentication/updateContrat",contrat)
  }
  public exportPdfContratt():Observable<Blob>
  { 
    return this.http.get('http://localhost:5001/api/authentication/export/pdf',{responseType:'blob'});}
  
  public exportExcelContratt():Observable<Blob>
  { 
    return this.http.get('http://localhost:5001/api/authentication/export/excel',{responseType:'blob'});}
  
  public getContratBySpecialite(specialite:any)
  {
    return this.http.get('http://localhost:5001/api/authentication/specialite/'+ specialite);
  }
  
    public getTypePercentage(): Observable<Array< ITypePercentage>> {
      return this.http.get('http://localhost:5001/api/authentication/chartbyspecialite')
        .pipe(map((d:any) => d));
    }
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    };
  }
 