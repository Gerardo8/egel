import {Injectable}     from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';


@Injectable()
export class AutenticarService {
  constructor (private http: Http) {}

  private _autenticarUrl = '';

  autenticar() {

  }
}
