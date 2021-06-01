import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAdonsEntryDetailsComponent } from './patient-adons-entry-details.component';

describe('PatientAdonsEntryDetailsComponent', () => {
  let component: PatientAdonsEntryDetailsComponent;
  let fixture: ComponentFixture<PatientAdonsEntryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAdonsEntryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAdonsEntryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
