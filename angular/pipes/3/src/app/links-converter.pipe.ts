import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linksConverter',
  standalone: false,
})
export class LinksConverterPipe implements PipeTransform {
  transform(link: string, name: string): string {
    let res = `<a href="${link}">${name}</a>`;
    return res;
  }
}
