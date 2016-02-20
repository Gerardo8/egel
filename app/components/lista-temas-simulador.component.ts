import {Component, OnInit} from 'angular2/core';
import {Router, RouterOutlet} from 'angular2/router';

import {Tema} from '../model/tema';
import {TemaService} from '../services/tema.service';

@Component({
  selector: 'lista-temas-simulador',
  templateUrl: 'app/components/lista-temas-simulador.component.html',
  directives:[RouterOutlet],
  providers:[TemaService]
})


export class ListaTemasSimuladorComponent implements OnInit {

  constructor (
    private _temaService: TemaService,
    private _router: Router
  ) {}

  selectedTema:Tema;
  temas:Tema[];

  ngOnInit(){
    this.getTemas();
  }

  getTemas() {
    this._temaService.getTemas().then(temas => this.temas = temas);
  }

  onSelectTema(tema:Tema) {
    this.selectedTema = tema;
    this._router.navigate(['Reactivos', { area: this.selectedTema.area }]);
  }
}
