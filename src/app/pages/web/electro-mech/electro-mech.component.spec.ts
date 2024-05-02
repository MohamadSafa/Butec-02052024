import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroMechComponent } from './electro-mech.component';

describe('ElectroMechComponent', () => {
  let component: ElectroMechComponent;
  let fixture: ComponentFixture<ElectroMechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectroMechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectroMechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
