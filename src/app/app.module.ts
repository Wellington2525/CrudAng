import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadosFormComponent } from './empleados/empleados-form/empleados-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CompComponent } from './comp/comp.component';
import { CompFormComponent } from './comp/comp-form/comp-form.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadosFormComponent,
    CompComponent,
    CompFormComponent,
    MenuComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
