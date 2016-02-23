import {Component} from 'angular2/core';
import {Router} from 'angular2/router'

import {Profesor} from '../model/../model/profesor';
import {ProfesorService} from '../services/profesor.service';

@Component({
  templateUrl: 'app/components/iniciar-sesion.component.html'
})
export class IniciarSesionComponent{

  loginSinValor:boolean;
  passwordSinValor:boolean;
  errorMessage:string;

  constructor(
    private _profesorService:ProfesorService,
    private _router:Router
  ){}

  iniciarSesion(login:string,password:string){
    if (!login) {
       this.loginSinValor = true;
       return;
     }else this.loginSinValor = false;
    if (!password) {
      this.passwordSinValor = true;
      return;
    }else this.passwordSinValor = false;
       this._profesorService.autenticar(login,password)
       .subscribe(
       profesor => {
         if(profesor){
           localStorage.setItem('profesor', JSON.stringify(profesor));
           this._router.parent.navigate(['Egel']);
         }else {
           jQuery('#Modal').modal('toggle');
         };
       },
       error =>  this.errorMessage = <any>error);

  }
}
