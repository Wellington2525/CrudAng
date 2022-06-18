import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Comps } from '../shared/comp.model';
import { CompsService } from '../shared/comp.service'

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styles: [
  ]
})
export class CompComponent implements OnInit {

  constructor(public service: CompsService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:Comps){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Deseas eliminar este empleado')){

    
    this.service.deleteComp(id)
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
