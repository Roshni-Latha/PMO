import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProjecttaskComponent } from './show-projecttask.component';

describe('ShowProjecttaskComponent', () => {
  let component: ShowProjecttaskComponent;
  let fixture: ComponentFixture<ShowProjecttaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProjecttaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProjecttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
