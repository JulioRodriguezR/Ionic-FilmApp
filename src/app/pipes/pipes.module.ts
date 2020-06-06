import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagePipe } from './image.pipe';
import { MultilinePipe } from './multiline.pipe';


@NgModule({
  declarations: [
    ImagePipe,
    MultilinePipe
  ],
  exports: [
    ImagePipe,
    MultilinePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
