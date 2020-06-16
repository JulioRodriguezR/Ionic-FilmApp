import { Injectable, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { DetailFilm } from "../models/models";

@Injectable({
  providedIn: "root",
})
export class DataLocalService implements OnInit {
  films: DetailFilm[] = [];

  constructor(private storage: Storage, private toastCtrl: ToastController) {}

  ngOnInit() {
    this.loadFavorites();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

  saveFilm(film: DetailFilm) {
    let exist = false;
    let message = "";

    for (const index of this.films) {
      if (index.id === film.id) {
        exist = true;
        break;
      }
    }

    if (exist) {
      this.films = this.films.filter((f) => f.id === film.id);
      message = "Remove to favorite";
    } else {
      this.films.push(film);
      message = "Add to favorite";
    }

    this.presentToast(message);

    this.storage.set("films", this.films);

    return !exist;
  }

  async loadFavorites() {
    const loadFilm = await this.storage.get("films");

    this.films = loadFilm || [];

    console.log(this.films);

    return this.films;
  }

  async existFilm(id: any) {
    id = Number(id);

    await this.loadFavorites();
    const exist = this.films.find((film) => film.id === id);

    return exist ? true : false;
  }
}
