import { Component, Input } from '@angular/core';
import { MovieDetailPage } from '../../pages/movie-detail/movie-detail';
import { NavController } from "ionic-angular";
import { MovieSearch } from '../../app/movie-search';

@Component({
  selector: 'movie-list',
  templateUrl: 'movie-list.html'
})
export class MovieListComponent {

  @Input() movies: MovieSearch[];

  constructor(public navCtrl: NavController) {

  }

  onSelect(movieSearch: MovieSearch) {
    this.navCtrl.push(MovieDetailPage, movieSearch);
  }

}
