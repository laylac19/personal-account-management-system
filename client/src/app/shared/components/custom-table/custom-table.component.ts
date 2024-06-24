import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableEnum} from "../../utils/enum/table-enum";
import {Page} from "../../models/config/page.model";
import {CustomTableColumn} from "./models/custom-table-column";
import {CustomTableButton} from "./models/custom-table-button";
import {TableActionButtonEnum} from "../../utils/enum/table-action-button.enum";

@Component({
  selector: 'pams-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  readonly ACTION_COLUMN_FIX = 1;

  rowsPerPage: number[] = TableEnum.ROWS_PER_PAGE;
  loader: boolean = true;

  @Input() totalRecords: number;
  @Input() data: Page<any>;
  @Input() cols: CustomTableColumn[] = [];
  @Input() buttons: CustomTableButton<any>[] = [];
  @Output() updateData: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  uptadeData(event: any): void {
    this.updateData.emit(event);
    this.data.content.length;
  }

  onButtonClick(action: Function, item: any): void {
    action(item);
  }

  validateActive(button: any, rowData: any): boolean {
    if(button.typeTable === 'User') {
      if(button.typeBtn === TableActionButtonEnum.ACTIVE.header && rowData.ativo) {
        return true;
      }
      if(button.typeBtn === TableActionButtonEnum.DELETE.header && !rowData.ativo) {
        return true;
      }
      if(button.typeBtn === TableActionButtonEnum.EDIT.header && !rowData.ativo) {
        return true;
      }
    }

    if(button.typeTable === 'Project') {
      if(button.typeBtn === TableActionButtonEnum.CONCLUDE.header && (rowData.status === 'ATIVO' && rowData.disciplina !== 'Projeto de Diplomação 2')) {
        return true;
      }
      if(button.typeBtn === TableActionButtonEnum.CONCLUDE.header && (rowData.status === 'ATIVO' && rowData.comentario)) {
        return true;
      }
      if(button.typeBtn === TableActionButtonEnum.ACTIVE.header && rowData.status === 'ATIVO') {
        return true;
      }
      if(button.typeBtn === TableActionButtonEnum.DELETE.header && (rowData.status === 'ATIVO' && rowData.comentario)) {
        return true;
      }
      if(button.typeBtn === TableActionButtonEnum.DELETE.header && (rowData.status === 'INATIVO' || rowData.status === 'CONCLUIDO')) {
        return true;
      }
      if(button.typeBtn === TableActionButtonEnum.CONCLUDE.header && (rowData.status === 'INATIVO' || rowData.status === 'CONCLUIDO')) {
        return true;
      }
      if(button.typeBtn === TableActionButtonEnum.ADVANCE.header && (rowData.status === 'ATIVO' && rowData.disciplina === 'Projeto de Diplomação 2')) {
        return true;
      }
      if(button.typeBtn === TableActionButtonEnum.ADVANCE.header && (rowData.status === 'INATIVO' || rowData.status === 'CONCLUIDO')) {
        return true;
      }
      if(button.typeBtn === TableActionButtonEnum.EDIT.header && (rowData.status === 'INATIVO' || rowData.status === 'CONCLUIDO')) {
        return true;
      }
    }
    return false;
  }

}
