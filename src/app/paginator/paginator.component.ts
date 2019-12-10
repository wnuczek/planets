import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Page } from '../dummy';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
@Output() pageToLoad = new EventEmitter<string>();
@Input() planetsList: Page;

  constructor() { }

  ngOnInit() {
  }

}
