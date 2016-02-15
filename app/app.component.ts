import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {Profesor} from './profesor';
import {ListaReactivosComponent} from './lista-reactivos.component';
import {ProfesorService} from './profesor.service';

import {provide} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>EGEL</h1>
    <lista-reactivos></lista-reactivos>
    `,
    directives:[ListaReactivosComponent],
    providers: [
      HTTP_PROVIDERS,
      ProfesorService
    ]
})
export class AppComponent { }
