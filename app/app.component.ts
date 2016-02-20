import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {IniciarSesionComponent} from './components/iniciar-sesion.component';
import {EgelComponent} from './components/egel.component';
import {ProfesorService} from './services/profesor.service';

@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>',
    directives:[
      ROUTER_DIRECTIVES,
    ],
    providers:[ProfesorService]
})

@RouteConfig([
  { path: '/', redirectTo: ['IniciarSesion'] },
  {
    path: '/iniciar-sesion',
    name: 'IniciarSesion',
    component: IniciarSesionComponent
  },
  {
    path: '/...',
    name: 'Egel',
    component: EgelComponent
  }
])

export class AppComponent{}
