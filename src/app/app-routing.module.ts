import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompFormComponent } from './comp/comp-form/comp-form.component';
import { CompComponent } from './comp/comp.component';
import { EmpleadosFormComponent } from './empleados/empleados-form/empleados-form.component';
import { EmpleadosComponent } from './empleados/empleados.component';

const routes: Routes = [
  {path: 'Empleados', component: EmpleadosComponent},
  {path: 'compania', component: CompComponent},
  {path: '', redirectTo:'Empleados', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
