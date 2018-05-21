import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProjecttaskComponent } from './delete-projecttask.component';

describe('DeleteProjecttaskComponent', () => {
  let component: DeleteProjecttaskComponent;
  let fixture: ComponentFixture<DeleteProjecttaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProjecttaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProjecttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
