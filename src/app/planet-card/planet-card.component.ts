import { Component, OnInit, Input} from '@angular/core';
import { Planet } from '../dummy';

@Component({
  selector: 'planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent implements OnInit {
  @Input() planet: Planet;

  constructor() { }

  ngOnInit() {
  }

}
