import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  txtSearch = '';
  points = ['CiberPunk', 'Spiderman', 'Tous le matins de monde'];

  constructor() { }

  search(ev) {
    const value = ev.detail.value;
    console.log({ value });
  }
}
