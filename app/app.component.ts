import {Component, OnInit} from 'angular2/core';
import {NgSwitch, NgSwitchWhen} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {InicioComponent} from '././components/inicio.component';
import {GuiaComponent} from '././components/guia.component';
import {SimuladorExamenComponent} from '././components/simulador-examen.component';

import {ProfesorService} from './services/profesor.service';
import {TemaService} from './services/tema.service';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives:[
      ROUTER_DIRECTIVES,
      NgSwitch,
      NgSwitchWhen
    ],
    providers: [
      HTTP_PROVIDERS,
      ProfesorService,
      TemaService
    ]
})

@RouteConfig([
  {
    path: '/inicio',
    name: 'Inicio',
    component: InicioComponent,
    useAsDefault: true
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

export class AppComponent{}
