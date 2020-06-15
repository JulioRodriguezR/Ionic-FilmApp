import { Component, OnInit } from '@angular/core';
import { DetailFilm, Genre } from '../models/models';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  films: DetailFilm[] = [];
  genres: Genre[] = [];

  constructor(
    private dataLocalSrv: DataLocalService,
    private movieSrv: MoviesService
  ) { }

  async ngOnInit() {
    this.films = await this.dataLocalSrv.loadFavorites();
    this.genres = await this.movieSrv.loadGenre();
  }

}
