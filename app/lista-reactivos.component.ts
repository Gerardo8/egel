import {Component, OnInit} from 'angular2/core';

import {Profesor} from './profesor';
import {ProfesorService} from './profesor.service';

@Component({
  selector: 'lista-reactivos',
  templateUrl: 'app/lista-reactivos.component.html'
})
export class ListaReactivosComponent implements OnInit {

  constructor (private _profesorService: ProfesorService) {}

  errorMessage: string;
  selectedTema:string;
  respuestaFalsa:boolean;
  selectedOpcion:boolean;
  profesores: Profesor[];
  temas:string[] = ['A1','A2','B1','B2','B3','B4',
    'C1','C2','D1','D2','D3'];

  ngOnInit(){
    this.getProfesores();
  }

  onSelectTema(tema:string) {
    this.selectedTema = tema;
  }

  onSelectOpcion(acierto:boolean){
    this.respuestaFalsa = undefined;
    this.selectedOpcion = acierto;
    console.log(this.selectedOpcion);
  }

  enviar(selectedOpcion){
    if(!selectedOpcion){
      this.respuestaFalsa=true;
    }else{
      this.respuestaFalsa=false;
    }
    console.log(selectedOpcion);

  }

  getProfesores() {
    this._profesorService.getProfesores()
                     .subscribe(
                       profesores => this.profesores = profesores,
                       error =>  this.errorMessage = <any>error);
  }

}
