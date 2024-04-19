import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cellPhone'
})
export class PhonePipe implements PipeTransform {
  transform(value: any) {
    if (value === null || value === "") {
      return "";
    }
    return value.replace(/(\d{2})(\d{5})(\d{4})/g, "($1) $2-$3");
  }
}
