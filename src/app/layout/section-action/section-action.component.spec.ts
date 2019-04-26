import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionActionComponent } from './section-action.component';

describe('SectionActionComponent', () => {
  let component: SectionActionComponent;
  let fixture: ComponentFixture<SectionActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
