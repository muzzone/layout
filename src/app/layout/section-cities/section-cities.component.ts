import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-cities',
  templateUrl: './section-cities.component.html',
  styleUrls: ['./section-cities.component.scss']
})
export class SectionCitiesComponent implements OnInit {

  public demoData = [
    {name: 'Madrid', image: 'layer4.png'},
    {name: 'Madrid', image: 'layer4.png'},
    {name: 'Madrid', image: 'layer4.png'},
    {name: 'Madrid', image: 'layer4.png'},
    {name: 'Madrid', image: 'layer4.png'},
    {name: 'Madrid', image: 'layer4.png'},
    {name: 'Madrid', image: 'layer4.png'},
    {name: 'Madrid', image: 'layer4.png'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
