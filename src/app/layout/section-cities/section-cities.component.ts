import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-cities',
  templateUrl: './section-cities.component.html',
  styleUrls: ['./section-cities.component.scss']
})
export class SectionCitiesComponent implements OnInit {

  public demoData = [
    {name: 'Madrid', image: 'layer4.png'},
    {name: 'Barcelona', image: 'Layer5.png'},
    {name: 'Valencia', image: 'Layer6.png'},
    {name: 'Sevilla', image: 'Layer7.png'},
    {name: 'Málaga', image: 'Layer8.png'},
    {name: 'Bilbao', image: 'Layer9.png'},
    {name: 'Granada', image: 'Layer10.png'},
    {name: 'Zaragoza', image: 'Layer11.png'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
