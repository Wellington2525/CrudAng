import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Empleados } from '../shared/empleados.model';
import { EmpleadosService } from '../shared/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: [
  ]
})
export class EmpleadosComponent implements OnInit {
//lepasamos al contructo
  constructor(public service: EmpleadosService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:Empleados){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Deseas eliminar este empleado')){

    
    this.service.deleteEmpleado(id)
    .subscribe(
      res=>{
        this.toastr.error("Delete",'Empleado eliminado');
        this.service.refreshList();
      },
      err =>{console.log(err)}
    )
  }
}

}
