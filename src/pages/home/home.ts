import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';
import { MovieSearch } from '../../app/movie-search';
import { REQUEST } from '../../request-config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  request = REQUEST;
  searchText: string;
  movies: MovieSearch[] = [];

  constructor(
    public navCtrl: NavController,
    public movieServiceProvider: MovieServiceProvider
  ) { }

  onInput() {
    this.movieServiceProvider.getMovies(this.searchText, this.request.SEARCH)
      .subscribe(
        (data) => {
          this.movies = data['Search'];
        },
        (error) => {
          console.error(error);
        }
      )
  }
}
