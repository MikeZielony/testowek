import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  search = '';

  @Output()
  outputEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
 sendEvent() {
    this.outputEvent.emit(this.search);
    console.log(this.search);
 }
}
