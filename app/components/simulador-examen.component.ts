import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {ListaTemasSimuladorComponent} from './lista-temas-simulador.component';
import {ReactivosComponent} from './reactivos.component';
import {SimuladorExamenDefaultComponent} from './simulador-examen-default.component';

@Component({
  template: '<lista-temas-simulador></lista-temas-simulador>',
  directives:[ListaTemasSimuladorComponent]
})

@RouteConfig([
  {
    path: '/',
    name: 'SimuladorExamen',
    component: SimuladorExamenDefaultComponent,
    useAsDefault: true
  },
  {
    path: '/reactivos/:area',
    name: 'Reactivos',
    component: ReactivosComponent
  }
])

export class SimuladorExamenComponent{}
