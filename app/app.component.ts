import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {IniciarSesionComponent} from './components/iniciar-sesion.component';
import {EgelComponent} from './components/egel.component';
import {ProfesorService} from './services/profesor.service';
import {CustomRouterOutlet} from './custom-router-outlet.component';

@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>',
    directives:[
      ROUTER_DIRECTIVES,
      CustomRouterOutlet
    ],
    providers:[ProfesorService]
})

@RouteConfig([
  { path: '/', redirectTo: ['Egel'] },
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
