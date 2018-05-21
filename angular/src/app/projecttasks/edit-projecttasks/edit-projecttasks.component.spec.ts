import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjecttasksComponent } from './edit-projecttasks.component';

describe('EditProjecttasksComponent', () => {
  let component: EditProjecttasksComponent;
  let fixture: ComponentFixture<EditProjecttasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjecttasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjecttasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
