import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjecttaskComponent } from './view-projecttask.component';

describe('ViewProjecttaskComponent', () => {
  let component: ViewProjecttaskComponent;
  let fixture: ComponentFixture<ViewProjecttaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProjecttaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjecttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
