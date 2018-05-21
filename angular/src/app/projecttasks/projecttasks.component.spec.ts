import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecttasksComponent } from './projecttasks.component';

describe('ProjecttasksComponent', () => {
  let component: ProjecttasksComponent;
  let fixture: ComponentFixture<ProjecttasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjecttasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjecttasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
