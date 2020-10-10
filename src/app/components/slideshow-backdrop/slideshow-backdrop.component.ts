import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Film } from "src/app/models/models";
import { DetailComponent } from "../main/detail/detail.component";

@Component({
  selector: "app-slideshow-backdrop",
  templateUrl: "./slideshow-backdrop.component.html",
  styleUrls: ["./slideshow-backdrop.component.scss"],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() films: Film[] = [];

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 1.1,
    speed: 400,
    freeMode: true,
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  async showDetail(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {
        id,
      },
    });

    modal.present();
  }
}
