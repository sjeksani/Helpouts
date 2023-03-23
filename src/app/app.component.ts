import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header> <nav-bar></nav-bar>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
