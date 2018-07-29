import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { REQUEST } from '../../request-config';

@Injectable()
export class MovieServiceProvider {
  me = this;
  request = REQUEST;

  constructor(private http: HttpClient) { }

  getMovies(title: string) {
    console.log(this.formatUrl("s", "terminator"));
    return this.http.get(this.formatUrl("s", "terminator"));
  }

  formatUrl(option: string, search: string) {
    return this.request.URL + this.request.KEY + "&" + option + "=" + search;
  }

}