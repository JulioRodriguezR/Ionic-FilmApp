import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFeauture() {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-01-01&primary_release_date.lte=2020-01-31&api_key=46a75e0fc67f2b17e2017e4c930e553f&language=en`);
  }
}
