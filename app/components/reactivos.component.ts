import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Profesor} from '../model/profesor';
import {Reactivo} from '../model/reactivo';
import {Tema} from '../model/tema';
import {ProfesorService} from '../services/profesor.service';
import {ListaTemasSimuladorComponent} from './lista-temas-simulador.component';

@Component({
  templateUrl: 'app/components/reactivos.component.html'
})
export class ReactivosComponent implements OnInit {

  private area:string;
  errorMessage: string;
  respuesta:string;
  selectedOpcion:boolean;
  profesores: Profesor[];
  reactivo:Reactivo = new Reactivo();

  constructor (
    private _profesorService: ProfesorService,
    private routeParams: RouteParams) {
        this.area = ""+routeParams.get('area');
    }

  ngOnInit(){
    this.getProfesores();
  }

  getProfesores() {
    this._profesorService.getProfesores()
                     .subscribe(
                       profesores => this.profesores = profesores,
                       error =>  this.errorMessage = <any>error);
  }

  getReactivos(){
    console.log('dfsdfsd');
  }

  onSelectOpcion(acierto:boolean){
    this.respuesta = undefined;
    this.selectedOpcion = acierto;
    console.log(this.selectedOpcion);
  }

  enviar(selectedOpcion){
    if(!selectedOpcion){
      this.respuesta='Falso';
    }else{
      this.respuesta='Correcto';
    }
    console.log(selectedOpcion);
  }
}
