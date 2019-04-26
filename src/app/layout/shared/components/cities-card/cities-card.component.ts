import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cities-card',
  templateUrl: './cities-card.component.html',
  styleUrls: ['./cities-card.component.scss']
})
export class CitiesCardComponent implements OnInit {
  @Input() name: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
