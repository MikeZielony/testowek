import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-components',
  templateUrl: './list-components.component.html',
  styleUrls: ['./list-components.component.css']
})
export class ListComponentsComponent implements OnInit {
  newSearch = '';
  constructor() { }

  ngOnInit(): void {
  }
  getEvent($event: any): void {
    this.newSearch = $event;
  }

}
