import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { REQUEST } from '../../request-config';

@Injectable()
export class MovieServiceProvider {
  request = REQUEST;

  constructor(private http: HttpClient) { }

  getMovies(parameter: string, searchBy: string) {
    return this.http.get(this.formatUrl(parameter, searchBy));
  }

  formatUrl(parameter: string, searchBy: string) {
    return this.request.URL + this.request.KEY + "&" + searchBy + "=" + parameter;
  }

}
