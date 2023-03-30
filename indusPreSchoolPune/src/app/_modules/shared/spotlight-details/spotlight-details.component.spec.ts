import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightDetailsComponent } from './spotlight-details.component';

describe('SpotlightDetailsComponent', () => {
  let component: SpotlightDetailsComponent;
  let fixture: ComponentFixture<SpotlightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotlightDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
