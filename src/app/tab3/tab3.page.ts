import { Component } from "@angular/core";
import { DetailFilm, FavoriteGenre, Genre } from "../models/models";
import { DataLocalService } from "../services/data-local.service";
import { MoviesService } from "../services/movies.service";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  films: DetailFilm[] = [];
  genres: Genre[] = [];
  favoriteGenre: FavoriteGenre[];

  constructor(
    private dataLocalSrv: DataLocalService,
    private movieSrv: MoviesService
  ) { }

  async ionViewWillEnter() {
    this.films = await this.dataLocalSrv.loadFavorites();
    this.genres = await this.movieSrv.loadGenre();

    this.filmsByGenre(this.genres, this.films);
  }

  filmsByGenre(genres: Genre[], films: DetailFilm[]) {
    this.favoriteGenre = [];

    genres.forEach((genre) => {
      this.favoriteGenre.push({
        genre: genre.name,
        films: films.filter((film) => {
          return film.genres.find((g) => g.id === genre.id);
        }),
      });
    });
  }
}
