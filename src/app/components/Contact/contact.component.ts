import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['contact.component.css']
})
export class ContactComponent implements OnInit {

  itemsMap = new Map<string, number>();
  itemsMap$ = from(this.itemsMap);
  newKey = '';
  newValue = 0;

  constructor() {
    this.itemsMap.set('item1', 1);
    this.itemsMap.set('item2', 2);
    this.itemsMap.set('item3', 3);
  }

  addToMap() {
    this.itemsMap.set(this.newKey, this.newValue);
  }

  ngOnInit(): void {
  }

}
