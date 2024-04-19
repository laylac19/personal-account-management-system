import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  transform(value: any) {
    if (value === 'ATIVO') {
        return "Ativo";
    } else if(value === 'INATIVO') {
      return "Inativo";
    } else {
      return "Concluído";
    }
  }
}
