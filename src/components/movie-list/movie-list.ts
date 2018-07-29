import { Component, Input } from '@angular/core';

/**
 * Generated class for the MovieListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movie-list',
  templateUrl: 'movie-list.html'
})
export class MovieListComponent {

  @Input() movies: any[];

  constructor() {
  }


}
