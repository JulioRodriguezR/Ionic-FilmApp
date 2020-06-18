import { Pipe, PipeTransform } from "@angular/core";
import { DetailFilm } from "../models/models";

@Pipe({
  name: "filterImg",
})
export class FilterImgPipe implements PipeTransform {
  transform(films: DetailFilm[]): DetailFilm[] {
    return films.filter((film) => {
      return film.backdrop_path;
    });
  }
}
