import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MainShowcaseService {
  constructor(private http: Http) {}

  getGoods(): Observable<any> {
    const url = `http://localhost:3030/pizzas`;
    const headers = new Headers();
    headers.append('Allow', '*');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http
      .get( url, { headers } )
      .map( res => res.json() );
  }
}