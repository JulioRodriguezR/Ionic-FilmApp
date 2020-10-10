import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppEnv } from '../models/env.model';

const URL = (environment as AppEnv).imagePath;

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {
    if (!img) {
      return './assets/no-image-banner.jpg';
    }
    const imgUrl = `${URL}/${size}/${img}`;
    return imgUrl;
  }

}
