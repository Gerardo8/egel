import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

import {Profesor}           from './profesor';

@Injectable()
export class ProfesorService {
  constructor (private http: Http) {}

  private _profesoresUrl = 'http://unitec.elasticbeanstalk.com/profesor';

  getProfesores () {
    return this.http.get(this._profesoresUrl)
                    .map(res => <Profesor[]> res.json())
                    .catch(this.handleError);
  }

  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
