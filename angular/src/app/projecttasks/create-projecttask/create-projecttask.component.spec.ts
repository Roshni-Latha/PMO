import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjecttaskComponent } from './create-projecttask.component';

describe('CreateProjecttaskComponent', () => {
  let component: CreateProjecttaskComponent;
  let fixture: ComponentFixture<CreateProjecttaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjecttaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjecttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
