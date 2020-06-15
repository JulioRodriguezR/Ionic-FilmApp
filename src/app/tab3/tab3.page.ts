import { Component, OnInit } from '@angular/core';
import { DetailComponent } from '../components/main/detail/detail.component';
import { DetailFilm } from '../models/models';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  films: DetailFilm[] = [];

  constructor(private dataLocalSrv: DataLocalService) { }

  async ngOnInit() {
    this.films = await this.dataLocalSrv.loadFavorites();
  }

}
