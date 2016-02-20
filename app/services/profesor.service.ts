import {Injectable}     from 'angular2/core';
import {Http,Response,Headers,RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

import {Profesor}           from '../model/profesor';

@Injectable()
export class ProfesorService {
  constructor (private http: Http) {}

  private _profesoresUrl = 'http://unitec.elasticbeanstalk.com/profesor';
  private _autenticarUrl = 'http://unitec.elasticbeanstalk.com/profesor-autenticar';

  getProfesores () {
    return this.http.get(this._profesoresUrl)
                    .map(res => <Profesor[]> res.json())
                    .catch(this.handleError);
  }

  autenticar(login: string,password:string) : Observable<Profesor>  {

    let body = JSON.stringify({ login, password });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._autenticarUrl, body, options)
                    .map(res =>  <Profesor> res.json())
                    .catch(this.handleError)
  }

  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
