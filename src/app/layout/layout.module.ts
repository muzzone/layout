import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { SectionEspecialidadesComponent } from './section-especialidades/section-especialidades.component';
import { SectionCitiesComponent } from './section-cities/section-cities.component';
import { SectionCardsComponent } from './section-cards/section-cards.component';
import { SectionReviewsComponent } from './section-reviews/section-reviews.component';
import { SectionActionComponent } from './section-action/section-action.component';

const routes: Routes = [{
  path: '', component: LayoutComponent
}];

@NgModule({
  declarations: [LayoutComponent,
    SectionHeaderComponent,
    SectionEspecialidadesComponent,
    SectionCitiesComponent, SectionCardsComponent,
    SectionReviewsComponent,
    SectionActionComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
