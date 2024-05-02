import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetails1Component } from './project-details1.component';

describe('ProjectDetails1Component', () => {
  let component: ProjectDetails1Component;
  let fixture: ComponentFixture<ProjectDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetails1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
