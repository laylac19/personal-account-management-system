import {Injectable} from '@angular/core';
import {ConfirmationService} from "primeng/api";
import {TableActionButtonEnum} from "./enum/table-action-button.enum";
import {AlertMessagesUtil} from "./alert-messages-util";

@Injectable()
export class MessagesConfirmation {

  constructor(private confirmMessage: ConfirmationService, private alertMessagesUtil: AlertMessagesUtil) {
  }

  // public confirm(id: number,
  //                messagem: string,
  //                entity: EntitiesUtil,
  //                action: TableActionButtonEnum,
  //                description: string,
  //                alterarSituacao: () => void): void {
  //   this.confirmMessage.confirm({
  //     header: `Confirmar ${action.header}?`,
  //     icon: action.icon,
  //     message: `${messagem} ${entity.description} - ${description}?`,
  //     acceptLabel: 'Sim',
  //     rejectLabel: 'Cancelar',
  //     accept: alterarSituacao
  //   });
  // }

  public confirm(id: number, messagem: string, action: TableActionButtonEnum,  alterarSituacao: () => void): void {
    this.confirmMessage.confirm({
          header: `Confirmar ${action.header}`,
          icon: action.icon,
          message: `${messagem}`,
          acceptLabel: 'Sim',
          rejectLabel: 'Cancelar',
          accept: alterarSituacao
    });
  }

}
