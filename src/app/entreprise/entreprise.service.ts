import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Entreprise } from './entreprise';
import { Message } from '../contrat/message';
@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http:HttpClient) { }
  getPagableEntreprises(pageNumber: number, 
    pageSize: number): Observable<Message> {
// Initialize Params Object
let params = new HttpParams();
// Begin assigning parameters
params = params.append('page', pageNumber.toString());
params = params.append('size', pageSize.toString());

return this.http.get<Message>("http://localhost:5001/api/authentication"+ `/findAllEnPaginate`, { params: params })

}
  entreprises: any={};
  public addEntreprise(Entreprise:any){
    return this.http.post("http://localhost:5001/api/authentication/addEntreprise",Entreprise,{responseType:'text'as 'json'});
  }
  public getEntreprises(){
    return this.http.get("http://localhost:5001/api/authentication/AllEntreprises")
  }
  public deleteEntreprise(idEntreprise:any){
    return this.http.delete("http://localhost:5001/api/authentication/deleteEntreprise/"+idEntreprise)
  }
  public UpdateEntreprise(entreprise:any){
    return this.http.put("http://localhost:5001/api/authentication/updateEntreprise",entreprise)
  }
  public distance(Entreprise:any){
    return this.http.post("http://localhost:5001/api/authentication/distance",Entreprise,{responseType:'text'as 'json'});
  }
 
}
