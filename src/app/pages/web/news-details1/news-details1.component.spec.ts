import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetails1Component } from './news-details1.component';

describe('NewsDetails1Component', () => {
  let component: NewsDetails1Component;
  let fixture: ComponentFixture<NewsDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsDetails1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
