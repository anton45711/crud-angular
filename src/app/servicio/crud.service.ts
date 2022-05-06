import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs'; //observa el entorn de lo que sucede en html
import { Empleado } from './empleado';

@Injectable({
    providedIn: 'root'
})

export class CrudService {

    API: string='http://localhost/empleados/'; //API de PHP crudo
      //intercambio de informacion clientHttp 
  constructor(private clienteHttp:HttpClient) { }

    AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
        return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado);
        //utiliza la funcion para insertar los datos
  }

  ObtenerEmpleados(){
      return this.clienteHttp.get(this.API);
    }
  BorrarEmpleado(id:any):Observable<any>{
      return this.clienteHttp.get(this.API+"?borrar="+id);
      //utiliza la funcion para insertar los datos
}
  ObtenerEmpleado(id:any):Observable<any>{
      return this.clienteHttp.get(this.API+"?consultar="+id);
  //utiliza la funcion para insertar los datos
}
  EditarEmpleado(id:any,datosEmpleado:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosEmpleado);
    //utiliza la funcion para insertar los datos


}
}
