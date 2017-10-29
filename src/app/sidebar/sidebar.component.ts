import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'posts', title: 'Posts',  icon: 'fa fa-book', class: '' },
    { path: 'albums', title: 'Albums',  icon: 'fa fa-picture-o', class: '' },
    { path: 'users', title: 'Utilisateurs',  icon: 'fa fa-users', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
