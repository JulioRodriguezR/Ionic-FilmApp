import { Component, OnInit } from '@angular/core';
import { Film } from '../models/models';

import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  currentFilms: Film[] = [];
  popularFilms: Film[] = [];

  constructor(private moviesSrv: MoviesService) { }

  ngOnInit() {
    this.moviesSrv.getFeauture()
      .subscribe((resp) => {
        this.currentFilms = resp.results;
      });

    this.fetchPopularities();
  }

  loaderMore() {
    this.fetchPopularities();
  }

  fetchPopularities() {
    this.moviesSrv.getPopularities()
      .subscribe((resp) => {
        const arrTemp = [...this.popularFilms, ...resp.results];
        this.popularFilms = arrTemp;
      });
  }

}
