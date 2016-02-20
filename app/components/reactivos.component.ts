import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Reactivo} from '../model/reactivo';
import {ReactivoService} from '../services/reactivo.service';

@Component({
  templateUrl: 'app/components/reactivos.component.html',
  providers:[ReactivoService]
})
export class ReactivosComponent implements OnInit {

  private area:string;
  errorMessage: string;
  respuesta:string;
  selectedOpcion:boolean;
  reactivos:Reactivo[];
  reactivo:Reactivo;

  constructor (
    private _reactivoService: ReactivoService,
    private routeParams: RouteParams) {
        this.area = ""+routeParams.get('area');
    }

  ngOnInit(){
    this.getReactivosPorTema(this.area);
  }

  getReactivosPorTema(area:string) {
    this._reactivoService.getReactivosPorTema(area)
                     .subscribe(
                       reactivos => this.reactivos = reactivos,
                       error =>  this.errorMessage = <any>error);
  }

  onSelectOpcion(acierto:boolean){
    this.selectedOpcion = acierto;
  }

  verRespuesta(){
    if(!this.selectedOpcion){
      this.respuesta='Falso';
    }else{
      this.respuesta='Correcto';
    }
  }
}
