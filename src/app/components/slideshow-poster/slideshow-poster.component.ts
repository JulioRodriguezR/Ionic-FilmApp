import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/models/models';
import { DetailComponent } from '../main/detail/detail.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Input() films: Film[] = [];

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 3.3,
    speed: 400,
    freeMode: true
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

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
