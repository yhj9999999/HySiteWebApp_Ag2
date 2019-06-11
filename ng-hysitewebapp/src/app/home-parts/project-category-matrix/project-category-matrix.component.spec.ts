import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCategoryMatrixComponent } from './project-category-matrix.component';

describe('ProjectCategoryMatrixComponent', () => {
  let component: ProjectCategoryMatrixComponent;
  let fixture: ComponentFixture<ProjectCategoryMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCategoryMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCategoryMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
