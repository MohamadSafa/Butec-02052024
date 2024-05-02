import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityServicesComponent } from './facility-services.component';

describe('FacilityServicesComponent', () => {
  let component: FacilityServicesComponent;
  let fixture: ComponentFixture<FacilityServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacilityServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
