import { Injectable } from '@angular/core';
//import { Compañia } from './Compañia.model';
import { HttpClient } from '@angular/common/http';
import { Compañia } from './compania';

@Injectable({
  providedIn: 'root'
})
export class CompañiaService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'https://localhost:7041/api/empleado'
  readonly vistaView = 'https://localhost:7041/api/Empleado/VistaEmpleado'
  
  /// ingresar Compañia
  formData: Compañia = new Compañia(); 

//listar Compañia/
list: Compañia[];
//POST API
  postEmpleado(){
     return this.http.post(this.baseURL,this.formData);
  }
 ////update desdAPI
  putEmpleado(){
    return this.http.put(`${this.baseURL}/${this.formData.idcom}`,this.formData);
 }

 //deleteempleado
 deleteEmpleado(id:number){
  return this.http.delete(`${this.baseURL}/${id}`);
 }

  refreshList(){
this.http.get(this.vistaView)
       .toPromise()
       .then(res => this.list = res as Compañia[]);    
  }

}
