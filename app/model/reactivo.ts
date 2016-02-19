import {Opcion} from './opcion';

export class Reactivo{
  private tema: string;
  private pregunta: string;
  private retroalimentacion: string;
  private urlimagen: string;
  private opciones: Opcion[];

  get getTema(): string {
        return this.tema;
  }
  set setTema(tema: string) {
        this.tema = tema;
  }
  get getPregunta(): string {
        return this.pregunta;
  }
  set setPregunta(pregunta: string) {
        this.pregunta = pregunta;
  }
  get getRetroalimentacion():string{
    return this.retroalimentacion;
  }
  set setRetroalimentacion(retroalimentacion:string){
    this.retroalimentacion = retroalimentacion;
  }
  get getUrlimagen():string{
    return this.urlimagen;
  }
  set setUrlimagen(urlimagen:string){
    this.urlimagen = urlimagen;
  }
  get getOpciones():Opcion[]{
    return this.opciones;
  }
  set setOpciones(opciones:Opcion[]){
    this.opciones = opciones;
  }
}
