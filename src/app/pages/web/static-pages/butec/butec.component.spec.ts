import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButecComponent } from './butec.component';

describe('ButecComponent', () => {
  let component: ButecComponent;
  let fixture: ComponentFixture<ButecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
