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

    this.films.find(
      (element) => {
        element.id === film.id;
        exist = true;
      }
    );

    if (exist) {
      this.films = this.films.filter(
        (element) =>
          element.id === film.id
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
