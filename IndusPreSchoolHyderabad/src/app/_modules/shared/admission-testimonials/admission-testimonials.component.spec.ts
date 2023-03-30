import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionTestimonialsComponent } from './admission-testimonials.component';

describe('AdmissionTestimonialsComponent', () => {
  let component: AdmissionTestimonialsComponent;
  let fixture: ComponentFixture<AdmissionTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionTestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
