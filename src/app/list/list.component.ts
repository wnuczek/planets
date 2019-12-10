import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Page } from '../dummy';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
@Input() planetsList: Page;
@Output() pageChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onPageChanged(value) {
    this.pageChange.emit(value);
  }
}
