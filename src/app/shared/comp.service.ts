import { Injectable } from '@angular/core';
//import { Comps } from './Comps.model';
import { HttpClient } from '@angular/common/http';
import { Comps } from './comp.model';

@Injectable({
  providedIn: 'root'
})
export class CompsService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'https://localhost:7041/api/Comps'
  //readonly vistaView = 'https://localhost:7041/api/Comp/VistaComps'
  
  /// ingresar Comps
  formData: Comps = new Comps(); 

//listar Comps/
list: Comps[];
//POST API
  postComp(){
     return this.http.post(this.baseURL,this.formData);
  }
 ////update desdAPI
  putComp(){
    return this.http.put(`${this.baseURL}/${this.formData.idcomp}`,this.formData);
 }

 //deleteComp
 deleteComp(id:number){
  return this.http.delete(`${this.baseURL}/${id}`);
 }

  refreshList(){
this.http.get(this.baseURL)
       .toPromise()
       .then(res => this.list = res as Comps[]);    
  }

}
