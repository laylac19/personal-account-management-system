import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const body = this.el.nativeElement.ownerDocument.body;
    const sidebar = this.el.nativeElement.querySelector('nav');
    const toggle = this.el.nativeElement.querySelector('.toggle');
    const searchBtn = this.el.nativeElement.querySelector('.search-box');
    const modeSwitch = this.el.nativeElement.querySelector('.toggle-switch');
    const modeText = this.el.nativeElement.querySelector('.mode-text');

    this.renderer.listen(toggle, 'click', () => {
      if (sidebar.classList.contains('close')) {
        this.renderer.removeClass(sidebar, 'close');
      } else {
        this.renderer.addClass(sidebar, 'close');
      }
    });

    this.renderer.listen(searchBtn, 'click', () => {
      this.renderer.removeClass(sidebar, 'close');
    });

    this.renderer.listen(modeSwitch, 'click', () => {
      if (body.classList.contains('dark')) {
        this.renderer.removeClass(body, 'dark');
        modeText.innerText = 'Dark mode';
      } else {
        this.renderer.addClass(body, 'dark');
        modeText.innerText = 'Light mode';
      }
    });
  }
}
