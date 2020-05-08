import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //bootstrap navbar fix: https://stackoverflow.com/a/58343886
  navbarCollapsed = true;

  toggleNavbarCollapse() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
