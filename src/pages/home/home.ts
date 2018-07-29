import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: any[] = [];

  constructor(
    public navCtrl: NavController,
    public movieServiceProvider: MovieServiceProvider
  ) { }

  ionViewDidLoad() {
    this.movieServiceProvider.getMovies("pala")
      .subscribe(
        (data) => { // Success
          this.movies = data['Search'];
        },
        (error) => {
          console.error(error);
        }
      )
  }

}
