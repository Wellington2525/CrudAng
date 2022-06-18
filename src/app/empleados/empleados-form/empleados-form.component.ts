import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empleados } from 'src/app/shared/empleados.model';
import { EmpleadosService } from 'src/app/shared/empleados.service';

@Component({
  selector: 'app-empleados-form',
  templateUrl: './empleados-form.component.html',
  styles: [
  ]
})
export class EmpleadosFormComponent implements OnInit {
//lepasamos al contructo la clas empleadoService
  constructor(public service:EmpleadosService,
    private toastr:ToastrService,private router: Router) { }

  ngOnInit(): void {
  }

  btnComps(){
    this.router.navigate(['/compania']);

  }

  onSubmit(form:NgForm){
    if(this.service.formData.idEmp == null)
    {
    this.insertEmpleado(form);
   }else{
    this.updateRecord(form);
    }

  }

  // onEditSub(form:NgForm){
  //   this.updateRecord(form);
  // }

  

  //insertDataempleados
  insertEmpleado(form:NgForm){
    this.service.postEmpleado().subscribe(
      res =>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('','Empleado registrado')
        console.log(res);
      },
      err =>{console.log(err); }
    );
  }



  //Update empleados
  updateRecord(form: NgForm){
    this.service.putEmpleado().subscribe(
      res =>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('','Empleado actualizado')

      },
      err =>{console.log(err); }
    );

  }

  //delete empleado
  
  //Rseset form

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Empleados();
  }

}
