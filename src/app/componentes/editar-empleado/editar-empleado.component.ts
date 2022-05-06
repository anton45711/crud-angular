import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service'; //importar crud service al agregar empleado


import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  formularioDeempleados:FormGroup;
    elID:any;

  constructor(
    private ActivateRoute:ActivatedRoute, //recuperar adentro del constructor modificar id
    private crudService:CrudService,
    public formulario:FormBuilder,
    private ruteador:Router

      ){

        this.elID=this.ActivateRoute.snapshot.paramMap.get('id');//recepciona el id
           console.log(this.elID);//imprime el id en consola
         this.crudService.ObtenerEmpleado(this.elID).subscribe(
              respuesta=>{
                console.log(respuesta);
                this.formularioDeempleados.setValue({
                  nombre:respuesta[0]['nombre'],
                  correo:respuesta[0]['correo']
                })
              }
        );
        this.formularioDeempleados=this.formulario.group(
          {
            nombre:[''],
            correo:['']
          }
        );
      }

  ngOnInit(): void {
  }
  enviarDatos():any{
      console.log(this.elID);
      console.log(this.formularioDeempleados.value);
      this.crudService.EditarEmpleado(this.elID,this.formularioDeempleados.value).subscribe(()=>{ //verifica si realmente se actualizo

        this.ruteador.navigateByUrl('/listar-empleado');
 
      });
    }
}
