import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(string: string) {
    const firstChar = string.charAt(0).toUpperCase();
    const capitilizedString = firstChar + string.slice(1);
    return capitilizedString;
  }
}
