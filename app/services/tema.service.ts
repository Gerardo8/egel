import { Tema } from '../model/tema';
import { TEMAS } from '../model/temas';
import { Injectable } from 'angular2/core';

@Injectable()
export class TemaService {
  getTemas() {
    return Promise.resolve(TEMAS);
  }
}
