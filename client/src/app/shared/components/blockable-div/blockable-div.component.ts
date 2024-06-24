import { Component, ElementRef, Input } from '@angular/core';
import {BlockableUI} from "primeng/api";

@Component({
  selector: 'pams-blockable-div',
  templateUrl: './blockable-div.component.html',
  styleUrls: ['./blockable-div.component.scss']
})
export class BlockableDivComponent implements BlockableUI {

  @Input() style: any;
  @Input() class: any;

  constructor(private el: ElementRef) {
  }

  getBlockableElement(): HTMLElement {
    return this.el.nativeElement.children[0];
  }

}
