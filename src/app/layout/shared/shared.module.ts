import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodosComponent } from './components/todos/todos.component';
import { CitiesCardComponent } from './components/cities-card/cities-card.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NavComponent, FooterComponent, TodosComponent, CitiesCardComponent, InfoCardComponent],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [NavComponent, FooterComponent, TodosComponent, CitiesCardComponent, InfoCardComponent]
})
export class SharedModule { }
