import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pams-modal-custom',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {

  @Input() header: string = '';
  @Input() readonly : boolean = false;
  @Output() onSave: EventEmitter<void> = new EventEmitter<void>();
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSaveClick(): void {
    this.onSave.emit();
  }

  onCloseHandle(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.onClose.emit();
  }
}

