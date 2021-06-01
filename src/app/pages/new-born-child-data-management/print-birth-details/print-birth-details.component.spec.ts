import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintBirthDetailsComponent } from './print-birth-details.component';

describe('PrintBirthDetailsComponent', () => {
  let component: PrintBirthDetailsComponent;
  let fixture: ComponentFixture<PrintBirthDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintBirthDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintBirthDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
