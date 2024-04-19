import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable()
export class AlertMessagesUtil {

  constructor(
    private messageService: MessageService,
  ) {
  }

  showSuccessMessage(message?: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: message || 'Sucesso ao realizar operação'
    });
  }

  showErrorMessage(message?: string): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message || 'Erro ao realizar operação'
    });
  }
}
