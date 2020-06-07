import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { DetailMovie } from 'src/app/models/models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() id;
  movie: DetailMovie;
  hidden = 100;

  constructor(private moviesSrv: MoviesService) { }

  ngOnInit() {
    this.moviesSrv.getDetailMovie(this.id)
      .subscribe(resp => {
        console.log({ resp });
        this.movie = resp;
      });

    this.moviesSrv.getActorsMovie(this.id)
      .subscribe(resp => {
        console.log({ resp });
      });
  }

}
