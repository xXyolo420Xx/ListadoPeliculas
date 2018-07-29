import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchText: string;
  movies: any[] = [];

  constructor(
    public navCtrl: NavController,
    public movieServiceProvider: MovieServiceProvider
  ) { }

  onInput() {
    this.movieServiceProvider.getMovies(this.searchText)
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
