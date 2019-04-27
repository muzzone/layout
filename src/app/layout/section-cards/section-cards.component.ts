import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-cards',
  templateUrl: './section-cards.component.html',
  styleUrls: ['./section-cards.component.scss']
})
export class SectionCardsComponent implements OnInit {

  public demoData = [
    {icon: 'Forma1.png', title: 'Encuentra tu especialista', text: 'Las opiniones reales de miles de pacientes te ayudarán a tomar siempre la mejor decisión.'},
    {icon: 'Forma2.png', title: 'Pide cita de forma fácil', text: 'Elige la hora que prefieras y pide cita sin necesidad de llamar. Es fácil, cómodo y muy rápido.'},
    {icon: 'Forma3.png', title: 'Recordatorios por SMS', text: 'Te confirmamos la cita al instante y te enviamos un recordatorio por sms antes de la cita.'},
    {icon: 'Forma4.png', title: 'Sin costes añadidos', text: 'Lorem ipsum dol amet, consectetu adipiscing elit. La reserva de cita es un servicio gratuito de Docfav.'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
