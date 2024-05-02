import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetails2Component } from './project-details2.component';

describe('ProjectDetails2Component', () => {
  let component: ProjectDetails2Component;
  let fixture: ComponentFixture<ProjectDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetails2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
