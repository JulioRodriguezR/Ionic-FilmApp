import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../services/movies.service';
import { Film } from '../models/models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  currentMovies: Film[] = [];
  popularMovies: Film[] = [];

  constructor(private moviesSrv: MoviesService) { }

  ngOnInit() {
    this.moviesSrv.getFeauture()
      .subscribe(resp => {
        this.currentMovies = resp.results;
      });

    this.fetchPopularities();
  }

  loaderMore() {
    this.fetchPopularities();
  }

  fetchPopularities() {
    this.moviesSrv.getPopularities()
      .subscribe(resp => {
        const arrTemp = [...this.popularMovies, ...resp.results];
        this.popularMovies = arrTemp;
      });
  }

}
