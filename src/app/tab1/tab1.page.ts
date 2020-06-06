import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../services/movies.service';
import { Film } from '../models/models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  filmsToday: Film[] = [];

  constructor(private moviesSrv: MoviesService) { }

  ngOnInit() {
    this.moviesSrv.getFeauture()
      .subscribe(resp => {
        this.filmsToday = resp.results;
      });
  }

}
