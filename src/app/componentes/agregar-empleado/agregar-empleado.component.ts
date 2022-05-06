import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service'; //importar crud service al agregar empleado
import {Router} from '@angular/router';


@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

    formularioDeempleados:FormGroup;

    constructor(
      public formulario:FormBuilder,
      private crudService:CrudService,
      private ruteador:Router
      
      ) {

        this.formularioDeempleados=this.formulario.group({
          nombre:[''],
          correo:['']
        });
    }


  ngOnInit(): void {
  }
  //cualquier información qeuse a valido lo devuelva.
  enviarDatos():any{
      console.log("Me presionaste");
      //describir si el usuario escribio el valor.
      console.log(this.formularioDeempleados.value); 
      //agrega el formularioDeempleados a un crudService
      this.crudService.AgregarEmpleado(this.formularioDeempleados.value).subscribe(respuesta=>{
        this.ruteador.navigateByUrl('/listar-empleado');
 
      });
 
     
    }
 
}
