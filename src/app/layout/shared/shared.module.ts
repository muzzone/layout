import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodosComponent } from './components/todos/todos.component';
import { CitiesCardComponent } from './components/cities-card/cities-card.component';

@NgModule({
  declarations: [NavComponent, FooterComponent, TodosComponent, CitiesCardComponent],
  imports: [
    CommonModule
  ],
  exports: [NavComponent, FooterComponent, TodosComponent, CitiesCardComponent]
})
export class SharedModule { }
