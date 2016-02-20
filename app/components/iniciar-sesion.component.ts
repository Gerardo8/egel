import {Component} from 'angular2/core';
import {Router} from 'angular2/router'

import {Profesor} from '../model/../model/profesor';
import {ProfesorService} from '../services/profesor.service';

@Component({
  templateUrl: 'app/components/iniciar-sesion.component.html'
})
export class IniciarSesionComponent{

  respuesta:string;
  profesor:Profesor;
  errorMessage:string;

  constructor(
    private _profesorService:ProfesorService,
    private _router:Router
  ){}

  signIn(login:string,password:string){
    if (!login || !password) {
       console.log('no');
       return;
     }
       this._profesorService.autenticar(login,password)
       .subscribe(
       profesor => {
         this.profesor = profesor;
         if(this.profesor){
           this._router.parent.navigate(['Egel']);
         }else this.respuesta = 'Datos incorrectos';
       },
       error =>  this.errorMessage = <any>error);

  }
}
