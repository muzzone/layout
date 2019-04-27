import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-reviews',
  templateUrl: './section-reviews.component.html',
  styleUrls: ['./section-reviews.component.scss']
})
export class SectionReviewsComponent implements OnInit {

  public demoData = [
    {name: 'David de Gea Quintana', city: 'Madrid', avatar: 'avatar1.png', active: true},
    {name: 'Sergio Ramos García', city: 'Camas', avatar: 'avatar2.png'},
    {name: 'Álvaro Borja Morata Martín', city: 'Madrid', avatar: 'avatar3.png'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
