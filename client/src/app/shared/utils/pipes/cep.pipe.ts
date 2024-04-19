import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cep' })
export class CEPPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) {
            return '';
        }

        value = value.replace(/\D/g, '');

        if (value.length >= 8) {
            return value.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');
        }

        return value;
    }
}
