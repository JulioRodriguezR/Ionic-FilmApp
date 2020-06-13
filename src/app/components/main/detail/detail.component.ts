import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, DetailFilm } from 'src/app/models/models';
import { DataLocalService } from 'src/app/services/data-local.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() id;
  film: DetailFilm;
  actors: Cast[] = [];
  hidden = 100;
  startOutline = false;

  slideOptActors = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  };

  constructor(
    private moviesSrv: MoviesService,
    private modalCtr: ModalController,
    private dataLocal: DataLocalService
  ) { }

  async ngOnInit() {
    const exist = await this.dataLocal.existFilm(this.id);

    console.log({ exist });

    exist ? this.startOutline = true : this.startOutline = false;

    this.moviesSrv.getDetailFilm(this.id)
      .subscribe((resp) => {
        this.film = resp;
      });

    this.moviesSrv.getActorsMovie(this.id)
      .subscribe((resp) => {
        this.actors = resp.cast;
      });
  }

  back() {
    this.modalCtr.dismiss();
  }

  favorite() {
    this.startOutline = !this.startOutline;
    this.dataLocal.saveFilm(this.film);
  }
}
