import {Component, OnInit} from 'angular2/core';

import {Tema} from '../model/tema';
import {TemaService} from '../services/tema.service';

@Component({
  selector: 'lista-temas-guia',
  templateUrl: 'app/components/lista-temas-guia.component.html',
  providers:[TemaService]
})

export class ListaTemasGuiaComponent implements OnInit{

  constructor (private _temaService: TemaService) {}

  selectedTema:Tema;
  temas:Tema[];

  ngOnInit(){
    this.getTemas();
  }

  getTemas() {
    this._temaService.getTemas().then(temas => this.temas = temas);
  }
}
