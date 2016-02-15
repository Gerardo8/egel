import {Reactivo} from './reactivo';

export class Profesor{
  id: string;
  login: string;
  password: string;
  nombre: string;
  paterno: string;
  email: string;
  autoridad: string;
  reactivos: Reactivo[];
}
