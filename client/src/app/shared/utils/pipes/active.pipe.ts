import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'active'
})
export class ActivePipe implements PipeTransform {
  transform(value: any) {
    if (value) {
      return "Ativo";
    } else {
      return "Inativo";
    }
  }
}
