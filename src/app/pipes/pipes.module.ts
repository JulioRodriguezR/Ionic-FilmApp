import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FilterImgPipe } from "./filter-img.pipe";
import { ImagePipe } from "./image.pipe";
import { MultilinePipe } from "./multiline.pipe";

@NgModule({
  declarations: [ImagePipe, MultilinePipe, FilterImgPipe],
  exports: [ImagePipe, MultilinePipe, FilterImgPipe],
  imports: [CommonModule],
})
export class PipesModule {}
