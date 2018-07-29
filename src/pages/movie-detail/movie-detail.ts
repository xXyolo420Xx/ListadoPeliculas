import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieSearch } from '../../app/movie-search';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';
import { REQUEST } from '../../request-config';
import { MovieFull } from '../../app/movie-full';

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  request = REQUEST;
  movieSearch: MovieSearch;
  movie: MovieFull;
  mv : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieServiceProvider: MovieServiceProvider
  ) {
    this.movieSearch = navParams.data;
  }

  ionViewDidLoad() {
    this.movieServiceProvider.getMovies(this.movieSearch.imdbID, this.request.ID)
      .subscribe(
        (data) => {
          //Only way i found to cast the Object into MovieFull
          this.mv = data;
          this.movie = this.mv;
        },
        (error) => {
          console.error(error);
        }
      )
  }
}
