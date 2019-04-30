import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodosComponent } from './components/todos/todos.component';
import { CitiesCardComponent } from './components/cities-card/cities-card.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavMobileComponent } from './components/nav-mobile/nav-mobile.component';

@NgModule({
  declarations: [NavComponent, FooterComponent, TodosComponent, CitiesCardComponent, InfoCardComponent, NavMobileComponent],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [NavComponent, FooterComponent, TodosComponent, CitiesCardComponent, InfoCardComponent,  NavMobileComponent],
})
export class SharedModule { }
