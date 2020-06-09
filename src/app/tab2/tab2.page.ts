import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  txtSearch = '';
  points = ['CiberPunk', 'Spiderman', 'Tous le matins de monde'];

  constructor(private moviesSrv: MoviesService) { }

  search(ev) {
    const value = ev.detail.value;

    this.moviesSrv.getSearchMovie(value)
      .subscribe(resp => {
        console.log({ resp });

      });
  }
}
