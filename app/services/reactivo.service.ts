import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

import {Reactivo}           from '../model/reactivo';

@Injectable()
export class ReactivoService {
  constructor (private http: Http) {}

  private _reactivosUrl = 'http://unitec.elasticbeanstalk.com/examen';
  private _reactivosPorTemaUrl = 'http://unitec.elasticbeanstalk.com/profesor/';

  getReactivos () {
    return this.http.get(this._reactivosUrl)
                    .map(res => <Reactivo[]> res.json())
                    .catch(this.handleError);
  }

  getReactivosPorTema (area:string) {
    this._reactivosPorTemaUrl += area;
    return this.http.get(this._reactivosPorTemaUrl)
                    .map(res => <Reactivo[]> res.json())
                    .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
