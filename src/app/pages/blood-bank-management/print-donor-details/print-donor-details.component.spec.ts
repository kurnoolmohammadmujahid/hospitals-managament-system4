import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDonorDetailsComponent } from './print-donor-details.component';

describe('PrintDonorDetailsComponent', () => {
  let component: PrintDonorDetailsComponent;
  let fixture: ComponentFixture<PrintDonorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintDonorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintDonorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
