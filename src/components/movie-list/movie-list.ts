import { Component, Input } from '@angular/core';
import { MovieDetailPage } from '../../pages/movie-detail/movie-detail';
import { NavController } from "ionic-angular";
import { MovieSearch } from '../../app/movie-search';

import { MovieServiceProvider } from '../../providers/movie-service/movie-service';
import { REQUEST } from '../../request-config';

@Component({
  selector: 'movie-list',
  templateUrl: 'movie-list.html'
})
export class MovieListComponent {

  @Input() movies: MovieSearch[];

  request = REQUEST;
  searchText: string;
  releaseYear: number;

  constructor(
    public navCtrl: NavController,
    public movieServiceProvider: MovieServiceProvider) {
  }

  onSelect(movieSearch: MovieSearch) {
    this.navCtrl.push(MovieDetailPage, movieSearch);
  }

  onInput() {
    this.movieServiceProvider.getMovies(this.searchText, this.request.SEARCH, this.releaseYear)
      .subscribe(
        (data) => {
          this.movies = data['Search'];
        },
        (error) => {
          console.error(error);
        }
      )
  }

  onYearChange() {
    debugger;
    this.movieServiceProvider.getMovies(this.searchText, this.request.SEARCH, this.releaseYear)
      .subscribe(
        (data) => {
          this.movies = data['Search'];
        },
        (error) => {
          console.error(error);
        }
      )
  }

  customPickerOption = {
    buttons: [{
      text: 'Clear',
      handler: () => this.releaseYear = null
    }]
  }
}
