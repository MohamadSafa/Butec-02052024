import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngConComponent } from './eng-con.component';

describe('EngConComponent', () => {
  let component: EngConComponent;
  let fixture: ComponentFixture<EngConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngConComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EngConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
