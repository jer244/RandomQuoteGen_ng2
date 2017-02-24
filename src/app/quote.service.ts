import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Quote } from './quote';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class QuoteService {

  constructor(private http: Http) { }

  getQuote(): Observable<any> {
    return this.http.get('https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous?mashape-key=cBT4goRBYtmshuScrTmZkdT10ME1p1Z9Lr1jsnZ0yWZGvo4mJa')
      .map((res:any) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
