import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logo'
})
export class LogoPipe implements PipeTransform {

  imgName: string;

  transform(merchant: string): any {
    this.imgName = `assets/icons/${merchant.toLowerCase().replace(/ /g, '-')}.png`;
    return this.imgName;
  }

}
