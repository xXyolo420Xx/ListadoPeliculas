import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { REQUEST } from '../../request-config';

@Injectable()
export class MovieServiceProvider {
  request = REQUEST;
  fullUrl: string;

  constructor(private http: HttpClient) { }

  getMovies(parameter: string, searchBy: string, releaseYear: number) {
    return this.http.get(this.formatUrl(parameter, searchBy, releaseYear));
  }

  formatUrl(parameter: string, searchBy: string, releaseYear: number) {
    this.fullUrl = this.request.URL + this.request.KEY + "&" + searchBy + "=" + parameter;
    if (releaseYear) this.fullUrl += '&' + this.request.YEAR + '=' + releaseYear;
    debugger;
    return this.fullUrl;
  }

}
