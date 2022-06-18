import { Injectable } from '@angular/core';
//import { Empleados } from './empleados.model';
import { HttpClient } from '@angular/common/http';
import { Empleados } from './empleados.model';
import {VistaEmpleados} from './Vista.modelo';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'https://localhost:7041/api/empleado'
  readonly vistaView = 'https://localhost:7041/api/Empleado/VistaEmpleado'
  
  /// ingresar empleados
  formData: Empleados = new Empleados(); 
 

//listar empleados/
list: Empleados[];
ListC: VistaEmpleados[];
//POST API
  postEmpleado(){
     return this.http.post(this.baseURL,this.formData);
  }
 ////update desdAPI
  putEmpleado(){
    return this.http.put(`${this.baseURL}/${this.formData.idEmp}`,this.formData);
 }

 //deleteempleado
 deleteEmpleado(id:number){
  return this.http.delete(`${this.baseURL}/${id}`);
 }

  refreshList(){
this.http.get(this.vistaView)
       .toPromise()
       .then(res => this.list = res as Empleados[]);    
  }

}
