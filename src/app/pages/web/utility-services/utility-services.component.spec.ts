import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityServicesComponent } from './utility-services.component';

describe('UtilityServicesComponent', () => {
  let component: UtilityServicesComponent;
  let fixture: ComponentFixture<UtilityServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UtilityServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
