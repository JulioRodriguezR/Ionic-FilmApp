import { Pipe, PipeTransform } from "@angular/core";
import { Film } from "../models/models";

@Pipe({
  name: "filterImg",
})
export class FilterImgPipe implements PipeTransform {
  transform(films: Film[]): Film[] {
    return films.filter((film) => {
      return film.backdrop_path;
    });
  }
}
