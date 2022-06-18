import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Comps } from 'src/app/shared/comp.model';
import { CompsService } from 'src/app/shared/comp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-form',
  templateUrl: './comp-form.component.html',
  styles: [
  ]
})
export class CompFormComponent implements OnInit {

  constructor(public service:CompsService,
    private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.idcomp == null)
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
    this.service.postComp().subscribe(
      res =>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('','Compañia registrado')
        console.log(res);
      },
      err =>{console.log(err); }
    );
  }



  //Update empleados
  updateRecord(form: NgForm){
    this.service.putComp().subscribe(
      res =>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('','Compañia actualizado')

      },
      err =>{console.log(err); }
    );

  }

  //delete empleado
  
  //Rseset form

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Comps();
  }

  btnSuario(){
    this.router.navigate(['./Empleados'])

  }

}
