import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of'

import { Cypher } from '../../models/cypher';
import { Callback } from '../../models/Callback';

@Injectable()
export class CypherProvider {

  constructor(public http: Http) {
  }

  public getChyphers()  {
    return this.http.get('http://api.numeneracypherbook.com:65224/api/cyphers')
      //.map(response => response.json() as Cypher[])
      .map(response => {
        let cyphers = new Array<Cypher>();
        response.json().forEach((c: Cypher) => {
          cyphers.push(new Cypher(c.id, c.name, c.level, c.internal, c.usable, c.wearable, c.description, c.type));
        });
        return {error: null, result: cyphers};
      })
      .catch(error => this.handleErrors(error));
  }

  private handleErrors(error: any): Observable<Callback> {
    console.log(error);
    return Observable.of({error: error, result: null});
  }

}
