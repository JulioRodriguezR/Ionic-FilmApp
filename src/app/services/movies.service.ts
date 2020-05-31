import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RootResponse } from '../models/models';
import { environment } from 'src/environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  private execQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}&language=en`;

    return this.http.get<T>(query);
  }

  getFeauture() {
    const t = new Date();
    const lastDay = new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
    const m = t.getMonth() + 1;

    let monthStr;

    if (m < 10) {
      monthStr = '0' + m;
    } else {
      monthStr = m;
    }

    const start = `${t.getFullYear()}-${monthStr}-01`;
    const end = `${t.getFullYear()}-${monthStr}-${lastDay}`;

    return this.execQuery<RootResponse>(`/discover/movie?primary_release_date.gte=${start}&primary_release_date.lte=${end}`);
  }
}
