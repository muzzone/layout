import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEspecialidadesComponent } from './section-especialidades.component';

describe('SectionEspecialidadesComponent', () => {
  let component: SectionEspecialidadesComponent;
  let fixture: ComponentFixture<SectionEspecialidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEspecialidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEspecialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
