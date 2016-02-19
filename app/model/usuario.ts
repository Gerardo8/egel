export class Usuario{
  private id: string;
  private login: string;
  private password: string;
  private nombre: string;
  private paterno: string;
  private email: string;
  private autoridad: string;

  get getId(): string {
        return this.id;
  }
  set setId(id: string) {
        this.id = id;
  }
  get getLogin(): string {
        return this.login;
  }
  set setLogin(login: string) {
        this.login = login;
  }
  get getPassword():string{
    return this.password;
  }
  set setPassword(password:string){
    this.password = password;
  }
  get getNombre():string{
    return this.nombre;
  }
  set setNombre(nombre:string){
    this.nombre = nombre;
  }
  get getPaterno():string{
    return this.paterno;
  }
  set setPaterno(paterno:string){
    this.paterno = paterno;
  }
  get getEmail():string{
    return this.email;
  }
  set setEmail(email:string){
    this.email = email;
  }
  get getAutoridad():string{
    return this.autoridad;
  }
  set setAutoridad(autoridad:string){
    this.autoridad = autoridad;
  }

}
