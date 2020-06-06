import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/models/models';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() films: Film[] = [];

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 1.1,
    speed: 400,
    freeMode: true
  };

  constructor() { }

  ngOnInit() { }

}
