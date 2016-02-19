export class Opcion{
  private titulo:string;
  private acierto:boolean;

  get getTitulo():string{
    return this.titulo;
  }
  set setTitulo(titulo:string){
    this.titulo = titulo;
  }
  get getAcierto():boolean{
    return this.acierto;
  }
  set setAcierto(acierto:boolean){
    this.acierto = acierto;
  }
}
