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
  formData: VistaEmpleados = new VistaEmpleados(); 
 

//listar empleados/

ListC: VistaEmpleados[];


  refreshList(){
this.http.get(this.vistaView)
       .toPromise()
       .then(res => this.ListC = res as VistaEmpleados[]);    
  }

}
