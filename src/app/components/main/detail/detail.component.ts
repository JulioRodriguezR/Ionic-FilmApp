import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { DetailMovie, Cast } from 'src/app/models/models';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() id;
  movie: DetailMovie;
  actors: Cast[] = [];
  hidden = 100;

  slideOptActors = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  };

  constructor(private moviesSrv: MoviesService, private modalCtr: ModalController) { }

  ngOnInit() {
    this.moviesSrv.getDetailMovie(this.id)
      .subscribe(resp => {
        this.movie = resp;
      });

    this.moviesSrv.getActorsMovie(this.id)
      .subscribe(resp => {
        this.actors = resp.cast;
      });
  }

  back() {
    this.modalCtr.dismiss();
  }

  favorite() { }

}
