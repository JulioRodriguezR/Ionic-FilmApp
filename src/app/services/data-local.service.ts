import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DetailFilm } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  films: DetailFilm[] = [];

  constructor(
    private storage: Storage,
    private toastCtrl: ToastController
  ) { }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  saveFilm(film: DetailFilm) {
    let exist = false;
    let message = '';

    for (const index of this.films) {
      if (index.id === film.id) {
        exist = true;
        break;
      }
    }

    if (exist) {
      this.films = this.films.filter(
        (f) =>
          f.id === film.id
      );
      message = 'Remove to favorite';
    } else {
      this.films.push(film);
      message = 'Add to favorite';
    }

    this.presentToast(message);

    this.storage.set('films', this.films);
  }
}
