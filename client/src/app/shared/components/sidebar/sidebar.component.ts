import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {Router} from "@angular/router";
import {SidemenuModel} from "../../models/config/sidemenu.model";
import {SidebarMenuOptionModel} from "../../utils/sidebar-menu-option.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    private router: Router
  ) {}

  @Input() sideMenuConfig?: SidemenuModel;

  sidebarControlOptions: SidebarMenuOptionModel[] = [
    new SidebarMenuOptionModel('fa-solid fa-border-all', 'Dashboard',
      () => this.router.navigateByUrl('/')),
    new SidebarMenuOptionModel('fa-solid fa-file-invoice-dollar', 'Accounts',
      () => this.router.navigateByUrl('/')),
    new SidebarMenuOptionModel('fa-solid fa-money-bill-transfer', 'Transactions',
      () => this.router.navigateByUrl('/')),
    new SidebarMenuOptionModel('fa-solid fa-credit-card', 'Credit Cards',
      () => this.router.navigateByUrl('/')),
    new SidebarMenuOptionModel('fa-solid fa-vault', 'Investments',
      () => this.router.navigateByUrl('/')),
  ];

  isVisible(): boolean {
    return this.sideMenuConfig ? this.sideMenuConfig.visible : false;
  }

}
