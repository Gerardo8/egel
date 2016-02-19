import {Reactivo} from './reactivo';
import {Usuario} from './usuario';

export class Profesor extends Usuario{
  private reactivos: Reactivo[];

  get getReactivos(){
    return this.reactivos;
  }
  set setReativos(reactivos:Reactivo[]){
    this.reactivos = reactivos;
  }
}
