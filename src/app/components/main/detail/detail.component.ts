import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() id;

  constructor(private moviesSrv: MoviesService) { }

  ngOnInit() {
    this.moviesSrv.getDetailMovie(this.id)
      .subscribe(resp => {
        console.log({ resp });
      });

    this.moviesSrv.getActorsMovie(this.id)
      .subscribe(resp => {
        console.log({ resp });
      });
  }

}
