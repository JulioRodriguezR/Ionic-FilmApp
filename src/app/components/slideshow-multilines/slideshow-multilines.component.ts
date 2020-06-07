import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from 'src/app/models/models';
import { DetailComponent } from '../main/detail/detail.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-multilines',
  templateUrl: './slideshow-multilines.component.html',
  styleUrls: ['./slideshow-multilines.component.scss'],
})
export class SlideshowMultilinesComponent implements OnInit {
  @Input() films: Film[] = [];
  @Output() loaderMore = new EventEmitter();

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 3.3,
    speed: 400,
    freeMode: true,
    spaceBetwen: -10
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  onClick() {
    this.loaderMore.emit();
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
