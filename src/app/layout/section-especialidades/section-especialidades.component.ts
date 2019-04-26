import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-especialidades',
  templateUrl: './section-especialidades.component.html',
  styleUrls: ['./section-especialidades.component.scss']
})
export class SectionEspecialidadesComponent implements OnInit {

  public demoData = [
    ['Acupuntores', 'Alergólogos', 'Analistas clínicos', 'Andrólogos', 'Anestesis', 'Acupuntores', 'Alergólogos', 'Analistas clínicos', 'Andrólogos', 'Anestesis'],
    ['Acupuntores', 'Alergólogos', 'Analistas clínicos', 'Andrólogos', 'Anestesis', 'Acupuntores', 'Alergólogos', 'Analistas clínicos', 'Andrólogos', 'Anestesis'],
    ['Acupuntores', 'Alergólogos', 'Analistas clínicos', 'Andrólogos', 'Anestesis', 'Acupuntores', 'Alergólogos', 'Analistas clínicos', 'Andrólogos', 'Anestesis'],
    ['Acupuntores', 'Alergólogos', 'Analistas clínicos', 'Andrólogos', 'Anestesis', 'Acupuntores', 'Alergólogos', 'Analistas clínicos', 'Andrólogos', 'Anestesis'],
    ['Acupuntores', 'Alergólogos', 'Analistas clínicos', 'Andrólogos', 'Anestesis', 'Acupuntores', 'Alergólogos', 'Analistas clínicos', 'Andrólogos', 'Anestesis'],
    ['Acupuntores', 'Alergólogos', 'Analistas clínicos', 'Andrólogos', 'Anestesis', 'Acupuntores', 'Alergólogos', 'Analistas clínicos', 'Andrólogos', 'Anestesis']
  ];


  constructor() { }

  ngOnInit() {
  }

}
