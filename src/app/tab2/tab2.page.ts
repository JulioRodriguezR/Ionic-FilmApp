import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Film } from '../models/models';
import { DetailComponent } from '../components/main/detail/detail.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  txtSearch = '';
  movies: Film[] = [];
  points = ['Super Man', 'Spiderman', 'The Lord of the Ring'];
  searching = false;

  constructor(private moviesSrv: MoviesService, private modalCtrl: ModalController) { }

  search(ev) {
    const value = ev.detail.value;

    this.searching = true;

    if (value.length === 0) {
      this.searching = false;
      this.movies = [];

      return;
    }

    this.moviesSrv.getSearchMovie(value)
      .subscribe(resp => {
        this.movies = resp['results'];
        this.searching = false;
      });
  }

  async showDetail(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }
}
