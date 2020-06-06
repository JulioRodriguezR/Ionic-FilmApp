import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/models/models';

@Component({
  selector: 'app-slideshow-multilines',
  templateUrl: './slideshow-multilines.component.html',
  styleUrls: ['./slideshow-multilines.component.scss'],
})
export class SlideshowMultilinesComponent implements OnInit {
  @Input() films: Film[] = [];

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 3.3,
    speed: 400,
    freeMode: true,
    spaceBetwen: -10
  };

  constructor() { }

  ngOnInit() { }

}
