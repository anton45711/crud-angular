import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';


//importar utilerias 

//Utilizar elemento para permitir trabajar con el formulario de manera reactiva.
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
//HttpClientModule permite trabajar con las interacciones de la base de datos con la API.
import{HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AgregarEmpleadoComponent,
    EditarEmpleadoComponent,
    ListarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

    //Interaccion con los elementos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
