import {Component, OnInit} from 'angular2/core';
import {Router,RouteConfig, RouterOutlet,ROUTER_DIRECTIVES} from 'angular2/router';

import {InicioComponent} from '../components/inicio.component';
import {GuiaComponent} from '../components/guia.component';
import {SimuladorExamenComponent} from '../components/simulador-examen.component';

@Component({
    templateUrl: 'app/components/egel.component.html',
    directives:[RouterOutlet,ROUTER_DIRECTIVES]
})

@RouteConfig([
  {
    path: '/inicio',
    name: 'Inicio',
    component: InicioComponent,
    useAsDefault:true
  },
  {
    path: '/guia',
    name: 'Guia',
    component: GuiaComponent
  },
  {
    path: '/simulador-examen/...',
    name: 'SimuladorExamen',
    component: SimuladorExamenComponent
  }
])

export class EgelComponent{

  constructor(private _router:Router){
  }
  cerrarSesion() {
    localStorage.removeItem('profesor');
    this._router.parent.navigate(['IniciarSesion']);
  }
}
