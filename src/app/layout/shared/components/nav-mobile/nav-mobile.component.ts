import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.scss']
})
export class NavMobileComponent implements OnInit {
  public showMenu = false;
  public menuIcon = '../../../../../assets/images/menu-button-dark.svg';

  constructor() { }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.changeIcon();
  }

  changeIcon() {
    this.menuIcon = this.showMenu ?
      '../../../../../assets/images/menu-button-light.svg' :
      '../../../../../assets/images/menu-button-dark.svg';
  }

  ngOnInit() {
  }

}
