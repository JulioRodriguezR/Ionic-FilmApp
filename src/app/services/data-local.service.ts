import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DetailMovie } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  films: DetailMovie[] = [];

  constructor(private storage: Storage) { }

  saveFilm(film: DetailMovie) {
    this.films.push(film);
    this.storage.set('films', this.films);
  }
}
